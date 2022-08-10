
FROM node:16
# Create app directory
WORKDIR /src/app
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production
COPY . .
# Container port
ENV PORT 5000 
# Host or local machine port
EXPOSE 5052
# docker run -d -p 8080(Host port):8080 (container Port) ravindrahbtik11/hello-world-dotnet:0.0.4.RELEASE
CMD ["npm", "start"]
