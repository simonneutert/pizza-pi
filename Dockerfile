FROM node:10 AS build

COPY . /app
WORKDIR /app

RUN npm install -g yarn

COPY yarn.lock .
COPY package.json .
RUN yarn install 
RUN yarn build

FROM nginx
RUN mkdir /app
COPY --from=build /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
