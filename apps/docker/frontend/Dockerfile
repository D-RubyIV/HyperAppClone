FROM node:alpine



WORKDIR /apps/frontend

COPY ./apps/frontend .

RUN chmod +x node_modules/.bin/react-scripts

RUN npm install

CMD ["npm", "run", "start"]