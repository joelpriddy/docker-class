# Base Image
FROM node:14-alpine

# Set working directory
WORKDIR /usr/app

# Dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default Command
CMD ["npm", "start"]
