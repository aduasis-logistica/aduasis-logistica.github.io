---
sidebar_position: 1
---
# Bitácora (digitalizador_bitacora)

Esta tabla nos permite tener visibilidad de las referencias que pasaran por el proceso de digitalización y así poder monitorear distintos aspectos.

El esquema de la tabla es el siguiente:

```kroki type=plantuml
@startuml
class digitalizador_bitacora {
  id_cliente : varchar(6) <<PK>>
  id_tipo_operacion : char(1) <<PK>>
  id_referencia : varchar(10) <<PK>>
  identificador : varchar(100) <<PK>>
  id_documento : smallint <<PK>>
  id_rectificacion : int 
  fecha_ingreso : datetime
  intentos : smallint
  completado : bit
  fecha_cargado : datetime
  id_error : int
  existente_en_disco : bit
  remesa_sa : varchar(10)
  remesa_agente : varchar(10)
}
@enduml
```

## Campos de monitoreo

Entre las columnas de monitoreo se encuentran las siguientes:

- **intentos:** indica cuantas veces la referencia ha sido considerada por el digitalizador para intentar generar dicho documento, en caso de que los intentos sean 7 ya no volverá a ser considerada la referencia por el digitalizador.
- **fecha_cargado:** indica la fecha en cuando el documento se digitalizo correctamente.
- **completado:** es una bandera para saber si el documento ya se digitalizó.
- **existente_en_disco** indica si el archivo digitalizado ya existia en disco y por lo tanto tuvo que sobrescribir dicho documento.
- **fecha_ingreso:** fecha en que la referencia se insertó en la bitácora.
- **id_error** es el identificador de algun error guardado en la tabla digitalizador_errores para saber específicamente por qué es que el documento no pudo ser digitalizado.

## Campo digitalizador_bitacora.identificador

El valor del identificador puede variar dependiendo del id_documento establecido en el registro de la bitacora.

|Id|Documento|Identificador|
|-|-|-|
|77| Cove XML | COVE |
|76|Pedimento completo| Pedimento#Aduana#Patente |
|73|Acuse EDocument PDF | EDocument |
|72| Acuse Cove PDF | Cove |
|25| Cove PDF | Cove |

:::tip recomendación
Para el manejo de identificadores separados por '#' se puede hacer uso de la funcion obtener_parametro, dando como argumentos el identificador y el numero de parametro que se desea obtener.
:::

## Relación con oc_pedimento_pago

La bitacora se relaciona con oc_pedimento_pago por medio de los siguientes campos: id_cliente, id_tipo_operacion, id_referencia e id_rectificacion.
Dicha relación servirá para relacionar los documentos digitalizados a ese pedimento en portal.





## DigArchivo

Para saber si un archivo fue cargado por el digitalizador basta con revisar si la columna digitalizador tiene un valor de 1 (dig_archivo.digitalizador = 1).

## Regenerar documento

Si se desea volver a considerar una referencia de bitacora que ya fue generada o tuvo algun tipo de problema para ser digitalizada:
Elimine la referencia de bitacora y vuelva a insertarla o actualice los siguientes valores del registro ya existente:

- intentos=0
- cargado=0
- fecha_cargado=NULL

## Priorizar documentos

Si se desea dar prioridad a un documento basta con establecer en el campo de intentos un valor negativo para que el order ascendente de consulta de referencias aplique a favor de la referencia que necesitamos priorizar.
