#!/usr/bin/env bash

CONTAINER_ID="$(sudo docker ps -aqf "name=bluegreen_bluegreen_1")"

sudo  docker exec -i -t --env COLUMNS=`tput cols` --env LINES=`tput lines` $CONTAINER_ID /bin/bash
