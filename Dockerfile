FROM node:12-alpine

WORKDIR /app

ADD ./ /app

RUN yarn

ENV PORT 80

EXPOSE 80

ENTRYPOINT yarn start