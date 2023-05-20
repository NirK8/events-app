FROM node:16

WORKDIR /usr/src/app

COPY . ./

RUN npm install

RUN npx nx build client

WORKDIR ./dist/apps/client

COPY . .

EXPOSE 4200

CMD ["npx", "nx", "run", "client:serve:production"]