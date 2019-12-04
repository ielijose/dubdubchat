FROM node:alpine

ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV production

RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install --production=false

COPY . /app/

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]