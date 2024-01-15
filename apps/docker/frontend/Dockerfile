FROM node:alpine



WORKDIR /apps/frontend

COPY ./apps/frontend .

RUN chmod +x node_modules/.bin/react-scripts

# Switch to the 'node' user
USER node

RUN npm install

RUN npm run start
# CMD [ "sudo", "npm", "run", "start"]