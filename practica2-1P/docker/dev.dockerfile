#IMAGEN USADA
FROM node:18-alpine

#DIRECTORIO DE TRABAJO
WORKDIR /var/www

#COPIANDO ARCHIVOS
COPY . /var/www

#INSTALANDO DEPENDENCIAS
RUN npm install

# docker-compose up --build
CMD [ "npm", "run", "dev" ]