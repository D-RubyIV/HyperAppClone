FROM node:alpine



WORKDIR /apps/frontend

COPY ./apps/frontend .

RUN npm install

CMD chmod +x ./node_modules/.bin/react-scripts && npm run start

