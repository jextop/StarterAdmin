#!/bin/bash

# ./build.sh
./stop.sh

# run image
# docker run --rm --name admin -p 8010:8010 --link api:api -d starter_admin

# run image with volumes
docker run --rm --name admin -p 8010:8010 -v $PWD/deploy:/ -w / -d starter_admin

docker port admin
docker ps

# docker exec -it admin bash
# docker logs admin -f
