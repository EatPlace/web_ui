FROM node:18-alpine3.16

RUN apk add curl

WORKDIR /src/web_ui


ENV PATH /src/web_ui/node_modules/.bin:$PATH


COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts -g --silent


COPY . ./


CMD ["npm", "start", "--reset-cache"]
