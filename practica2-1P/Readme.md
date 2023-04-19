# PRACTICA 2 -1P

### API REST SIMPLE EN TYPESCRIPT

### CONFIGURACION
- Dentro de la carpeta docker se creoron los archivos dockerfiles con su respectiva imagen, directorio de trabajo y comando de ejecución.
- Se definio el archivo docker-compose.yml para definir los servicios a utilizar, definiendo puertos, volumenes, variables de entorno, etc

### ACCESO A DOCKER DE FORMA INTERACTIVA

**INICIALIZACIÓN:**
***docker-compose up --build serve***
![](./uploads/capture-1.png)
### CAMBIOS DESDE EL HOST
![](./uploads/capture-2.png)
![](./uploads/capture-2-1.png)

**INICIALIZACIÓN:**
***docker-compose run --rm npm***
![](./uploads/capture-3.png)

**INSTALACIÓN DE MODULOS:**
***docker-compose run --rm npm i***
![](./uploads/capture-4.png)

**DEPENDENCIAS INSTALADAS:**
***docker-compose run --rm npm ls***
![](./uploads/capture-5.png)

**BUILD DE TYPESCRIPT A JAVASCRIPT:**
***docker-compose run --rm npm build***
![](./uploads/capture-6.png)

**VERSION NPM:**
***docker-compose run --rm npm --version***
![](./uploads/capture-7.png)