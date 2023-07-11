#!/usr/bin/env -S DOCKER_BUILDKIT=1 docker build --no-cache --tag=server/prod . --network=host --file
# build a server production version
#

FROM node:19-alpine3.16
WORKDIR /app 

COPY package*.json ./
RUN npm install
COPY ./ .


RUN cd /app && ls 

CMD ["node","./src/index.js"]
