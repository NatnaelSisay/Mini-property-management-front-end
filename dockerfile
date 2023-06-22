FROM node:18-alpine3.17 as build
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

CMD [ "npm" , "run" , "dev" ] 
ENV VITE_BASE_URL=http://localhost:8080
EXPOSE 3000