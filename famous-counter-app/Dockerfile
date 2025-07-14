ARG NODE_VERSION=latest

FROM node:${NODE_VERSION}

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json .

RUN pnpm install

COPY . .

CMD ["pnpm", "dev"]