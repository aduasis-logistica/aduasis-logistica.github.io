---
sidebar_position: 2
---

# Agregar nueva página

Para agregar una página al portal aduanero es necesario realizar inserciones de registros a tablas de la base de datos de portal y también hacer modificaciones en archivos de configuración tipo XML del proyecto.

:::tip Recomendación
Trata de seguir siempre los estándares de plantillas, colores y organización de directorios al crear tu página xhtml/html.
:::

**Requerimientos previos**

Para agregar una nueva página en el proyecto de portal aduanero será necesario:
- Tener lista tu página con terminación xhtml/html.
- Solicitar un número de página al grupo de logística indicando para que cliente se requiere.

:::caution Asegurar inexistencia de nuevo número de página

Si un número de página que se te asignó choca con uno ya existente durante este tutorial pide otro para evitar problemas 
en el entorno de producción.
:::

## Instrucciones SQL

Se necesitan hacer queries para insertar registros en las siguientes tablas:

- **webPagina:** para guardar información mínima necesaria para crear una página.
- **webAcceso y  dbo.webReporteAcceso:** para asociar un nombre de rol a la nueva página y así solo ciertos usuarios puedan accesar a ella.


### Plantilla

Para simplificar este trabajo se ha realizado la siguiente plantilla, en donde solo habrá que especificar el nombre de la página en español e inglés, número de página que se te asignó e indicar si se trata de una aplicación tipo móvil.

```sql title="Plantilla para creado de páginas y roles de usuario"
DECLARE @titulo  VARCHAR(50) = '';
DECLARE @tituloEnIngles VARCHAR(50) = '';
DECLARE @numeroDePagina INTEGER = 0;
DECLARE @paginaParaMobile BIT = 0; -- Identificador para saber si esta pagina pertenece al modulo WAR mobile

INSERT INTO webPagina
(
	idAplicacion,
	pagina,
	descripcionEs,
	descripcionEn,
	activa,
	usuario_ingreso,
	fecha_ingreso,
	mobile
)
VALUES(
	1, --idAplicacion
	@numeroDePagina, --pagina
	@titulo, --descripcionEs
	@tituloEnIngles, --descirpcionEn
	1, --activa
	'sis', --usuarioIngreso
	GETDATE(), -- fecha ingreso
	@paginaParaMobile --Es una página para el proyecto de mobile?
);

INSERT INTO webAcceso 
(
	idAplicacion,
	idAcceso,
	rolAcceso,
	descripcion,
	usuario_ingreso,
	fecha_ingreso
)
VALUES(
	1, --idAplicacion
	@numeroDePagina,-- idAcceso
	'ROLE_'+UPPER(REPLACE(@titulo, ' ' , '_')), --rolAcceso
	@titulo, --descirpcion
	'sis', --usuarioIngreso
	GETDATE() --fechaIngreso
)

INSERT INTO webReporteAcceso
(
	idAplicacion,
	reporte,
	idAcceso,
	usuario_ingreso,
	fecha_ingreso
)
VALUES
(
	1, --idAplicaicon
	@numeroDePagina, --reporte
	@numeroDePagina, --idAcceso
	'sis', --usuarioIngreoso
	GETDATE() --fechaIngreso
)
```

## Archivos XML de módulo WAR

Se va a requerir modificar los siguientes archivos contenidos en la carpeta WEB-INF:
<img src='/img/portal/web-inf.png'/>

### Faces-config.xml

Dentro del archivo faces config se agregara la siguiente etiqueta XML dentro del nodo o etiqueta 'navigation-rule'.

```xml
<navigation-case>
    <from-outcome>0</from-outcome> 
    <to-view-id>/Carpeta/Carpeta2/archivo.xhtml</to-view-id>
</navigation-case>
```
Siendo from-outcome el número de página que le pertenece a la nueva página y to-view-id la ruta del archivo que hace referencia a esa página.

### SecurityContext.xml

```xml
 <security:intercept-url pattern="/RutaDeLaCarpetaQueContieneTuPagina/**" access="hasRole('NOMBRE_DE_TU_ROL')"/>
```
Siento pattern la ruta a la carpeta en donde quiere aplicar el permiso por rol, seguido del nombre de tu archivo, o bien en su defecto agregar "**" para decir que el permiso va a plicar para todos los archivos contenidos en esa carpeta.
Para saber el nombre del rol ejecuta el siguiente query en la base de datos.
```sql
--Cambia el cero por el numero de pagina que se te asigno
SELECT rolAcceso FROM webAcceso WHERE idAcceso = 0 
```