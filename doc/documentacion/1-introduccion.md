---
sidebar_position: 1
---
# 📖 Introducción

Esta documentación esta hecha para conocer a fondo las tecnologías, configuraciones
y despliegues de las distintas aplicaciones existentes en Aduasis Logística.

## 🧑‍💻 Aplicaciones

Aduasis Logística cuenta con las siguientes aplicaciones

**Ejecutables / Servicios de windows:**

- [Digitalizador (Python)](https://github.com/aduasis-logistica/app-digitalizador)
- [Compactador de imágenes (Python)](https://github.com/aduasis-logistica/app-compactador-imagen)
- [Aviso de cruce scrapping (Python)](https://github.com/aduasis-logistica/app-aviso-de-cruce-scrapping)
- [Doda fecha cruce scrapping (Python)](https://github.com/aduasis-logistica/app-doda-fecha-cruce-scrapping)
- [Registro 001 scrapping (Python)](https://github.com/aduasis-logistica/app-registro-001-scrapping)

**Aplicaciones web:**

- [Portal SPA (Angular)](https://github.com/aduasis-logistica/app-portal)

**Aplicaciones móviles:**

- [YMS - Yard Management System (Flutter)](https://github.com/aduasis-logistica/mobile-yms)
- [WMS - Warehouse Management System (Flutter)](https://github.com/aduasis-logistica/mobile-wms)

**Microservicios:**

- [API TMS (.NET Core C# / API REST)](https://github.com/aduasis-logistica/api-tms)
- [API YMS (.NET Core C# / API GraphQL)](https://github.com/aduasis-logistica/api-yms)
- [API Seguridad (.NET Core C# / API RESTFULL)](https://github.com/aduasis-logistica/api-seguridad)
- [API Catalogos (.NET Core C# / API RESTFULL)](https://github.com/aduasis-logistica/api-catalogos)
- [API Factura Light (.NET Core C# / API RESTFULL)](https://github.com/aduasis-logistica/api-factura-light)
- [API Clasificacion (.NET Core C# / API RESTFULL)](https://github.com/aduasis-logistica/api-clasificacion)
- [API Motores](https://github.com/aduasis-logistica/api-motores)
- [API Reportes Jasper (Java / Springboot)](https://github.com/aduasis-logistica/api-reportes-jasper)
- [API Gateway (Kong)](https://github.com/aduasis-logistica/api-gateway)

## 📐 Arquítecturas

### 📱 Entorno de aplicación móvil

Este entorno consta de un conjunto de aplicaciones móviles que trabajan con un mismo API de tipo GraphQL.

<img src="/img/infraestructura-mobile.png" alt=""  />

### 💻 Entorno de aplicación web

Consta de una arquítectura basada en microservicios en donde cada microservicio es una aplicación independiente a la otra, por lo tanto puede instalarse en el servidor que se dese o aplicarle las replicas que lo requieran.

<img src="/img/infraestructura-portal.png" alt=""  />

Video explícativo del patrón de arquítectura de microservicios


<iframe width="100%" height="500px" src="https://www.youtube.com/embed/2sFczigWppk?si=SEeFmzEXZv65dKDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
