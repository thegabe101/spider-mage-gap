from werkzeug.datastructures import FileStorage
from api.utility.s3 import upload_file_s3
from werkzeug.utils import secure_filename
from posixpath import join
import os

def save_file(file: FileStorage):
    filename = secure_filename(file.filename)
    filepath = join("/usr/src/app/appdata", filename)
    file.save(filepath)
    return filepath

def upload_file(file: FileStorage):
    filepath = save_file(file)
    sr3_path = upload_file_s3(filepath)
    return sr3_path