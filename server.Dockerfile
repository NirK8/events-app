FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm cache clean --force

RUN npx nx build server

WORKDIR ./dist/apps/server

RUN npm install

COPY . .

EXPOSE 3333

CMD ["node", "main.js"]