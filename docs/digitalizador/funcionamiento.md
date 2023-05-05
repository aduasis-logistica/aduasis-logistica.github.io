# Funcionamiento

A grandes rasgos el digitalizador es un proceso ejecutado el cual es apoyado de un archivo de configuración tipo YAML en donde se específican parametros como la cadena de conexión a la base de datos, parámetros para la consulta a los web services, opción para apagar y encender digitalizadores.

El diagrama de secuencia sería el siguiente:


### Diagrama de secuencia

```kroki type=mermaid
    sequenceDiagram
        
        participant Digitalizador
        participant DigitalizadorConcreto
        participant SQL Server
        participant Web Service
        participant Servidor de archivos

        loop Mientras el servicio de windows se encuentre activo
            Digitalizador->>Digitalizador: Carga archivo de configuracion <br> [config.yaml]

            loop Por cada digitalizador concreto activo
                Digitalizador->>DigitalizadorConcreto: Crear instancia
                DigitalizadorConcreto->>SQL Server: Inserta nuevas referencias <br> en bitacora con up_digitalizadorBitacoraBarrido 
                DigitalizadorConcreto->>SQL Server: Consulta de referencias en digitalizador_bitacora
                SQL Server->>DigitalizadorConcreto: Devuelve referencias

                loop Por cada referencia encontrada
                    DigitalizadorConcreto->>DigitalizadorConcreto: Crear una petición con <br> la información de la referencia
                    DigitalizadorConcreto->>Web Service: Crear una consulta específica <br> que entienda un web service o el <br> generador de reportes jasper
                    Web Service->>DigitalizadorConcreto: Retorna una respuesta
                    DigitalizadorConcreto->>SQL Server: Consulta datos de digitalizado <br> (secuencial, nombre, ruta, etc.)
                    DigitalizadorConcreto->>Servidor de archivos: Guarda el documento
                    DigitalizadorConcreto->>SQL Server: Guardar referencia en dig_archivo <br> con [up_digitalizadorGuardado] 
                end

            end
        end
```

