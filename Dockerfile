FROM node:18

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8147
CMD ["node", "src/index.js"]