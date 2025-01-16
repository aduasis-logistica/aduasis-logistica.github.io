# ⚙️ API YMS GraphQL 

:::info Enlace a repositorio
[Ir al repositorio en Github (Es necesario tener permisos)](https://github.com/aduasis-logistica/api-yms)
:::

<details>
  <summary>**🧪 Stack tecnológico**</summary>
  
  Lenguajes de programación:
  - C# Net Core 5.0

  IDEs/Editores recomendados:
  - Visual Studio

  ¿Qué necesito saber?

  - Hotchocolate es la utileria para desarrollar el API con GrpaphQL
  - El método de autenticación es por medio de JWT

</details>

:::danger Pendientes
- Cambiar el acceso a el JWT key a variables de entorno y eliminar todo rastro de este en Github a pesar de que sean repositorios privados.
- Cambiar el acceso a el connection string de las bd escritas en el archivo de configuracion a variables de entorno y eliminar todo rastro de este en Github a pesar de ser repositorios privados. 
:::


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" alt="Logo" width="80" height="80"/>

## ℹ️ ¿Qué es?

Es la API utilizada por la aplicación móvil del YMS y del WMS para interactuar con la base de datos y lógica del negocio.

## 💿 Instalación

Requisitos:
- Visual Studio
- [NetCore 5.0](https://dotnet.microsoft.com/en-us/download/dotnet/5.0)
- SQL Server ManagmentStudio

Para la ejecución del API posterior a bajar el repositorio y configurar la base de datos de aduasis, es necesario realizar modificaciones **locales** a las rutas de configuración especificadas en la solución *(no usarás las rutas y credenciales de producción, si no las locales)*.

### Configurar ruta de conexión a la BD

Ubica en el explorador de soluciones el archivo ***'src/API/appsettings.json'***. En la cadena de conexión llamada ***SqlServerConnectionString***, coloca las credenciales de tu base de datos local.

### Configurar puertos de ejecución del API

Es necesario reemplazar los puertos de conexión del servidor IIS y del API. Ubica en el explorador de soluciones el archivo ***'src/API/properties/launchSettings.json'***. Dentro del json encontraras la cadena llamada ***applicationUrl*** tanto para el IIS como para el API; éstas contarán con una dirección IP estática, reemplazala por *localhost* y utiliza los puertos de prueba recomendados:
- Puerto 8080 para el IIS
- Puerto 5001 y 5000 para el API

### Configura la ruta del API en el YMS

Ahora es necesario que cambies la ruta de conexión en el proyecto YMS.

### ¿Cómo sé que el API está funcionando?

Cuando hayas realizado las configuraciones necesarias, entonces compila el proyecto seleccionando entre las opciones del menú desplegable, la opción llamada *API*. Si seguiste nuestras recomendaciones, encontrarás un manejador de peticiones a GraphQL en la ruta *https://localhost:5001/graphql/*.

## 🚀 Compilar y despegar

Vease el siguiente tutorial para entender el proceso de compilado y despliegue en IIS:

<iframe width="560" height="315" src="https://www.youtube.com/embed/lEv7aEdUnQ0?si=z6FA3JcU7qTM2k8H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>