FROM node:22.8 AS build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci --silent

COPY . .

RUN npm run build
