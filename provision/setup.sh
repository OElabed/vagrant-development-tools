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
say "Installing multiple tools."
    # Update aptitude library
    apt-get update >/dev/null 2>&1
    # Install tools
    apt-get install python-software-properties -yq >/dev/null 2>&1
    apt-get install apt-transport-https ca-certificates curl software-properties-common -yq >/dev/null 2>&1

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

# Install mysql
say "Installing MySQL."
export DEBIAN_FRONTEND=noninteractive
    apt-get update
    apt-get install -y mysql-server >/dev/null 2>&1
    sed -i -e 's/127.0.0.1/0.0.0.0/' /etc/mysql/my.cnf
    restart mysql
    mysql -u root mysql <<< "GRANT ALL ON *.* TO 'root'@'%'; FLUSH PRIVILEGES;"


say "Installing handy packages"
    apt-get install -y curl git-core ftp unzip imagemagick vim colordiff gettext graphviz >/dev/null 2>&1

say "Creating the database '$db'"
    mysql -u root -e "create database $db"

#
# There is a shared 'sql' directory that contained a .sql (database dump) file. 
# This directory is part of the project path, shared with vagrant under the /vagrant path.
# We are populating the msyql database with that file. In this example it's called databasename.sql
#
say "Populating Database"
    mysql -u root -D $db < /vagrant/sql/$db.sql

say "Installing PHP Modules"
    # Install php5, libapache2-mod-php5, php5-mysql curl php5-curl
    apt-get install -y php5 php5-cli php5-common php5-dev php5-imagick php5-imap php5-gd libapache2-mod-php5 php5-mysql php5-curl >/dev/null 2>&1

# Restart Apache
say "Restarting Apache"
    service apache2 restart

# Installing Ruby
say "Installing rvm - preparing for ruby and compass"
    curl -L https://get.rvm.io | bash -s stable
    source /etc/profile.d/rvm.sh
    rvm requirements

say "Installing ruby now... wish me luck"
    rvm install ruby
    rvm use ruby --default
    rvm rubygems current

say "Installing SASS + COMPASS"
    gem install sass
    gem install compass


say "Installing WordPress Cli"
    curl https://raw.github.com/wp-cli/wp-cli.github.com/master/installer.sh | bash


# Let this script know not to run again
touch /var/vagrant_provision