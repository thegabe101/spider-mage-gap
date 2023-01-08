import sys
import os
from flask import Flask
import pymongo
import logging
from flask_cors import CORS
from logging.handlers import RotatingFileHandler

from api.views import mount_blueprints
from api.database.mongo.mongo_connection import MongoConnection
import time
log = logging.getLogger()

def create_app(environment="local"):
    from config import config

    log.warn(f"using environment {environment}")
    app = Flask(__name__)

    CORS(
        app,
        supports_credentials=True,
        origins=['http://ui:3000']
    )

    if os.getenv('BARD_SETTINGS'):
        app.config.from_envvar("BARD_SETTINGS")
    app.config.from_object(config[environment])
    config[environment].configure(app)

    with app.app_context():
        MongoConnection.initialize()

    mount_blueprints(app)
    setup_logging('development')
    return app


def setup_logging(flask_env):
    logFormatter = logging.Formatter("%(asctime)s")
    log = logging.getLogger('werkzeug')
    if flask_env == 'development':
        log.setLevel(logging.DEBUG)
    else:
        log.setLevel(logging.WARN)
    log.propagate = False
    if len(log.handlers) < 1:
        streamHandler = logging.StreamHandler(sys.stdout)
        streamHandler.setFormatter(logFormatter)
        log.addHandler(streamHandler)
    else:
        streamHandler = log.handlers[0]
        streamHandler.setFormatter(logFormatter)
    if not os.path.isdir('logs'):
        os.mkdir('logs')

    fileHandler = RotatingFileHandler("logs/app.log", maxBytes=500000)
    fileHandler.setFormatter(logFormatter)
    log.addHandler(fileHandler)
