# 🖨 API Jaspers

:::info Enlace a repositorio
[Ir al repositorio en Github (Es necesario tener permisos)](https://github.com/aduasis-logistica/api-reportes-jasper)
:::

<details>
  <summary>**🧪 Stack tecnológico**</summary>
  
  Lenguajes de programación:
  - Java 17

  IDEs/Editores recomendados:
  - IntelliJ Community Edition

  ¿Qué necesito saber?
  - Maven se utiliza como build tool
  - Springboot es el framework usado para el desarrollo de la API
  - El método de autenticación de esta API es por medio de JWT

</details>

## ℹ️ ¿Qué es?

Su función es proporcionar un API de tipo REST a usuarios finales y aplicaciones para la generación de reportes hechos por medio de Jasper Reports.

## 💿 Instalación

[Descargue el IDE de IntelliJ Community Edition](https://www.jetbrains.com/idea/download/?section=windows)

Una vez descargado importe la carpeta del proyecto

Agregue la siguiente configuración en IntelliJ para ejecutar la aplicación, haciendo clic en edit configurations:

![](https://i.imgur.com/C3PBfiV.png)

Agregar nueva configuración:

![](https://i.imgur.com/LNHHSvD.png)

Seleccionamos aplicación:

![](https://i.imgur.com/Cql4hUb.png)

Y dejamos la configuración de esta manera:

![](https://i.imgur.com/n1H7gVq.png)

Antes de ejecutar la aplicación cierre IntelliJ y agregue las siguientes variables de entorno:

Establecer la variable las siguientes variables de entorno:

- RUTA_REPORTES (Si el servidor en donde se instala el api jasper esta en donde se encuentra el server de portal, se recomienda que la ruta deba coincidir con la que se encuentra en la base de datos como webApliacion.path_reportes). Ejemplo de ruta valida: "C:\SISNL\TPLaser\Reportes\"

- CONNECTION_STRING_JAVA (connection string para establecer conexión a la base de datos a aduasism3). Ejemplo: jdbc:sqlserver://mi-servername;databaseName=aduasism3;encrypt=true;trustServerCertificate=true;user=sa;password=sa

- JWT_KEY
    Puedes usar para crear una propia https://jwtsecret.com/generate.
    NOTA: este JWT no debe ser compartido o expuesto fuera de esta variable de entorno por cuestiones de seguridad.

Temrinado esto, vuelva a abrir intelliJ y ejecute el proyecto con la configuración agregada haciendo clic en el botón run.

## 🔨 Compilación

gregue la siguiente configuración en IntelliJ para compilar la aplicación, haciendo clic en edit configurations:

![](https://i.imgur.com/C3PBfiV.png)

Agregar nueva configuración:

![](https://i.imgur.com/LNHHSvD.png)

Seleccionamos maven:

![](https://i.imgur.com/eBo7KNy.png)

La configuración debe quedar así:

![](https://i.imgur.com/j1mUPBV.png)

Nos aseguramos que tengamos seleccionada esa configuración y damos en build project:

![](https://i.imgur.com/KHBnFys.png)

Por ultimo damos clic en run:

![](https://i.imgur.com/DK1IhzC.png)

Como resultado nos arrojara en los logs la ruta del compilado .jar que se utiliza para deplegar la aplicación en el servidor.

![](https://i.imgur.com/r5Hdfu7.png)

## 🚀 Despliegue

### Archivos e instaladores necesarios

- Instale la siguiente versión de java JRE 17[Java Archive Downloads - Java SE 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).

- Instale la siguiente utileria (archivo exe) para correr el compilado .jar como servicio de Windows [winsw](https://github.com/winsw/winsw).

En caso de requerir un poco más de información vease este tutorial:
<iframe width="560" height="315" src="https://www.youtube.com/embed/zxM6ppSGeJY?si=-SRwJEKPuvQXgKhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Cree una carpeta en donde se va a guardar los binarios del api de jasper, por ejemplo, C:\SISNL\api-jasper\ podría ser una ruta ideal sin espacios y asegurese de tener estos tres archivos (api.jar, setup.exe y setup.xml):

![API Jasper Required](/img/api-jasper-required.png)

Una vez teniendo estos archivos edite el archivo setup.xml y serciorese de que la ruta en donde se encuentra el archivo java.exe de la version 17 es correcta.

![API Jasper config](/img/api_jasper_setup_xml.png)

NOTA: en caso de que se desee cambiar el puerto de la api hagalo desde el criterio —server.port del nodo arguments en setup.xml.

### Configuración de variables de entorno

Establecer la variable las siguientes variables de entorno:

- RUTA_REPORTES (Si el servidor en donde se instala el api jasper esta en donde se encuentra el server de portal, se recomienda que la ruta deba coincidir con la que se encuentra en la base de datos como webApliacion.path_reportes). Ejemplo de ruta valida: "C:\SISNL\TPLaser\Reportes\"

- CONNECTION_STRING_JAVA (connection string para establecer conexión a la base de datos a aduasism3). Ejemplo: jdbc:sqlserver://mi-servername;databaseName=aduasism3;encrypt=true;trustServerCertificate=true;user=sa;password=sa

- JWT_KEY
    Puedes usar para crear una propia https://jwtsecret.com/generate.
    NOTA: este JWT no debe ser compartido o expuesto fuera de esta variable de entorno por cuestiones de seguridad.

### Comprobar funcionamiento de api jasper

Abra una consola y dirijase a la ruta en donde se encuentra guardada la aplicación

```bash
cd C:\SISNL\ruta-donde-este-la-api\
```

Después ejecute el siguiente comando:

```bash
java -jar api.jar --server.port=8033
```

En caso de que la aplicación funcione correctamente debe de poder ser capaz de ver el siguiente mensaje al ingresar desde el navegador a la ruta localhost:8033/info

![image.png](https://i.imgur.com/SiDIQxq.png)

Si la API responde con el número de versión cierre la consola y proceda a instalar la aplicación en forma de servicio de windows.

### Instalar API  como servicio de windows

Abra una consola con permisos de administrador y dirijase a la carpeta en donde se encuentran los binarios:

```bash
cd C:\SISNL\ruta-donde-este-la-api\
```

Ejecute el comando setup install

```bash
setup install
```

Y por último el comando setup start:

```bash
setup start
```
Notará que existirá un servicio nuevo llamado API Jasper:

![image.png](https://i.imgur.com/yE3LRLE.png)

Compruebe que la aplicación funciona correctamente ingresando desde localhost:[puerto establecido en setup.xml]/info

![image.png](https://i.imgur.com/M0dMgP7.png)

Por último asegurese que el arranque de esta API se encuentra de forma automática haciendo click sobre el servicio y en propiedades.

![image.png](https://i.imgur.com/VlIZDhL.png)

Asegurese de tener marcado la opción “Automatic”.

![](https://i.imgur.com/1PyfaXP.png)