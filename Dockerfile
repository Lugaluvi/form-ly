FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN chmod +x /entrypoints/docker-entrypoint.sh
ENTRYPOINT ["/entrypoints/docker-entrypoint.sh"]

CMD npm start