# Use a base image with Node.js pre-installed
FROM node:19-bullseye

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to the working directory
COPY . .

# Install dependencies
RUN npm install

RUN npm prune --production

# Build the app using webpack
RUN npx webpack --mode production

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app when the container starts
CMD ["node", "app.js"]