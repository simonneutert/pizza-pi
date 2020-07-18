FROM node:12 AS build
WORKDIR /app

# RUN npm install -g yarn # yarn was already installed

COPY yarn.lock .
COPY package.json .
RUN yarn install 

COPY . /app
RUN yarn build

FROM nginx
RUN mkdir /app
COPY --from=build /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
