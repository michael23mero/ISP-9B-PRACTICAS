#IMAGEN USADA
FROM node:18-alpine

#DIRECTORIO DE TRABAJO
WORKDIR /var/www

# docker-compose run --rm 
ENTRYPOINT [ "npm" ]