# ⚙️ Open API

:::info Enlace a repositorio
[Ir al repositorio en Github (Es necesario tener permisos)](https://github.com/aduasis-logistica/app-library-generation)
:::


Es una aplicación que genera bibliotecas para el proyecto de Angular de cierta API, basado en el 
principio de las API REST de code on demand:

<iframe width="560" height="315" src="https://www.youtube.com/embed/wlUW9hm_ajQ?si=8B9ZN2U8fNgA-9_S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## ¿Cómo funciona Open API generator?

<iframe width="560" height="315" src="https://www.youtube.com/embed/wtIVxvJFT2k?si=3p1SoQbpgaYjRtkf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 🔨 Compilación

Primero es necesario el schema de una API Restfull, esta se obtiene desde el swagger de cualquier microservicio.

Accede al swagger del api:

<img src="https://i.imgur.com/lxMZCoo.png"/>

Da clic en el enlace para ver swagger.json

<img src="https://i.imgur.com/gYaInLG.png"/>

Copie el contenido y dirijase a la carpeta del proyecto del open api generator

```shell
    >  cd C:\SINLS\app-library-generator\
```

dentro de este proyecto abra el archivo docker-compose.yaml

```yaml
services:
  openapi-service:
    build: .
    
    volumes:
    - ./src:/src
    command: >
      sh -c "rm -r -f /src/dist/
      && /usr/local/bin/docker-entrypoint.sh generate \
      -g typescript-angular \
      -i /src/config/swagger.json \
      -c /src/config/seguridad-api.yaml \
      -o /src/dist/
      "
```
Notese que se menciona un archivo llamado swagger.json y otro llamado con terminación .yaml
dirijase al archivo swagger.json y pegue el contenido del esquema previamente copiado.
Una vez hecho esto cambie el nombre del archivo  /src/config/seguridad-api.yaml dependiendo del microservicio que desea subir la libreria de code on demand.

Ahora, el archivo seguridad-api.yaml (o el microservicio que sea) tiene la configuracion referente
a el nombre del repositorio npm en donde se va a subir esta libreria, solo basta con incrementar la version
npmVersion a una mas reciente, por ejemplo:
```yaml
apiModulePrefix	: "Seguridad"
npmVersion: 0.0.12
npmName: "aduasis-seguridad-api"
fileNaming	: "kebab-case"
modelFileSuffix: ".model"
ngVersion : 17.0.8
useSingleRequestParameter	: true
```

La version de 0.0.12 a 0.0.13

```yaml
apiModulePrefix	: "Seguridad"
npmVersion: 0.0.13
npmName: "aduasis-seguridad-api"
fileNaming	: "kebab-case"
modelFileSuffix: ".model"
ngVersion : 17.0.8
useSingleRequestParameter	: true
```

una vez hecho esto dentro de la ruta raiz del proyecto del open api generator ejecute este comando teniendo docker abierto.

```shell
docker-compose up --build

```

vera que se agrego la siguiente carpeta con el compilado generado:

<img src="https://i.imgur.com/40rek5d.png"/>

Dirijase a el contenido desde la consola

```shell
cd ./src/dist
```
:::warning Version
La version de node debe ser la misma que se usa en el proyecto de portal SPA

:::

Ahora ejecute este comando para bajar las librerias externas:

```shell
npm install
```
Genere el compilado con este comando nuevamente:

```shell
npm run build
```
Como reusltado se generara esta carpeta dist:
<img src="https://i.imgur.com/yHtBLZd.png"/>

accedemos a ella y publicamos el paquete en npm (Hay que tener acceso al repositorio NPM)

```shell
cd ./dist/
```

```shell
npm publish
```

Una vez completado aparecera lo siguiente:

<img src="https://i.imgur.com/1tYGILa.png"/>

Basta con comprobar la version en NPM

https://www.npmjs.com/package/aduasis-seguridad-api

Si existe esta nueva versión, hay que actualizarla en el proyecto de SPA en el archivo package.json

<img src="https://i.imgur.com/rtaSXvl.png"/>

Una vez actualizada la libreria en el proyecto de angular, solo ejecute el siguiente comando para ver reflejado todos los nuevos metodos agregados para consultar la API:


```shell
npm install
```
