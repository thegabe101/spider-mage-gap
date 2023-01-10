
import logging

from api.database.mongo.collections.characters.mage import Mage
from api.database.mongo.collections.characters.warrior import Warrior
from api.database.mongo.mongo_connection import MongoConnection

log = logging.getLogger(__name__)

class Manager:
    def __init__(self):
        MongoConnection.initialize()
        self.MageCollection = Mage(MongoConnection.DATABASE)
        self.WarriorCollection = Warrior(MongoConnection.DATABASE)

    def create_mage(self, name, power):
        return self.MageCollection.create({'name': name, 'power': power})

    def create_warrior(self, name, strength):
        return self.WarriorCollection.create({'name': name, 'strength': strength})

    def get_mages(self):
        fetched_collections = self.MageCollection.find()
        return fetched_collections

    def get_warriors(self):
        fetched_collections = self.WarriorCollection.find()
        return fetched_collections

    def get_mage(self, mage_id):
        mage = self.MageCollection.find_by_id(mage_id)
        return mage

def create_mage():
    pass