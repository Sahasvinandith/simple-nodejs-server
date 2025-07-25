# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
# to leverage Docker cache for npm install
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that your Express.js server listens on
EXPOSE 8080

# Define the command to run your application
CMD [ "node", "server.js" ]