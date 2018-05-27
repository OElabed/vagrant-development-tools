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

# Swap Nginx
say "Firco Proxy Swap configuration."
    CURRENT_STATE="$(cat ../tmp/state)"
    echo $CURRENT_STATE
    if [ "$CURRENT_STATE" == "BLUE" ]; then
        cp -f $CURRENT_FOLDER/../conf/Proxy/green.conf $CURRENT_FOLDER/../tmp/current.conf
        nginx -s reload
        sed -i "s/BLUE/GREEN/g" $CURRENT_FOLDER/../tmp/state        
    else
        cp -f $CURRENT_FOLDER/../conf/Proxy/blue.conf $CURRENT_FOLDER/../tmp/current.conf
        nginx -s reload
        sed -i "s/GREEN/BLUE/g" $CURRENT_FOLDER/../tmp/state
    fi

    logit "(INSTALL) Swap nginx proxy"
