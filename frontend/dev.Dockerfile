#!/usr/bin/env -S DOCKER_BUILDKIT=1 docker build --no-cache --tag=frontend/dev.tpl . --network=host --file
# build a develop version
#

FROM node:18-alpine3.15
WORKDIR /app 

COPY package*.json ./
RUN npm install

RUN cd /app && ls -a

EXPOSE 4000

CMD ["npm","run", "start"]
