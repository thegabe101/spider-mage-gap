from api.database.mongo.mongo import Mongo


class Warrior(Mongo):
    def __init__(self, database):
        self.collection = 'warrior'
        super().__init__(database)

    def create(self, data):
        name = data.get('name')
        strength = data.get('strength')
        doc = {
            'name': name,
            'strength': strength
        }
        return self.insert_one(doc, self.collection)