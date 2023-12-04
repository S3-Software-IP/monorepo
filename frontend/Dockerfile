#Use an official Node.js runtime as a base image
FROM node:16

#Set the working directory in the container
WORKDIR /src/app

#Copy package.json and package-lock.json to the working directory
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy the local files to the container
COPY . .

#Build the Next.js application
RUN npm run build

#Expose the port that the app will run on
EXPOSE 3000

#Define the command to run your application
CMD ["npm", "start"]