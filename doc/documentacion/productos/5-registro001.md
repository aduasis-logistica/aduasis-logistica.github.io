# 🤖 Registro 001

:::info Enlace a repositorio
[Ir al repositorio en Github (Es necesario tener permisos)](https://github.com/aduasis-logistica/app-registro-001-scrapping)
:::

<details>
  <summary>**🧪 Stack tecnológico**</summary>
  
  Lenguajes de programación:
  - Python 3.8.2

  IDEs/Editores recomendados:
  - Visualstudio code

</details>

## ℹ️ ¿Qué es?

El objetivo principal del programa es la extracción de información por medio de la herramienta de scraping apuntando directamente al sistema de operación integral aduanera ubicada en el siguiente enlace: 

https://aplicacionesc.mat.sat.gob.mx/SOIANET/oia_consultarap_cep.aspx

El SOIA es el sistema en donde se consulta el estado que guardan las operaciones de comercio exterior realizadas dentro del proceso de despacho aduanero.



**Página de SOIA:**

![https://i.imgur.com/0aVbH3M.png](https://i.imgur.com/0aVbH3M.png)

**En donde contiene un formulario con lo siguientes campos:**

***1. Aduana***

Es la combinación de 2 valores, número de aduana y su sección.

En el caso de Nuevo Laredo 24 y su sección es 0. Dando como resultado 240.

***2. Año del pedimento***

A qué año se hizo el pedimento, para este ejemplo será 2021.

***3. Patente***

Persona física autorizada para verificar las operaciones, es un valor de 4 dígitos, para este ejemplo será 3694.

***4. Documento***

Identificador del pedimento, en este caso 1001403.



**Ejemplo de uso:**

![https://i.imgur.com/OpaH6pb.png](https://i.imgur.com/OpaH6pb.png)

**Dando como resultado todos los estados que se tienen:**

![https://i.imgur.com/LIRie6m.png](https://i.imgur.com/LIRie6m.png)





## Instalación del registro 001 de pedimentos

Para que la aplicación funcione correctamente hay que considerar los siguientes pasos:

1. Configurar variable de entorno
2. Archivo de configuración
3. Stored procedures
3. Ejecutable .exe



### Configurar variable de entorno

Cree una variable de entorno bajo el nombre aduasis_registro001_pedimentos y de valor coloque la ruta de la carpeta en donde se va a encontrar el archivo de configuración (config.yaml) y la carpeta para el guardado de logs, ejemplo: C:\SISNL\Registro001\ (Recuerde siempre terminar con un slash invertido '\\').

### Archivo de configuración

**Contenido del archivo de configuración**

Al abrir el archivo se encontrará la siguiente estructura:

```yaml

#Parametros de conexion al gestor de base de datos de SQL SERVER
connection:
  driver: "SQL Server Native Client 11.0"
  server: "localhost"
  user: "sa"
  password: "sa"
  database: "aduasism3"

motor:
  #Tiempo maximo de espera para responder una accion
  segundosDeTimeout: 25 
  #Para evitar bloqueos por parte de VUCEM
  minutosDeReposo: 1 
  #Cantidad de veces que una peticion debe repetirse en caso de fallar
  reintentos: 4
  #Cantidad de referencias a digitalizar por oleada
  cantidadDeReferencias: 30

licencia:
  jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRlSWQiOiIwMDI4IiwiYWR1YW5hcyI6WyIxNjAiLCIiXX0.EdopaV1UF1VoiWXHX_wIyMJ7jB0WFXNdspXKqSGW57I"
  clienteId: "0028"
```

 

## Instalación del servicio de Windows

La aplicación se es ejecutada en manera de servicio de Windows, por lo que será necesario instalarla desde la terminal, dicha terminal debe abrirse con permisos de administrador para evitar cualquier tipo de problema con los permisos.



Una vez abierta la terminal, será necesario acceder a la ruta en donde se encuentra el ejecutable "main.exe".

Ejemplo:

```
> cd C:/Reg001_pedimentos/
```

Una vez dentro de la carpeta en consola, se ejecutará el siguiente comando si es la primera vez que se agrega el servicio:

```shell
main.exe install
```

Si se tratase de una actualización, lo primero que se tendría que hacer es parar el servicio con el comando stop y posteriormente aplicar el comando update:

```
main.exe stop
```

```
main.exe update
```

Una vez instalada se podrá iniciar el servicio con el siguiente comando:

```
main.exe start
```

Al concluir el procedimiento anterior podrá visualizar en el apartado de servicios del administrador de tareas, el servicio reg001 pedimentos:

![img](https://i.imgur.com/mIN3vN8.png)

## Diagrama de clases

![img](https://i.imgur.com/0C2shru.png)



## Diagrama de secuencia

![https://i.imgur.com/igvUMHJ.png](https://i.imgur.com/igvUMHJ.png)





## Comandos para trabajar el proyecto en python



Instala el servicio

```shell
python main.py install
```



Actualiza el servicio

```shell
python main.py update
```



Debuguea el servicio en consola

```shell
python main.py debug
```



Genera el compilado para instalar en cualquier computadora

```shell
pyinstaller -F --hidden-import=win32timezone  --icon=app.ico main.py
```





## Posibles excepciones / errores



**Del sistema**

- Error al comprobar la licencia
- Se ha producido un error al intentar inicializar el programa, error en la conexión
- Error en el núcleo del programa, reintentando el proceso
- Error al leer el archivo config.json
- Error al ejecutar el SP up_registro001_pedimentosOp
- Error al ejecutar el query ***x***

**Externos al sistema** 

- Tiempo de espera terinado
- Error en la petición
- Reintentando conectar a la página 
- Sin respuesta del servidor
- No se encontró información relacionada con los parámetros proporcionados, verifique los datos y/o el año del pedimento
- Error al acceder al grdPeidmentos
- El comando buscar no da resultados 


### 📃 Manejo del entorno virtual en python

Como buena práctica y para separar el proyecto de otros proyectos hechos en python dentro de la máquina que estás utilizando
se recomienda el uso de entornos virtuales.

Para crear un entorno virtual primero abre una consola de windows y dirigete a la ubicación de la ruta raíz del proyecto:
```commandline
cd  C:\proyectos\app-digitalizador\
```
Posteriormente instala la utilidad para crear entornos virtuales en python
```commandline
pip install virtualenv
```

Posteriormente ejecuta el siguiente comando para crear un entorno virtual
```commandline
virtualenv .env
```
Ahora es necesario que actives el entorno virtual, basta con ejecutar el siguiente comando en la consola (dentro del path de la ruta raíz del proyecto)
```commandline
.env\Scripts\activate
```

Por último ejecuta el sigueinte comando para bajar todas las librerias utilizadas en el proyecto dentro de tu entorno virtual:
```commandline
pip install -r requirements.txt
```


```shell
pyinstaller build -F --hidden-import=win32timezone --icon=icon.ico setup.py
```

## 🔨 Compilación

Para crear el archivo binario de la aplicación basta con ejecutar el sigueinte comando en consola:
```commandline
.env\\Scripts\\pyinstaller build -F --hidden-import=win32timezone --icon=icon.ico setup.py
```