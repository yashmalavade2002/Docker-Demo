#BASE IMAGE
FROM node:20-alpine3.18
# SET WORKING DIRECTORY
WORKDIR /app

# COPY package.json and package-lock.json
# COPY package.json .
# COPY package-lock.json .

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8000 3000 3001

#  start the application
CMD [ "npm","start" ]





