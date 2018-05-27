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
say "Installing Firco Proxy."
    logit "(INSTALL) - install nginx"
    yum install epel-release -y
    yum install nginx -y
    yum clean -y all
    logit "(INSTALL) - change chmod /etc/nginx/nginx.conf"    
    chmod 777 /etc/nginx/nginx.conf
    cp -f $CURRENT_FOLDER/../conf/Proxy/nginx.conf /etc/nginx/nginx.conf
    logit "(INSTALL) ==> Ngnix installed successfully"
