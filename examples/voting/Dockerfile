ARG base_image=node:16-slim

FROM ${base_image} AS build

WORKDIR /app
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./esbuild.config.ts ./
COPY ./public ./public
COPY ./src ./src

RUN yarn && yarn cache clean
RUN yarn build

FROM nginx
COPY --from=build ./app/dist ./usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
