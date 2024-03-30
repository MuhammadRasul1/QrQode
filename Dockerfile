FROM node:18.14.2-alpine as builder
# node:18.14.2
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM nginx:stable-alpine as runner

COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./.docker/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
