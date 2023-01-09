from wsgi import application
from api.logic.mages import MageManager
import fantasynames as names

with application.app_context():
    mageManager = MageManager()

    for i in range(10):
        mage_name = names.dwarf()
        mage = mageManager.create_mage(mage_name)
