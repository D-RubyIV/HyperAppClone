FROM node:alpine



WORKDIR /apps/frontend

COPY ./apps/frontend .

RUN chmod +x node_modules/.bin/react-scripts

RUN npm install

RUN apt-get update && \
    apt-get install -y xdg-utils

RUN npm run start --no-open
# CMD [ "sudo", "npm", "run", "start"]