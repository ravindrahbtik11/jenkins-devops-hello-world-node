
FROM bitnami/node:16 as builder
# Create app directory
WORKDIR /src/app
COPY package*.json ./
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production
COPY . .

ENV PORT 5000
EXPOSE 5000

CMD ["node", "init.js"]
