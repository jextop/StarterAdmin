#!/bin/bash

# build and copy files
./package.sh

# docker image
docker-compose build
