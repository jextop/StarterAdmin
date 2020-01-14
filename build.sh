#!/bin/bash

# chmod a+w -R ./
cnpm run build

# folder: deploy
cd deploy
rm -rf ./web/

# copy files
cp -r ../dist/ ./web/
cp ../public/favicon.png ./web/
cd ..

# base image
# cd ./deploy && ./build.sh && cd ..

# docker image
docker-compose build
