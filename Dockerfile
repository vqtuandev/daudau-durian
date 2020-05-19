FROM node:11.13.0-alpine

RUN mkdir -p /usr/src/ether/etherwallet

WORKDIR /usr/src/ether/etherwallet

COPY . .
RUN npm install

ENV PORT=3000

EXPOSE $PORT

CMD ["npm", "start"]
