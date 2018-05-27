#!/usr/bin/env bash

CURRENT_FOLDER="$(pwd)"
LOG_FILE="$CURRENT_FOLDER/../log/proxy.log"

logit() {
    USER="$(id -u -n)"
    echo "--> ${*}" 
    echo "[$USER][`date`] - ${*}" >> ${LOG_FILE}
}

function say {
    printf "\n--------------------------------------------------------\n"
    printf "\t$1"
    printf "\n--------------------------------------------------------\n"
}

# Stop Nginx
say "Stop Nginx."
    nginx -s stop
    logit "(STOP) Stop Nginx successful"
