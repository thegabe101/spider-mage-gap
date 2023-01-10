from api.database.mongo.mongo import Mongo

class Character(Mongo):
    def __init__(self, database):
        super().__init__(database)

    def create(self, data):
        name = data.get('name')
        power = data.get('power')

        doc = {
            'name': name,
            'power_level': power
        }
        return self.insert_one(doc, self.collection)