FROM node:20.16.0-alpine3.20 AS build

WORKDIR /app

COPY package*.json .

RUN npm install -g @angular/cli@18.1.4
RUN npm install

COPY . .

CMD [ "ng", "serve" ]

EXPOSE 4200