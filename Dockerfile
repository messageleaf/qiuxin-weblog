FROM node:20-alpine AS build

WORKDIR /app-build

COPY . .

RUN npm ci
RUN npm run build

FROM nginx:latest

COPY --from=build /app-build/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d


