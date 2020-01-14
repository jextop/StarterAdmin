#!/bin/bash

# ./build.sh
./down.sh

# compose
docker-compose up -d
docker-compose ps

# docker-compose logs -f
# docker exec -it admin_admin_1 bash
