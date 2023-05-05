FROM node:18-alpine

WORKDIR /var/www

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=5000

ENV MONGO_URI='mongodb+srv://testmail:1234@cluster0.nb0hvng.mongodb.net/9B?retryWrites=true&w=majority'

RUN npm run test

RUN rm -r testing && rm -r node_modules

RUN npm install --prod

CMD [ "npm", "start" ]