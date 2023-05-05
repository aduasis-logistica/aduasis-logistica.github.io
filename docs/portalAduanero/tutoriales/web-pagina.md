---
sidebar_position: 2
---


# Nueva página

Para agregar una nueva página al portal aduanero es necesario realizar inserciones a la base de datos y también hacer modificaciones por código.

:::tip Recomendación
Trata de seguir siempre los estándares de plantillas, colores y organización de directorios al crear tu página xhtml.
:::

## Requerimientos previos

Es necesario como mínimo tener a la mano lo siguiente:

- Página nueva con terminación xhtml.

- Número de página (solicitala al grupo de logística indicando para que cliente se requiere).

:::caution Asegurar inexistencia de número de página

Si el número de página que se te asignó choca con uno ya existente durante este tutorial pide otro para evitar problemas en el entorno de producción.
:::

## 1. Insertar en la base de datos

Se necesitan hacer queries para insertar registros en las siguientes tablas:

- **webPagina:** para guardar información mínima necesaria para crear una página.
- **webAcceso y  webReporteAcceso:** para asociar un nombre de rol a la nueva página y así solo ciertos usuarios puedan accesar a ella.

Para simplificar este trabajo se ha realizado una plantilla en donde solo habrá que especificar el nombre de la página en español e inglés, número de página que se te asignó e indicar si se trata de una página para la aplicación tipo móvil.

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

:::caution ASEGURATE DE VERSIONAR

No olvides guardar el query utilizado para insertar los registros de tu nueva página, pues lo tendrás que subir al versionador cuando concluyas tu desarrollo.
:::

## 2. Editar faces-config.xml

Dentro del archivo faces config se agregara la siguiente etiqueta XML dentro del nodo o etiqueta 'navigation-rule'.
<img src='/img/portal/web-inf.png'/>

Siendo from-outcome el número de página que le pertenece a la nueva página y to-view-id la ruta del archivo que hace referencia a esa página.

```xml
<navigation-rule>
...
 <navigation-case>
  <from-outcome>0</from-outcome> 
  <to-view-id>/Carpeta/Carpeta2/archivo.xhtml</to-view-id>
 </navigation-case>
</navigation-rule>

```

## 3. Editar contexto de seguridad

Dependiendo de la configuración del portal en donde se este trabajando se tendrá que editar el archivo AduasisSecurityConfig.java o securityContext.xml según sea el caso.

Para saber que archivo editar dirigirse al archivo web.xml que se encuentra en la siguiente ubicación:
<img src='/img/portal/webxml.png'/>

Una vez dentro del archivo buscar la etiqueta "context-param" que tenga como etiqueta hija "param-value" el valor de "contextConfigLocation" y en caso de que la etiqueta "param-value" tenga como valor la ubicación de un XML editar el xml que hace referencia, de lo contrario editar el archivo Java que hacer referencia.

```xml
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>
        <!--En caso de una clase-->
        mx.com.sis.org.abb.auth.AduasisSecurityConfig
        <!--En caso de un xml-->
        /WEB-INF/securityContext.xml
    </param-value>
</context-param>
```

### 3.1 AduasisSecurityConfig.java

La ubicación del archivo es la siguiente:

<img src='/img/portal/aduasis-security.png'/>

Edita la clase AduasisSecurityConfig agregando la línea de código que se encuentra después del comentario del siguiente ejemplo:

```js
public class AduasisSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                //Para agregar una nueva pagina colocar esta linea de codigo
                .antMatchers("/RutaDeLaNuevaPagina").hasRole("NOMBRE");
    }
}
```

:::warning Nombre de ROL
Al colocar el nombre del rol que va a tener acceso a la pagina no se debe colocar el prefijo ROL_, es decir si en la base de datos el identificador del rol (Tabla webAcceso, campo rolAcceso) es 'ROLE_AG_PATENTE' solo se debe escribir 'AG_PATENTE' al pasarlo como parametro en el método, tal que así: .hasRole("AG_PATENTE").
:::

### 3.2 securityContext.xml

Si el portal en donde vas a agregar la página no tiene la clase AduasisSecurityConfig.java se tendrá que editar el archivo securityContext.xml agregando la siguiente linea:

```xml
 <security:intercept-url pattern="/RutaDeLaCarpetaQueContieneTuPagina/**" access="hasRole('ROL_NOMBRE')"/>
```

Siendo pattern la ruta a la carpeta en donde quiere aplicar el permiso por rol, seguido del nombre de tu archivo, o bien en su defecto agregar "**" para decir que el permiso va a plicar para todos los archivos contenidos en esa carpeta.
Para saber el nombre del rol ejecuta el siguiente query en la base de datos.

```sql
--Cambia el cero por el numero de pagina que se te asigno
SELECT rolAcceso FROM webAcceso WHERE idAcceso = 0 
```
