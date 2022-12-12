FROM node:carbon
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY dist/app.js /app/
CMD [ "node", "app.js" ]
EXPOSE 3000
