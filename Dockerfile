FROM node:14

RUN mkdir -p /home/node/app

COPY package*.json ./

RUN npm cache clean --force

RUN npm cache verify

RUN npm install 

COPY . . 

CMD ["npm", "run", "start:dev"]