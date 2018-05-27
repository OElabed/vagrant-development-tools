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

# Install Nginx
say "Init Nginx"
    touch $CURRENT_FOLDER/../tmp/current.conf
    cd ../tmp
    COMMON_CONFIG="$(pwd)"/current.conf 
    cd ..
    
    sed -i "s#BLUE_GREEN_CONF_PATH#$COMMON_CONFIG#g" /etc/nginx/nginx.conf
    cp -f $CURRENT_FOLDER/../conf/Proxy/blue.conf $CURRENT_FOLDER/../tmp/current.conf
    
    echo "BLUE" > $CURRENT_FOLDER/../tmp/state    
    logit "(INIT) Ngnix init configuration successfully"
