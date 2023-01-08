from flask import Blueprint, request, jsonify, current_app
import logging
from api.logic.battlesmanager import BattlesManager
api = Blueprint("battles_api", __name__)
log = logging.getLogger()

battles_manager = BattlesManager()


@api.route('/battles', methods=['POST'])
def create_mage():
    data = request.get_json()
    name = data.get('name')
    battleid = battles_manager.create_battle(name)
    return battleid

@api.route('/battles', methods=['GET'])
def get_battles():
    fetched_battles = battles_manager.get_battles()
    return jsonify(fetched_battles)


