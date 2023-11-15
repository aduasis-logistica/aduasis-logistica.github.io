---
sidebar_position: 1
---
# Guardado del documento

Una vez obtenido de forma correcta el documento por parte del web service de VUCEM, se procederá a definir el nombre del archivo y ruta en donde se guardará el archivo, tal y como se muestra en el siguiente diagrama de secuencia:

```kroki type=mermaid
    sequenceDiagram
        participant VUCEM
        participant Digitalizador
        participant SQL Server
        participant Servidor De Archivos
        Digitalizador ->> VUCEM: Referencia de la bitacora
        VUCEM ->> Digitalizador: Documento
        Digitalizador ->> SQL Server: EXEC up_digNombreArchivo
        SQL Server ->> Digitalizador: Nombre del archivo
        Digitalizador ->> SQL Server: EXEC up_digArchivoMaxSecuencial
        SQL Server ->> Digitalizador: Secuencial del archivo
        Digitalizador ->> SQL Server: EXEC up_digRutaArchivo
        SQL Server ->> Digitalizador: Ruta en disco donde se guarda el documento
        Digitalizador ->> Servidor De Archivos: Guarda en disco el documento
        Digitalizador ->> SQL Server: up_digitalizadorGuardado
```
