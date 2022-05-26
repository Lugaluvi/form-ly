FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN chmod +x entrypoints/docker_entrypoint.sh
ENTRYPOINT ["entrypoints/docker_entrypoint.sh"]

CMD npm start