FROM node:16.20.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm run generate
ENV HOST 0.0.0.0
ENV PORT 3000
CMD ["npm", "run", "start"]

