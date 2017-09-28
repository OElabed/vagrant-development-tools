#!/usr/bin/env bash


# Determine if this machine has already been provisioned
# Basically, run everything after this command once, and only once
if [ -f "/var/vagrant_provision" ]; then 
    exit 0
fi

function say {
    printf "\n--------------------------------------------------------\n"
    printf "\t$1"
    printf "\n--------------------------------------------------------\n"
}

db='databasename'

source ./config.cfg

# Install Basic tools
say "Change Time."
    # Change Time
    timedatectl set-timezone Europe/Paris

# Install Basic tools
say "Installing multiple tools."
    # Update aptitude library
    apt-get update >/dev/null 2>&1
    # Install tools
    apt-get install python-software-properties -yq >/dev/null 2>&1
    apt-get install apt-transport-https ca-certificates curl software-properties-common jq -yq >/dev/null 2>&1

# Install Desktop
say "Installing Desktop."
    apt-get update >/dev/null 2>&1
    apt-get install -y virtualbox-guest-dkms virtualbox-guest-utils virtualbox-guest-x11 xinit
    apt-get install -y --no-install-recommends ubuntu-desktop gnome-terminal

# Install Git
say "Installing Git."
    add-apt-repository ppa:git-core/ppa -yq >/dev/null 2>&1
    apt-get update >/dev/null 2>&1
    apt-get install git -yq >/dev/null 2>&1

# Install Docker
say "Installing Docker."
    apt-get remove docker docker-engine docker.io -yq >/dev/null 2>&1
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
    apt-key fingerprint 0EBFCD88 >/dev/null 2>&1
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" >/dev/null 2>&1
    apt-get update >/dev/null 2>&1
    apt-get install docker-ce -yq >/dev/null 2>&1

# Install Docker compose
say "Installing Docker compose."
    curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose

# Let this script know not to run again
touch /var/vagrant_provision