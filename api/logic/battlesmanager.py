import logging

from api.database.mongo.collections.battles import Battle
from api.database.mongo.mongo_connection import MongoConnection


log = logging.getLogger(__name__)

class BattlesManager:
    def __init__(self):
        MongoConnection.initialize()
        self.battle_collection = Battle(MongoConnection.DATABASE)

    def create_battle(self, name):
        return self.battle_collection.create_battle(name)

    def get_battles(self):
        fetched_collections = self.battle_collection.find()
        log.warn("FETCHED C {}".format(fetched_collections))
        return fetched_collections


