#!/bin/bash

docker-compose down --remove-orphans
docker system prune -f
docker volume prune -f