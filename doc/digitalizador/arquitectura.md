---
sidebar_position: 3
---

# Arquitectura

El Digitalizador es un software desarrollado en Python 3.4 para la digitalización de documentos mediante la consulta a los web services de VUCEM del SAT. En esta documentación se describe la arquitectura del software, su diseño y los componentes que lo componen.

## Capas

La arquitectura del Digitalizador sigue el patrón de arquitectura en capas o Layered Architecture, en la que se separan las responsabilidades de los componentes en capas. En este caso, se han definido cuatro capas: 

1. **Capa de Presentación**: Es la capa de interfaz con el usuario. En este caso, se utiliza la consola del sistema operativo o un servicio de Windows como interfaz de usuario.

2. **Capa de Negocio**: Es la capa que se encarga de procesar los datos de entrada y realizar la lógica de negocio. En este caso, esta capa se encarga de leer la configuración del archivo YAML, conectarse a la base de datos y ejecutar los hilos de digitalización de documentos.

3. **Capa de Acceso a Datos**: Es la capa que se encarga de la comunicación con la base de datos. En este caso, se utiliza SQL Server como motor de base de datos y se utiliza la librería pyodbc para la conexión y operaciones de consulta e inserción de datos.

4. **Capa de Servicios**: Es la capa que se encarga de la comunicación con los web services de VUCEM del SAT. En este caso, se utiliza la librería zeep para la comunicación con los web services de VUCEM y la librería Jasper Reports para la generación de archivos de digitalización de documentos que no son dependientes de VUCEM.

## Componentes

El Digitalizador se compone de los siguientes componentes:

- **Archivo de configuración YAML**: Es el archivo en el que se define la configuración necesaria para la digitalización de documentos. En él se definen las cadenas de conexión a la base de datos, los documentos que se desean digitalizar y si se van a requerir que se generen archivos de logs para su monitoreo.

- **Módulo de digitalización**: Es el componente que se encarga de ejecutar los hilos de digitalización de documentos. Este componente se comunica con la capa de acceso a datos para obtener la información necesaria de la tabla `digitalizador_bitacora` y con la capa de servicios para realizar la consulta a los web services de VUCEM.

- **Módulo de acceso a datos**: Es el componente que se encarga de la comunicación con la base de datos. En este componente se definen las consultas e inserciones necesarias para la gestión de la tabla `digitalizador_bitacora`, `dig_archivo` y `digitalizador_bitacora_errores`.

- **Módulo de servicios**: Es el componente que se encarga de la comunicación con los web services de VUCEM y la generación de archivos de digitalización de documentos que no son dependientes de VUCEM. En este componente se definen las operaciones necesarias para la consulta a los web services de VUCEM y la generación de los archivos de digitalización.
