---
sidebar_position: 2
---

# Requerimientos

Los requerimientos son una parte crucial del proceso de desarrollo de software, ya que definen las especificaciones y características que el software debe tener para cumplir con los objetivos y necesidades del negocio. En términos generales, los requerimientos se dividen en dos categorías: requerimientos funcionales y no funcionales.

Es importante tener en cuenta que los requerimientos funcionales y no funcionales deben ser claros, precisos y coherentes para garantizar que el software cumpla con las expectativas del negocio y de los usuarios finales. Debe haber una comunicación constante y efectiva entre los desarrolladores de software y los usuarios finales para asegurar que los requerimientos sean entendidos y cumplidos en su totalidad.

En resumen, los requerimientos son una parte crucial del proceso de desarrollo de software y son esenciales para garantizar que el software cumpla con los objetivos y necesidades del negocio. Los requerimientos funcionales y no funcionales deben ser claros, precisos y coherentes para garantizar la calidad y el rendimiento del software.

<img src="https://source.unsplash.com/7okkFhxrxNw/1920x800/" alt=""  />

A continuación, se presentan los requerimientos funcionales y no funcionales que debe cumplir el software de digitalización de documentos de VUCEM.

## Requerimientos funcionales

Los requerimientos funcionales describen las funciones y características específicas que el software debe tener para cumplir con su propósito. Estos requerimientos describen las tareas que el software debe ser capaz de realizar y cómo debe comportarse en diferentes situaciones.

1. **Digitalización de documentos:** el software debe ser capaz de digitalizar documentos provenientes de VUCEM y almacenarlos en una base de datos centralizada y en disco.
2. **Bitácora de errores:** el software debe contar con una bitácora de errores para registrar y solucionar cualquier error o falla en el proceso de digitalización de documentos.
3. **Consulta de documentos:** el software debe permitir la consulta de los documentos digitalizados de forma rápida y eficiente, a través de una tabla que contenga la información de los documentos almacenados en la base de datos.
4. **Archivos de log:** el software debe guardar logs de actividad por fecha y por tipo de documento, para monitorear y auditar el proceso de digitalización y detectar posibles errores o fallos en el proceso.
5. **Nomenclatura por cliente:** el software debe permitir la configuración de la nomenclatura de los documentos según las necesidades de cada cliente.
6. **Almacenamiento por cliente:** el software debe guardar los documentos digitalizados en una ruta por cliente, para facilitar la gestión y organización de los documentos según la empresa a la que pertenecen.
7. **Archivos de configuración:** el software debe contar con un archivo de configuración en formato YAML que permita la configuración de los parámetros necesarios para arrancar la aplicación.
8. **Ejecución como servicio de Windows o consola:** el software debe poder ejecutarse tanto como servicio de Windows como en la consola del sistema, para permitir su uso en diferentes escenarios.
9. **Digitalización de documentos propios:** el software debe ser capaz de digitalizar documentos propios mediante el uso de Jasper Reports, una herramienta para la creación de informes y documentos en distintos formatos.

## Requerimientos no funcionales

Además de los requerimientos funcionales, existen requerimientos no funcionales que deben ser considerados en el desarrollo del software de digitalización de documentos de VUCEM.

1. **Seguridad:** el software debe garantizar la seguridad y privacidad de los datos almacenados en la base de datos y en los documentos digitalizados. Se deben implementar medidas de seguridad como el cifrado de datos, la autenticación de usuarios y el control de acceso para evitar el acceso no autorizado a la información.
2. **Rendimiento:** el software debe tener un rendimiento óptimo y eficiente en la digitalización y consulta de documentos, incluso con grandes volúmenes de documentos. Se deben realizar pruebas de carga y rendimiento para asegurar que el software puede manejar un alto volumen de documentos sin disminuir su rendimiento o calidad de servicio.
3. **Escalabilidad:** el software debe ser escalable y capaz de manejar un creciente volumen de documentos y usuarios sin disminuir su rendimiento o calidad de servicio. Se debe diseñar una arquitectura que permita la adición de nuevos servidores y recursos para manejar un creciente volumen de información.

