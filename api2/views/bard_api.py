from flask import Blueprint, request, jsonify, current_app
import logging
from api.utility.fileutils import upload_file

from api.logic.collectionsmanager import CollectionsManager


api = Blueprint("collections_api", __name__)
log = logging.getLogger()

collectionsManager = CollectionsManager()


@api.route('/')
def index():
    return "it works"

@api.route('/bard')
def bard():
    return current_app.config['VALUE']

@api.route('/documents')
def upload_document():
    pass

@api.route('/collections', methods=['POST'])
def create_collection():
    data = request.get_json()
    name = data.get('name')
    collection_id = collectionsManager.create_collection(name)
    return collection_id

@api.route('/collections', methods=['GET'])
def get_collections():
    fetched_collections = collectionsManager.get_collections()
    return jsonify(fetched_collections)

@api.route('/upload', methods=['POST'])
def upload():
    files = request.files.getlist("files")
    try:
        add_file = files[0]
        s3_path = upload_file(add_file)
        return s3_path
    except Exception as e:
        return 'error'
