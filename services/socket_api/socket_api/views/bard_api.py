from flask import Blueprint, request, jsonify, current_app
import logging

api = Blueprint("collections_api", __name__)
log = logging.getLogger()

@api.route('/mages')
def index():
    mages = [{"id": "dfa", "key":"dfa", "name":"dfaa"}]
    return jsonify(mages)
