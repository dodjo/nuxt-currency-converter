FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run generate


FROM nginx:stable-alpine
COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY ../nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
