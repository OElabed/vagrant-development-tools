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

source config.cfg

# Install Basic tools
say "Apt update."
    apt-get dist-upgrade -yq >/dev/null 2>&1
    apt update -yq >/dev/null 2>&1

# Install Basic tools
say "Change Time."
    # Change Time
    timedatectl set-timezone Europe/Paris

# Install Firefox
say "Installing Firefox dev edition."
    # Update aptitude library
    add-apt-repository ppa:ubuntu-mozilla-daily/firefox-aurora -yq >/dev/null 2>&1
    apt update -yq >/dev/null 2>&1
    apt install firefox -yq >/dev/null 2>&1

# Install Basic tools
say "Installing multiple tools."
    # Update aptitude library
    apt update -yq >/dev/null 2>&1
    # Install tools
    apt-get install python-software-properties -yq >/dev/null 2>&1
    apt-get install apt-transport-https ca-certificates curl software-properties-common jq -yq >/dev/null 2>&1

# Install VS Code
say "Installing VS Code."
    # Update aptitude library
    apt-get install libxss1 -yq >/dev/null 2>&1
    curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
    mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
    sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
    apt-get update -yq >/dev/null 2>&1
    apt-get install code -yq >/dev/null 2>&1

# Install Desktop
say "Installing Desktop."
    apt-get update >/dev/null 2>&1
    apt-get install -y --no-install-recommends ubuntu-desktop >/dev/null 2>&1
    apt-get install -y gnome-terminal >/dev/null 2>&1
    apt-get install -y virtualbox-guest-dkms virtualbox-guest-utils virtualbox-guest-x11 >/dev/null 2>&1

# Install Nginx
say "Installing Nginx."
    apt-get update >/dev/null 2>&1
    apt-get -y install nginx -yq >/dev/null 2>&1
    service nginx start

# Install Git
say "Installing Git."
    add-apt-repository ppa:git-core/ppa -yq >/dev/null 2>&1
    apt-get update >/dev/null 2>&1
    apt-get install git -yq >/dev/null 2>&1

# Install java
say "Installing java 8."
    add-apt-repository ppa:webupd8team/java -yq >/dev/null 2>&1
    apt-get update -yq >/dev/null 2>&1
    apt-get install oracle-java8-installer -yq >/dev/null 2>&1
    apt-get install openjdk-8-jdk -yq >/dev/null 2>&1

say "Installing NodeJs"
    sudo apt-get install build-essential -yq >/dev/null 2>&1
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    apt-get install nodejs -yq >/dev/null 2>&1

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

# Pull and Build Docker containers
say "Pull and Build Docker containers."
    cd /vagrant/provision/docker
    docker-compose up -d portainer
    cd --

# Let this script know not to run again
touch /var/vagrant_provision

reboot