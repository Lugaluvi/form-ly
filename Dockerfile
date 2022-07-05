FROM node:14.17.6

EXPOSE 3000

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node yarn.lock package.json ./
RUN yarn

COPY --chown=node:node . ./
RUN yarn build

ENV PORT 3000
ENV NODE_ENV production
ENV TYPEORM_ENTITIES ./dist/**/**.entity.js

CMD ["yarn", "start:prod"]
