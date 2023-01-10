from wsgi import application
from api.logic.manager import Manager
import fantasynames as names

with application.app_context():
    mageManager = Manager()

    for i in range(10):
        mage_name = names.elf()
        warrior_name = names.dwarf
        mage = mageManager.create_mage(mage_name, 10)
        warrior = mageManager.create_warrior(mage_name, 4)
