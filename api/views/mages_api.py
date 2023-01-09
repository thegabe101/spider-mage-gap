from flask import Blueprint, request, jsonify, current_app
import logging
from api.logic.mages import MageManager
api = Blueprint("mages_api", __name__)
log = logging.getLogger()

mage_manager = MageManager()


@api.route('/mages', methods=['POST'])
def create_mage():
    data = request.get_json()
    name = data.get('name')
    mageid = mage_manager.create_mage(name)
    return mageid

@api.route('/mages', methods=['GET'])
def get_mages():
    fetched_mages = mage_manager.get_mages()
    # commented out temporarily to try fetching a string from axios roll mage call
    # return jsonify(fetched_mages)
    return 'dakobed dangus'

@api.route('/mages/<mage_id>', methods=['GET'])
def get_mage(mage_id):
    mage = mage_manager.get_mage(mage_id)
    return jsonify(mage)

