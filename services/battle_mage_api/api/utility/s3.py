import boto3

s3 = boto3.resource("s3")
bucket = 'fantapibucket'
def upload_file_s3(file: str):
    key = "picture.png"
    s3.meta.client.upload_file(file, bucket, key)
    return f's3://{bucket}/{key}'