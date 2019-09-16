FROM node:10
COPY . /app
WORKDIR /app
RUN npm install -g yarn
RUN yarn install && yarn build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
