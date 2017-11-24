FROM node:alpine
RUN apk update && apk add --no-cache git
EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "start" ]
