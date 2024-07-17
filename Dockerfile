FROM node:20

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ARG NODE_ENV
RUN yarn build:$NODE_ENV

CMD ["sh", "-c", "yarn start:$NODE_ENV"]
