#!/usr/bin/env bash




function say {
    printf "\n--------------------------------------------------------\n"
    printf "\t$1"
    printf "\n--------------------------------------------------------\n"
}

# Install Basic tools
say "Apt update."
    apt-get dist-upgrade -yq >/dev/null 2>&1
    apt update -yq >/dev/null 2>&1


if [ -x "$(command -v docker)" ]; then
    echo "docker command is already installed"
else
   
    say "Installing Docker."
        apt-get remove docker docker-engine docker.io -yq >/dev/null 2>&1
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
        apt-key fingerprint 0EBFCD88 >/dev/null 2>&1
        add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" >/dev/null 2>&1
        apt-get update >/dev/null 2>&1
        apt-get install docker-ce -yq >/dev/null 2>&1
fi

if [ -x "$(command -v docker-compose)" ]; then
    echo "docker-compose command is already installed"
else
   
    # Install Docker compose
    say "Installing Docker compose."
        curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
        chmod +x /usr/local/bin/docker-compose

fi

if [ -x "$(command -v jq)" ]; then
    echo "install jq"
else
   
    # Install Basic tools
    say "Installing multiple tools."
        # Update aptitude library
        apt update -yq >/dev/null 2>&1
        # Install tools
        apt-get install python-software-properties -yq >/dev/null 2>&1
        apt-get install apt-transport-https ca-certificates curl software-properties-common jq -yq >/dev/null 2>&1

fi
