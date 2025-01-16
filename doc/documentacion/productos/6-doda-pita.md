# 💻 Doda Pita

Teniendo en mente que se requiere obtener la fecha MSA de datos generales al buscar un numero de integracion en:

https://www.ventanillaunica.gob.mx/vucem/doda.html

Se plantea un motor de windows para que corra las 24hrs con la finalidad de ejecutar periodicamente la busqueda de la fecha MSA proporcionada en la página de ventanilla única por medio de web scraping.

## Configuración

Siendo config.json un archivo de configuracion para el motor

```json
{
    "connection": {
        "type" : "sqlserver",
        "server": "localhost",
        "port": "1433",
        "database": "aduasism3",
        "username": "sa",
        "password": "sa"
    },
    "engine": {
        "time": 5, 
        "quantity": 7,
        "logs": true
    }
}
```

**Connection**

Nos permitira establecer los parametros de conexion a SQL SERVER

**Engine**

Parametros para el motor, siendo:

- Time

  Parámetro para establecer cada cuantos minutos se ejecutara el motor

- Quantity

  Cantidad de registros que se obtienen para la busqueda de fecha

- Logs

  Activar o desactivar la vista de los logs en consola





## Funcionamiento

**Por medio de un query obtener los numeros de integracion, dado:**

- Un rango de fechas 
- No se tenga registrado la fecha MSA
- La bandera de busqueda buscado_MSA se encuentre en nulo o 0



**Objetivos**

- Establecer fecha_real_cruce con la fecha obtenida
- Establecer fecha_MSA en fdoda_qr
- Insertar LOG de la acción realizada



### Diagrama de flujo

![img](https://i.imgur.com/RIJ9DvN.png)

 

## Posibles casos



### Caso ideal

![Caso1](https://i.imgur.com/JcbLWFi.png)



### Caso erroneo 1

![Caso2](https://i.imgur.com/yi3H1EF.png)

### Caso erroneo 2

![Caso3](https://i.imgur.com/wbbBW3c.png)

### Caso erroneo 3

![image-20200706101501259](https://i.imgur.com/YSkVTbl.png)





## Librerias utilizadas para el desarrollo e python 3.8.3

- Certifi 
- BeautifulSoup4
- Json 
- pyodbc





## 🔨 Compilación

Para crear el archivo binario de la aplicación basta con ejecutar el sigueinte comando en consola:
```commandline
.env\\Scripts\\pyinstaller build -F --hidden-import=win32timezone --icon=icon.ico setup.py
```