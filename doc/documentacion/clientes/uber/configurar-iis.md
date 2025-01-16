# Configuración de IIS
A continuación se describe la configuración necesaria para lanzar portal SPA en conjunto con portal Java y la arquitectura de microservicios.

La aplicación esta conformada de los siguiente conmponentes - aplicativos:

![](https://i.imgur.com/AXZLZYS.png)

Para descargar cada componente de la aplicación, aquí se encuentran listados los repositorios

Requisitos previos **Tener descargado los siguientes softwares:**

- Docker desktop en su última versión
- Visual Studio Code

## 1. Descarga de microservicios

Serían estos para los microservicios (Todos deben de estar en la misma carpeta)

https://github.com/aduasis-logistica/api-gateway

https://github.com/aduasis-logistica/api-seguridad

https://github.com/aduasis-logistica/api-catalogos

https://github.com/aduasis-logistica/api-clasificacion

https://github.com/aduasis-logistica/api-factura-light

https://github.com/aduasis-logistica/api-digitalizacion

https://github.com/aduasis-logistica/api-reportes-jasper

![](https://i.imgur.com/jM7zRO7.png)


## 2. Descarga del frontend

Posteriormente bajar el siguiente repositorio del frontend

https://github.com/aduasis-logistica/app-portal

![](https://i.imgur.com/2xiAg0j.png)

# 3. Instalación de software

1. Instalar docker desktop

https://www.docker.com/products/docker-desktop/

# 4. Configuracion de microservicios

Nos vamos a la carpeta de api gateway y configuramos 

Creamos una variable de entorno llamado CONNECTION_STRING y le damos un valor parecido a este con las credenciales validas y accesibles desde la red en donde te encuentras

:::warning No coloques localhost, los contenedores tienen su propio entorno y a la hora de ejecutarse no lo encontrara, por lo que lo mas recomendable es que uses tu IPv4 accesible desde la red o un nombre de host.
:::

Ejemplo de contenido para la variable CONNECTION_STRING:
Server=LAPTOP-LMKKBD7I;Database=aduasism3;User Id=sa;Password=sa;MultipleActiveResultSets=True;TrustServerCertificate=true

![](https://i.imgur.com/rhp4T7m.png)