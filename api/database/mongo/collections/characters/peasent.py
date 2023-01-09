from api.database.mongo.mongo import Mongo


class Peasent(Mongo):
    def __init__(self, database):
        self.collection = 'mage'
        super().__init__(database)

    def insert(self, results):
        return super().insert(results,"job1")

    def create(self, name):
        doc = {
            'name': name
        }
        return self.insert_one(doc, self.collection)