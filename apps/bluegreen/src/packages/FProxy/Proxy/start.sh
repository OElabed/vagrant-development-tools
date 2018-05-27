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
say "Start Nginx."

if [ -f "/run/nginx.pid" ]; then
    nginx -s reload 
else
    nginx
fi

nginx -t

logit "(START) Start Nginx successfully"
