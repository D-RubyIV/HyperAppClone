FROM node:alpine



WORKDIR /apps/frontend

COPY ./apps/frontend .

RUN npm install

RUN chmod +x node_modules/.bin/react-scripts
# RUN npm run start
ENTRYPOINT ["npm", "run", "start"]