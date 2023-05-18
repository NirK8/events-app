FROM node:16

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

ADD nx.json /usr/src/app/

ADD tsconfig.base.json /usr/src/app/

ADD apps/server /usr/src/app/apps/server

RUN npm install

RUN npx nx build server

WORKDIR ./dist/apps/server

RUN npm install

COPY . .

EXPOSE 3333

CMD ["node", "main.js"]