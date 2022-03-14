FROM node:lts-alpine

LABEL maintainer="Benjamin Rosas <ben@aliencyb.org>"

WORKDIR /app/

RUN apk update
RUN apk add git
RUN npm install -g --silent ember-cli

COPY package*.json ./
RUN npm ci

COPY . .

RUN ember build -prod

CMD ["node", "/app/fastboot-server.js"]
