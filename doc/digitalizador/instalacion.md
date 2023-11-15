---
sidebar_position: 6
---

# Instalación

## Requisitos previos

Para que el digitalizador funcione de forma correcta es necesario los siguientes elementos:

1. Ejecutable setup.exe.
2. Archivo de configuración con extensión YAML.
3. Queries de definición de tablas, funciones y stored procedures.
4. [JDK8](https://www.oracle.com/mx/java/technologies/javase/javase8-archive-downloads.html).
5. Carpeta jasperstarter con sus librerias y reportes Jasper.

## 1.  Queries

### Digitalización

Tablas:

- dig_archivo
- dig_documento
- dig_aplicacion
- dig_modulo
- dig_relacion
- dig_digitalizacion
- dig_digitalizacion_parametro
- dig_digitalizacion_cliente_parametro
- dig_modulo_documento
- wdigitalizacion_cliente

Stored Procedures:
- up_digArchivoMaxSecuencial
- up_digRutaArchivo
- up_digNombreArchivo

### Digitalizador

Tablas:

- digitalizador_errores
- digitalizador_bitacora

Funciones:

- function obtener_parametro

Stored Procedures:

- up_digitalizadorMaster
- up_digitalizadorGuardado
- up_reportarDigitalizadorError
- up_digitalizadorDesencadenador
- up_digitalizadorBitacoraBarrido

 Stored Procedures de cada documento:

| Nombre | Documento ID | SP  |
 | --- | --- | --- |
 |  Acuse Cove | 72 | up_digitalizadorAcuseCovePDF |
 | Acuse eDocument | 73 | up_digitalizadorAcuseEDocumentPDF|
 | XML Pedimento   | 76  | up_digitalizadorPedimentoCompletoXML |
 | XML Cove  | 77 | up_digitalizadorCoveXML|
 | Cove PDF | 25 | up_digitalizadorCovePDF.sql, up_reporteCoveMercanciasModelosPDF ,up_reporteCoveMercanciasPDF , up_reporteCovePDF |

## 2. Archivo de configuración

Dentro del archivo de configuración config.yaml se encontrarán agrupados todas los posibles parámetros para que el digitalizador pueda funcionar, desde los más
generales a los más especificos.

:::tip
Asegurate de por lo menos tener bien configurada la ruta en donde se van a almacenar los logs para así poder debuguear otros posibles errores.
:::

:::caution Rutas
Al establecer la ruta de una carpeta en el archivo de configuración, estas siempre deben de ser diagonales invertidas '\\' y siempre deben de ser dos: '\\\\'.
:::

### Conexión a la base de datos

```yaml
connection:
  driver: "SQL Server Native Client 11.0"
  server: "localhost"
  user: "sa"
  password: "sa"
  database: "aduasism3"
```

### Digitalizadores
Define si un digitalizador está encendido, o si descencadena la digitalización de otros documentos, por ejemplo, un pedimento completo tiene coves definidos en su XML por lo que si se deja habilitada la opción de descencadenador va a insertar todos esos coves en la bitácora para que se digitalicen coves XML.

```yaml
digitalizadores:
  pedimentoCompleto: 
    estatus: on
    desencadenador: on
  coveXML: 
    estatus: on
    desencadenador: on
  covePDF: on
  acuseEDocument: on
  pedimentoPartida: on
  acuseCove: on
```

 
### Parámetros de motor de busqueda

Se recomienda dejarlo tal cual como esta.

```yaml
motor:
  #(Tiempo maximo de espera para responder una peticion)
  segundosDeTimeout: 20 
  #(Para evitar bloqueos por parte de VUCEM)
  minutosDeReposo: 1 
   #(Cantidad de veces que una peticion debe repetirse en caso de fallar)
  reintentos: 4
  #(Cantidad de referencias a digitalizar por oleada)
  cantidadDeReferencias: 30
```

### Logs

```yaml
logs:
  #Habilita y deshabilita el mostrado de logs en aplicación de consola(parametro cmd).
  cmd: on
  #Habilita y dehabilita el mostrado de logs en formato de texto.
  txt: on
  #Establece la carpeta en donde se van a almacenar los logs por fecha.
  path: "C:\\Aduasis\\Proyectos\\digitalizador\\logs\\"
```

## 3. Variables de entorno

Es necesario definir en las variables de entorno la ruta en donde se encuentra el ejecutable del digitalizador, pues es aqui la raíz de donde van a partir las distintas rutas que va a necesitar el digitalizador, tales como:
- Carpeta de log de archivos
- Carpeta jasperstartes
- Archivo de configuración config.yaml

El nombre de la variable debe ser "aduasis_digitalizador"

![Variables de entorno](https://i.imgur.com/HDGW1TU.png)



Si y solo si el digitalizador va a trabajar con reportes de tipo jasper será necesario establecer la ruta en donde se encuentra la Java HOME en las siguientes variables: 
- JAVA_HOME
- JDK_HOME

Tal como muestra la siguiente imagen:

<img src="/img/digitalizador/variables-entorno.png"/>



## 4. Instalación

### Servicio de windows
1.	Abrir la consola de Windows con permisos de administrador.
2.	Desde la consola dirigirse a la carpeta en donde se encuentra el ejecutable “setup.exe”.
Para ello utiliza el comando “cd” seguido de la ruta física de la carpeta en donde se encuentra el ejecutable.
 
3.	Colocar el comando “setup.exe install” en la consola.

4.	Colocar el comando “setup.exe start” seguido de la ruta completa del archivo de configuración con extensión YAML.

Si todo se encuentra en orden se podrá visualizar el siguiente estatus en el administrador de tareas – servicios.

### Aplicación de consola
Será necesario ubicar el ejecutable "setup.exe" en una carpeta en donde también se encuentre el archivo "config.yaml".
Una vez hecho lo anterior, basta con abrir el ejecutable.



### Diagrama de despliegue

```kroki type=plantuml
@startuml
actor usuario
rectangle "Configuraciones" as configuracion{
    file  config.yaml[
        <b>config.yaml</b>
        ----
        SQLSV String connection
        ....
        Digitalizadores
    ]
    node variablesDeEntorno[
        <b>Variables de entorno</b>
        ----
        JAVA_HOME
        ....
        JDK_HOME
        ....
        aduasis_digitalizador
    ]
}
agent digitalizador.exe as digitalizador
database aduasism3
folder  "Directorio" as directorio
folder  "Carpeta de logs" as directorioLogs
component "Digitalizadores concretos" <<Hilo / Thread>> as digitalizadoresConcretos
file "Documentos concretos" as documentosConcretos
file "Log.txt" as log
usuario --> configuracion: Edita
usuario --> digitalizador : Instala/Ejecuta
digitalizador --> configuracion : Lee
digitalizador .. aduasism3 : Se conecta a
digitalizador --> digitalizadoresConcretos : Tiene
digitalizadoresConcretos --> documentosConcretos : Generan
documentosConcretos --> directorio : Guardados en
digitalizadoresConcretos --> log : Generan
log --> directorioLogs : Guardados en
@enduml
```