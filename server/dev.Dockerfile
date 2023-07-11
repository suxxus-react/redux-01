#!/usr/bin/env -S docker build --no-cache --tag=server/tpl . --network=host --file
# build a server develop version
#
FROM node:19-alpine3.16

WORKDIR /app

RUN npm install nodemon -g

COPY package*.json ./
RUN npm install

EXPOSE 3000
CMD ["nodemon", "./src/index.js"]
