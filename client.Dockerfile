FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

ADD nx.json /usr/src/app/

ADD tsconfig.base.json /usr/src/app/

ADD babel.config.json /usr/src/app/

ADD apps/client /usr/src/app/apps/client

RUN npm install

RUN npx nx build client

WORKDIR ./dist/apps/client

COPY . .

EXPOSE 4200

CMD ["npx", "nx", "run", "client:serve:production"]