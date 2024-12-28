FROM node:10.15.2

WORKDIR /var/current/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY local-packages local-packages
COPY scripts scripts

RUN npm install --only=production
RUN npm run install-packed-local
RUN npm install -g pm2
# Bundle app source
COPY . .

EXPOSE 8082

CMD [ "pm2-runtime", "dist/index.js" ]
