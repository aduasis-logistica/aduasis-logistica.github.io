---
sidebar_position: 2
---

# Arquitectura de software

Para el desarrollo de la aplicación móvil se emplearon un conjunto de
herramientas, conceptos y buenas prácticas; esto con el objetivo de
obtener una aplicación de alta calidad y que sea escalable a largo plazo.
Arquitectura limpia
La arquitectura de software utilizada para desarrollar la aplicación fue la
arquitectura limpia propuesta por Robert C. Martin, la cual consiste en una
combinación de arquitecturas tales como la arquitectura hexagonal,
arquitectura de cebolla y la arquitectura de puertos con adaptadores.
La arquitectura limpia propone dividir el proyecto en capas, de tal forma
que se define una regla de dependencia en donde las capas externas
dependen de las capas internas, sin embargo, las capas internas no
conocen de las capas externas.
Ilustración 1 Regla de dependencia en una arquitectura limpia
La cantidad de capas en esta arquitectura puede variar de acuerdo a las
necesidades de la aplicación, en este caso fue suficiente definir tres. 

![Arquitectura](https://i.imgur.com/oEwF9WM.png)

## Capa de dominio

Es en donde se situarán todas las entidades correspondientes al sistema.

## Capa de aplicación

Capa en donde se encuentran las definiciones de la lógica del negocio,
pero no sus implementaciones.

## Capa de infraestructura

Aquí es en donde se llevan a cabo todas las implementaciones definidas
en la capa de aplicación haciendo uso de marcos de trabajo o tecnologías
que no tienen que ver directamente con la lógica del negocio y que
comúnmente se les suele denominar como los detalles.
Este tipo de arquitectura tiene como fin que el proyecto tenga una
escalabilidad adecuada, sea mucho más sencillo el aplicar un entorno de
pruebas automatizado y facilitar el trabajo en equipo.
