FROM node:alpine



WORKDIR /apps/frontend

COPY ./apps/frontend .

# Set permissions for the app directory
RUN chown -R node:node /apps/frontend

# Switch to the 'node' user
USER node

RUN npm install --force

RUN sudo npm run start
# CMD [ "sudo", "npm", "run", "start"]