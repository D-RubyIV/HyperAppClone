FROM node:alpine



WORKDIR /apps/frontend

COPY ./apps/frontend .

RUN npm install --force

RUN chmod +x apps/frontend/node_modules/.bin/react-scripts.cmd

CMD [ "npm", "run", "start"]