from api.database.mongo.collections.battles.battle import Battle


class Mage(Battle):
    def __init__(self, database):
        self.collection = 'battles'
        super().__init__(database)

    def create_mage(self, name):
        doc = {
            'name': name
        }
        return self.insert_one(doc, self.collection)