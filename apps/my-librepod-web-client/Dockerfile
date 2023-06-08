FROM node:18.14.2-slim as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

FROM nginx:1.23-alpine as prod-image
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
