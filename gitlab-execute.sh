#!/bin/bash
docker exec -it -w $PWD gitlab-runner git config --global --add safe.directory "*"  &&  docker exec -it -w $PWD gitlab-runner gitlab-runner exec docker $1

