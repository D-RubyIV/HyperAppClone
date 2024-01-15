FROM node:alpine



WORKDIR /apps/frontend

COPY ./apps/frontend .

RUN npm install

RUN chmod +x node_modules/.bin/react-scripts
RUN npm run start
# CMD ["npm", "run", "start"]

# Create a file and print "hello" to it
RUN echo "hello" > hello.txt

# Print the content of the file when the container starts
CMD ["cat", "hello.txt"]