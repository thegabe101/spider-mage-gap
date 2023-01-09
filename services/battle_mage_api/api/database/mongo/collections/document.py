from api.database.mongo.mongo import Mongo


class Documents(Mongo):
    def __init__(self, database):
        self.collection = 'document'
        super().__init__(database)

    def insert(self, results):
        return super().insert(results,"job1")