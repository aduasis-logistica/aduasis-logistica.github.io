---
sidebar_position: 4
---

# Configuración

Es necesario tener los siguientes dependencias para empezar a realizar cambios en el código fuente, realizar pruebas automatizadas
y realizar tareas de compilación.

## Software necesario

Es necesario descargar e instalar las siguientes aplicaciones:

- [Git.](https://git-scm.com/downloads)
- [Visual Studio Code.](https://code.visualstudio.com/)
- [Python   3.8.2.](https://www.python.org/downloads/release/python-382/)

## Código fuente

Para acceder al código fuente solicitar permiso para acceder al repositorio de github [DigitalizadorGitHubRepo](https://github.com/fegarza/digitalizador).

## Python

Una vez instalado Python se tendrá que corroborar si hay acceso al ejecutable de
python desde las variables de entorno, para ello ejecute el siguiente comando en la consola de windows:

```console
 > python --version
```

Si el resultado es el siguiente no habra que realizar ajustes:

```shell
 > python --version
 Python 3.8.2
```

De lo contrario seguir el siguiente tutorial: [How to Add Python to PATH](https://realpython.com/add-python-to-path/).

## Visual studio code

Como entorno de desarrollo se recomienda utilizar visual studio code debido a la cantidad
de extensiones y características que facilitan el trabajo a la hora de trabajar con Python.

### Extensiones obligatorias para VSCode

|Nombre|ID|Descripcion|
|------|--|-----------|
|Python| ms-python.python | Kit de desarrollo para python. |
|Task runner|sanaajani.taskrunnercode|Permite usar las tareas definidas en el archivo de configuracion de vscode del proyecto.|
|Python test explorer|littlefoxteam.vscode-python-test-adapter|Permite manejar las pruebas unitarias del proyecto.|

### Extensiones opcionales para VSCode

|Nombre|ID|Descripcion|
|------|--|-----------|
|Python docstring generator| njpwerner.autodocstring | Permite agregar comentarios para la documentacion del proyecto de forma sencilla.|
|Workspace | fooxly.workspace| Simplifica tu espacio de trabajo para acceder más rápido a los archivos deseados.|
| Markdown Preview | bierner.markdown-mermaid| Vista previa de archivos markdown.|

### Entorno virtual

Por medio del gestor de paquetes de python (pip), tendrá que instalar el manejador de entornos virtuales.
Ejecute el sigueinte comando en consola:

```console
 > pip install virtualenv
```
Dirijase a la carpeta en donde se encuentra el codigo fuente del proyecto desde consola:
```console
 > cd C:\Proyectos\digitalizador\
```
Ejecute el siguiente comando para crear un entorno virtual:
```console
 > virtualenv .env
```



## Base de datos

Es necesario una instancia SLQ Server y la base de datos de aduasism3.

