
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3001

ENV NODE_ENV=production

CMD ["npm", "run", "dev"]
