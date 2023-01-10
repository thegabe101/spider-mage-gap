from api.database.mongo.collections.characters.character import Character


class Mage(Character):
    def __init__(self, database):
        self.collection = 'mage'
        super().__init__(database)

    def create(self, data):
        name = data.get('name')
        power = data.get('power')
        doc = {
            'name': name,
            'power': power
        }
        return self.insert_one(doc, self.collection)