# ⚙️ APP de motores

:::info Enlace a repositorio
[Ir al repositorio en Github (Es necesario tener permisos)](https://github.com/aduasis-logistica/app-motores)
:::

<details>
  <summary>**🧪 Stack tecnológico**</summary>
  
  Lenguajes de programación:
  - C# Net Core 7
  IDEs/Editores recomendados:
  - Visual Studio
  ¿Qué necesito saber?
  - Esta aplicación se instala como servicio de windows

</details>

## ℹ️ ¿Qué es?

Es un servicio de windows que se encarga de diversas tareas en segundo plano referente a portal aduanero.

### 📃 Archivo de configuración

#### Encender o apagar motores

Consta de un archivo de configuración para encender o apagar procesos de la aplciación, dentro de los nodos motores.

```js  title="appsettings.json > Nodo Motores"
{
  "Motores": {
    "MotorCopiar": {
      "Encendido": false
    },
    "MotorCopiarCuentaAmericana": {
      "Encendido": false
    },
    "MotorCopiarPedimento": {
      "Encendido": false
    },
    "MotorCopiarPedimentoTEI": {
      "Encendido": false
    },
    "MotorPedimentoPagado": {
      "Encendido": false
    },
    "MotorGeneracionArchivos": {
      "Encendido": false
    },
    "MotorVUCED": {
      "Encendido": false
    },
    "MotorVUCEMCove": {
      "Encendido": false
    },
    "MotorNotificacionIGI": {
      "Encendido": false
    },
    "MotorDODA": {
      "Encendido": false
    },
    "MotorRecepcionArchivos": {
      "Encendido": false
    },
    "MotorBancos": {
      "Encendido": false
    },
    "MotorGenerarDocumentoMarcado": {
      "Encendido": false
    },
    "MotorTransferirDocumentoMarcado": {
      "Encendido": true
    },
    "MotorRecepcionBancos": {
      "Encendido": false
    }
  }
}
```

#### Número de versión del API

Cada actualización debería incrementar esta versión dependiendo de lo agregado (fix, requerimiento o un cambio completo de acuerdo a la nomenclatura de versiones de 3 digitos).

```js title="appsettings.json > Nodo Version"
{
  "Version":  "1.0.0",
}
```

#### Configurar servicio de correos

Sientase libre de configurar el SMTP desde este apartado:

```js title="appsettings.json > SMTP"
 {"SMTP": {
    "Email": "aduasis@gmail.com",
    "Password": "",
    "Host": "smtp.gmail.com",
    "Name": "Avisos Customs Portal",
    "Port": 587,
    "EnableSSL": true

  }}
```

#### Configurar dirección para generar reportes

Establezca la ruta para la API de reportes Jasper en este apartado:

```js title="appsettings.json > SMTP"
{
  "Endpoints": {
    "JasperAPI": "htt://aduasisserver:20030/"
  }
}
```

## 💿 Instalación

Descargue los siguientes paquetes de software:

[Visual Studio IDE](https://visualstudio.microsoft.com/es/)

[.Net Core 7 SDK](https://dotnet.microsoft.com/es-es/download/dotnet/7.0)