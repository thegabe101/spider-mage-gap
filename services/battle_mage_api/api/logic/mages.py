
import logging

from api.database.mongo.collections.mage import Mage
from api.database.mongo.mongo_connection import MongoConnection

log = logging.getLogger(__name__)

class MageManager:
    def __init__(self):
        MongoConnection.initialize()
        self.MageCollection = Mage(MongoConnection.DATABASE)

    def create_mage(self, name):
        return self.MageCollection.create_mage(name)

    def get_mages(self):
        fetched_collections = self.MageCollection.find()
        log.warn("FETCHED C {}".format(fetched_collections))
        return fetched_collections
    def get_mage(self, mage_id):
        mage = self.MageCollection.find_by_id(mage_id)
        return mage

def create_mage():
    pass