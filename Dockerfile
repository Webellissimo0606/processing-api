# ----------------------------------------------------------------------------
# processing-api docker container
# 

FROM node:latest
MAINTAINER Michael Tuttle <tuttlem@gmail.com>

# Internal application server listens on 3000
EXPOSE 3000

# setup the application folder 
ADD . /usr/src/app

# -----------------------------------------------------------------------------
# Security certificates
#
#
# ADD /some/place/to/ssl/key  /usr/src/app/server.key
# ADD /some/place/to/ssl/cert /usr/src/app/server.cer
# 
# ADD /some/place/to/signing/key  /usr/src/app/signing.key
# ADD /some/place/to/signing/cert /usr/src/app/signing.cer

WORKDIR /usr/src/app

RUN git config --global url."https://".insteadOf git://

# get the application installed
RUN npm install --unsafe-perm

# start the application
CMD [ "node", "index.js" ]
