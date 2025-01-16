# 🔎 Endpoints Uberfreight

---

## 🔗 Tabla de endpoints en general

| Endpoint | Aplicación | Entorno | Dueño | Comentarios | Tipo API |
| --- | --- | --- | --- | --- | --- |
| [uatcustomswmsapi.transplace.com](http://uatcustomswmsapi.transplace.com/) | API YMS/WMS | Producción | Aduasis Logística | Es la api expuesta por nosotros a través de Uber para que funcione la aplicación móvil de YMS y WMS. | GraphQL |
| [api.transplace.com](https://uatapi.transplace.com/)  | API TMS (Uber) | Producción | Uber Freight | Es la api que expone uber en su aplicación de TMS, este endpoint lo consultamos nosotros desde motores de la API de TMS. | REST |
| [uatapi.transplace.com](https://uatapi.transplace.com/) | API TMS (Uber) | UAT | Uber Freight | Es la api que expone uber en su aplicación de TMS, este endpoint lo consultamos nosotros desde motores de la API de TMS en un entorno de pruebas. | REST |
| [customsapi.transplace.com](http://customsapi.transplace.com/) | API TMS (Aduasis) | PROD | Aduasis Logística | Es la api que exponemos a las aplicaciones de uber para que puedan enviar shipments, crear vehiculos y más. | REST |
| [uatcustomsapi.transplace.com](http://uatcustomsapi.transplace.com/) | API TMS (Aduasis) | UAT | Aduasis Logística | Es la api que exponemos a las aplicaciones de uber para que puedan enviar shipments, crear vehiculos y más en UAT. | REST |
| [uatcustomsportal.transplace.com/](https://uatcustomsportal.transplace.com/) | Portal Aduanero | UAT | Aduasis Logistica | Es el endpoint para los microservicios, portal aduanero y portal SPA. | REST |
| [customsportal.transplace.com/](https://uatcustomsportal.transplace.com/) | Portal Aduanero | PROD | Aduasis Logistica | Es el endpoint para los microservicios, portal aduanero y portal SPA. | REST |

Las APIs de Uber Freight se encuentran documentadas por medio del estandar openapi y se pueden consultar en el siguiente enlace:  [https://developer.uberfreight.com/docs/customshub](https://developer.uberfreight.com/docs/customshub-apis/1/routes/reports/v2/ReporteIVAporNumeroParte/post).

## 🔗 Aduasis TMS API

Dentro de la aplicación del TMS por parte de Aduasis tenemos endpoints expuestos para que aplicaciones de Uber Freight puedan mandar información, por otra parte, Aduasis también envía información a las API de transplace.

Recordemos que existen dos entornos: UAT y PROD, en donde tanto las apis de TMS como las de Aduasis tienen sus propios dominios, a continuación se detallan:

| Dueño | Entorno | Dominio |
| --- | --- | --- |
| Aduasis | UAT | customsapi.transplace.com |
| Aduasis | PROD | uatcustomsapi.transplace.com |
| Uber Freight | UAT | [uatapi.transplace.com](https://uatapi.transplace.com/) |
| Uber Freight | PROD | [api.transplace.com](https://uatapi.transplace.com/) |

Ahora veamos los paths que aduasis consulta a TMS ([uatapi.transplace.com](https://uatapi.transplace.com/) o [api.transplace.com](https://uatapi.transplace.com/) dependiendo del entorno):

| Endpoint | Ruta | Tipo | Motivo |
| --- | --- | --- | --- |
| [uatapi.transplace.com](https://uatapi.transplace.com/)/[api.transplace.com](https://uatapi.transplace.com/) | /tp-api/customer/v2/shipment | POST | Motor EI y Motor Shipment TMS |
| [uatapi.transplace.com](https://uatapi.transplace.com/)/[api.transplace.com](https://uatapi.transplace.com/) | /tp-api/customer/v2/post-goods-issued | POST | Motor notificado arribo de mercancía y Motor salida de caja |

Los paths expuestos por la API TMS de aduasis para que Uber los puesta utilizar (customsapi.transplace.com/uatcustomsapi.transplace.com dependiendo del entorno):

| Endpoint | Ruta | Tipo | Motivo |
| --- | --- | --- | --- |
| customsapi.transplace.com/uatcustomsapi.transplace.com | /api/recibo/loadShipmentPlan | POST | Crear recibos |
| customsapi.transplace.com/uatcustomsapi.transplace.com | /api/shipment/me-number | POST | Cargar me number a embarque |
| customsapi.transplace.com/uatcustomsapi.transplace.com | /api/vehicle-in-transit | POST | Crear vehículo |

### 📄 Diagrama entorno productivo

![Infra TMS Uber PROD](/img/prod_uber_infra_tms.png)

### 📄 Diagrama entorno UAT

![Infra TMS Uber UAT](/img/prod_uber_infra_tms_uat.png)

## 🔗 API para aplicaciones móviles

Las aplicaciones móviles constan dos entornos, sin embargo actualmente el que se encuentra públicamente accesible es el entorno de UAT por lo que se utiliza como entorno de producción.

Consta del siguiente enlace [uatcustomswmsapi.transplace.com](http://uatcustomswmsapi.transplace.com/) en donde la subruta para acceder a su api define la version que se quiere acceder, por ejemplo, [uatcustomswmsapi.transplace.com/v1-2-7/](http://uatcustomswmsapi.transplace.com/v1-2-7/) que es la más reciente.

Entonces para acceder al endpoint de la aplicación graphql (endpoint que utilizan las aplicaciones móviles tanto WMS como YMW) sería la siguiente:

[uatcustomswmsapi.transplace.com/v1-2-7/graphql/](https://uatcustomswmsapi.transplace.com/v1-2-7/graphql/)

### 📄 Diagrama entorno UAT (Actual producción)

![WMS](/img/wms_uber_uat.png)

## 🔗 Portal Aduanero y microservicios

Los endpoits para el portal aduanero y sus microservicios es [customsportal.transplace.com](http://customsportal.transplace.com/) o

[uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/) dependiendo del entorno al que se quiere acceder, ya sea UAT o producción. A continuación se detallan las rutas de forma específica:

---

| Endpoint | Path | Aplicación |
| --- | --- | --- |
| [customsportal.transplace.com](http://customsportal.transplace.com/) [uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/)   | / | Reverse proxy para redirigir a las rutas siguientes |
| [customsportal.transplace.com](http://customsportal.transplace.com/) [uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/)   | /Portal | Payara (Portal Java) |
| [customsportal.transplace.com](http://customsportal.transplace.com/) [uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/)   | /SPA | IIS Angular APP (Portal SPA) |
| [customsportal.transplace.com](http://customsportal.transplace.com/) [uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/)   | /api | API Gateway para redirigir a los microservicios dependiendo del subpath consecuente de /api |
| [customsportal.transplace.com](http://customsportal.transplace.com/) [uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/)   | /api/clasificacion | Microservicio clasificacion |
| [customsportal.transplace.com](http://customsportal.transplace.com/) [uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/)   | /api/seguridad | Microservicio seguridad |
| [customsportal.transplace.com](http://customsportal.transplace.com/) [uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/)   | /api/digitalizacion | Microservicio digitalizacion |
| [customsportal.transplace.com](http://customsportal.transplace.com/) [uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/)   | /api/factura-light | Microservicio factura light |
| [customsportal.transplace.com](http://customsportal.transplace.com/) [uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/)   | /api/catalogos | Microservicio catalogos |
| [customsportal.transplace.com](http://customsportal.transplace.com/) [uatcustomsportal.transplace.com](http://uatcustomsportal.transplace.com/)   | /api/jasper | Microservicio jasper |

## 📊 Diagrama de infraestructura de Uber Freight para portal aduanero y microservicios

![Diagrama microservicios uber](/img/diagrama_infra_uber_microservicios.png)
