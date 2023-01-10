from api.database.mongo.collections.battles.battle import Battle


class War(Battle):
    def __init__(self, database):
        self.collection = 'battles'
        super().__init__(database)

    def create(self, data):
        name = data.get('name')
        doc = {
            'name': name
        }
        return self.insert_one(doc, self.collection)