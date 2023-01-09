from socket_api.views.bard_api import api as bard_api


def mount_blueprints(app):
    app.register_blueprint(bard_api)
