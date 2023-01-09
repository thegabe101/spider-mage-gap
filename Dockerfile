FROM python:3.8-buster

COPY requirements.txt /opt/
RUN pip3 install -r /opt/requirements.txt

WORKDIR /usr/src/app
#COPY . .

RUN mkdir /usr/src/app/appdata

ADD . .
RUN pip install .
COPY seed_data.py /usr/src/app/seed_data.py
ENV FLASK_APP=
ENV FLASK_DEBUG=1
CMD  ["flask", "run", "--host", "0.0.0.0", "--port", "8080"]

