---
sidebar_position: 1
---

# Introducción

Para entrar en el contexto es necesario mencionar que el
patio de un almacén es el punto de partida para todo el proceso de
logística, pues es aquí en donde se encuentran los vehículos que dentro
de sus contenedores llevan toda aquella mercancía que se desea guardar
o retirar del almacén, por lo tanto, un a gestión del mismo que como
resultado permita agilizar el proceso de los movimientos realizados dentro
del patio del almacén y aprovechar los recursos disponibles es
indispensable.
Por otra parte, un sistema para la gestión de patios en un almacén conlleva
un constante y minucioso monitoreo de los vehículos durante su estancia
en el almacén, el cual inicia desde la entrada de un vehículo hasta la
respectiva salida del mismo.
Los principales usuarios del sistema son el personal del almacén
denominado como guardias, cuyas tareas principales son el registrar la
entrada de los vehículos, registrar la salida de vehículos y reportar el
estado del vehículo por medio de fotografías; dejando toda esta
información visible para sus supervisores.
Sabiendo esto, se tiene el contexto suficiente para seguir los siguientes
temas que involucran el proceso de migración de la aplicación. 

## Justificación

El sistema para el manejo de patios que se utiliza actualmente es una
página web en la cual se realizan todas las operaciones necesarias para
tener un manejo del patio del almacén, el cual tiene un funcionamiento
correcto, sin embargo, dada la necesidad de conexión a Internet, la falta
de infraestructura de red de las empresas de logística y la baja señal para
el consumo de datos móviles provocada por la ubicación donde los
usuarios se encuentran; resulta contraproducente el hecho de tener una
aplicación web para este tipo de sistema, llegando incluso a detener las
operaciones dentro del almacén.

**Dependencia de conexión a internet**

La manera más común dentro de una empresa de logística para lograr una
conectividad a internet dentro de este tipo de entorno es por medio del uso
de datos móviles, pero por la ubicación y el constante traslado de los
guardias se llega a perder esta señal.

**Consumo excesivo de datos**

Por ser una página web requiere que absolutamente todo se cargue a
través de internet, esto incluye la interfaz gráfica y archivos multimedia.
Adicionalmente, a la hora de subir las fotografías al servidor, estas se
envían con la calidad original que tiene la cámara, provocando así un
consumo excesivo de datos.

**Bajo rendimiento de la aplicación**

El depender que la interfaz gráfica y sus respectivos eventos dependen de
la velocidad de respuesta que da el servidor al dispositivo móvil da como
consecuencia un bajo rendimiento.

**Dependencia al servidor de producción**

Debido a que actualmente la aplicación para el manejo de patios se
encuentra unificada, es decir que tanto la aplicación encargada de interactuar con el usuario, como la aplicación encargada de realizar las operaciones relacionadas al servidor dependen una de la otra, pues no
hay manera de que el usuario final utilice el sistema cuando la aplicación
del servidor está caída o en mantenimiento (lo cual es un caso similar a la
falta de conectividad)