from api.database.mongo.mongo import Mongo


class Battle(Mongo):
    def __init__(self, database):
        self.collection = 'mage'
        super().__init__(database)

    def insert(self, results):
        return super().insert(results,"job1")

