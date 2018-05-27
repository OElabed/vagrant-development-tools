FROM centos:7.3.1611

RUN yum -y update; yum clean all \
    && yum -y install gcc gcc-c++ cpp make \ 
    && yum clean all
# ...

# ENV APACHE_RUN_USER www-data
# ENV APACHE_RUN_GROUP www-data
# ENV APACHE_LOG_DIR /var/log/apache2

RUN yum -y install epel-release \
    && yum -y install python-pip \
    && pip install ngxtop

RUN mkdir /workspace
COPY packages /tmp/packages
RUN make -C /tmp/packages
RUN tar -zxvf /tmp/packages/FProxy.tar.gz -C /workspace
RUN find /workspace/ -name "*.sh" -exec chmod -v +x {} \;
RUN ls -al /workspace/Proxy/

# To be deleted 
## START
RUN mkdir /servers
COPY serverBlue /servers/serverBlue
COPY serverGreen /servers/serverGreen
## END

EXPOSE 80 443

ENTRYPOINT ["/workspace/Proxy/loop.sh"] 
