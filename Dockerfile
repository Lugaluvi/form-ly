FROM node:latest

RUN apk add --update --no-cache yarn nodejs postgresql-dev

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["./entrypoints/docker_entrypoint.sh"]