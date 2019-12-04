FROM node:alpine

ENV PATH /app/node_modules/.bin:$PATH

RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn

COPY . /app/

RUN webpack-cli --config webpack.config.js

EXPOSE 3000

CMD ["yarn", "start"]