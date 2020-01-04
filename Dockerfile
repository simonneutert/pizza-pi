FROM node:10 AS build
WORKDIR /app

# RUN npm install -g yarn # yarn was already installed

COPY yarn.lock .
COPY package.json .
RUN yarn install 

COPY . /app
RUN rm -rf dist
RUN rm -rf node_modules
RUN yarn build

FROM nginx
RUN mkdir /app
COPY --from=build /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
