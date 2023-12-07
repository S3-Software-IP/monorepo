# Use an official Node.js runtime as a base image
FROM node:16

# Create a new user named "appuser"
RUN adduser --disabled-password --gecos '' appuser

# Set the working directory in the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --ignore-scripts

# Copy the local files to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Change the ownership of the working directory to the new user
RUN chown -R appuser:appuser /src/app

# Switch to the new user
USER appuser

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
