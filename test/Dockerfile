FROM node:16

# Create app directory
WORKDIR /test

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "server.js" ]

# FROM node:19-alpine3.15
# COPY . /test
# WORKDIR "/test"
# RUN npm install
# RUN npm start
# EXPOSE 5000
# FROM node:alpine
# RUN mkdir /app
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# CMD ["npm", "start"]