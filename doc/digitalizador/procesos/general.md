---
sidebar_position: 1
---
# Proceso general

## Diagrama de flujo

A continuación la representación del proceso general a forma de diagrama de flujo:

```kroki type=mermaid
flowchart TD
   D1(Inicializa digitalizador) --> D2(Lee archivo de configuracion)
   D2 --> D3(Testea parametros de configuración)
   D3 --> D4(Busca e inserta referencias en digitalizador_bitacora)
   D4 --> D5(Trae referencias de digitalizador_bitacora)
   D5 --> D6(Consulta en VUCEM la referencia)
   D6 --> D7{VUCEM devuelve una respuesta correcta?}
   D7 -->|Sí|D8(Guarda el archivo en disco y en dig_archivo)
   D7 -->|No|D9(Guarda la causa del error en digitalizador_bitacora_errores)
   D8 --> FIN
   D9 --> FIN
```

## Inicialización del digitalizador

```kroki type=mermaid
    sequenceDiagram
        actor Usuario
        participant Digitalizador
        participant DigitalizadorConcreto

        Usuario ->> Digitalizador: Inicializa proceso de digitalizacion
        Digitalizador ->> Digitalizador: Lee variable de entorno <br> aduasis_digitalizador
        Digitalizador ->> Digitalizador: Lee config.yaml


        Digitalizador ->> BD : Testea cadena de conexión
 

        loop Por cada digitalizador encendido
            Digitalizador ->> DigitalizadorConcreto: Crea un hilo de ejecución
        end
```
