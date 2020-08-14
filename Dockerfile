FROM node:12-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm i --silent

COPY . .

CMD npm run dev