#!/bin/bash

# ./build.sh
./stop.sh

# run image
# docker run --rm --name admin -p 8010:8010 --link api:api -d admin

# run image with volumes
docker run --rm --name admin -p 8010:8010 \
    -v $PWD/deploy:/root/code -w /root/code \
    --link api:api -d admin

docker port admin
docker ps

# docker exec -it admin bash
# docker logs admin -f
