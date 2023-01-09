from flask import Blueprint, request, jsonify, current_app
import logging
api = Blueprint("battles_api", __name__)
log = logging.getLogger()



@api.route('/battles', methods=['POST'])
def create_mage():
    data = request.get_json()
    name = data.get('name')
    return battleid

@api.route('/battles', methods=['GET'])
def get_battles():
    return jsonify(fetched_battles)


