from wsgi import application
from api.logic.mages import MageManager
with application.app_context():
    mageManager = MageManager()
    mageManager.create_mage("aaaaaaaaaeee")
