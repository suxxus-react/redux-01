#!/usr/bin/env -S docker build --no-cache --tag=frontend/prod.tpl . --network=host --file
# build a production version
#

FROM node:18-alpine3.15 as build-stage
ARG now
ENV build_date=$now
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN ls -a
RUN npm run check:prj
RUN npm run build
RUN ls -a

FROM nginx:1.17.10 as production-stage
RUN mkdir /app
COPY --from=build-stage /app/build /app
RUN ls -a /etc/nginx/
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
