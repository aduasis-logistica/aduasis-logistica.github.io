# 📦 WMS Móvil

:::info Enlace a repositorio
[Ir al repositorio en Github (Es necesario tener permisos)](https://github.com/aduasis-logistica/mobile-wms)
:::

<details>
  <summary>**🧪 Stack tecnológico**</summary>
  
  Lenguajes de programación:
  - Dart

  Framework:
  - Flutter

  IDEs/Editores recomendados:
  - Visualstudio code
  - Androidstudio

  ¿Qué necesito saber?
  - Flutter
  - GetX library

</details>

<img src="https://i.imgur.com/BgiZITr.png" alt="Logo" width="80" height="80"/>
 
## ℹ️ ¿Qué es?

Aplicación para el manejo de adminsitración de las bodegas.

## 💿 Instalación

### Requisitos de instalación

- Dart SDK version: 2.19.0
- Flutter 3.7.0
- Android studio (emulador de android) o dispositivo físico.
- VSCode

### Extensiones obligatorias para VSCode

| Nombre          | ID                     | Descripcion                                                                           |
| --------------- | ---------------------- | ------------------------------------------------------------------------------------- |
| BloC            | felixangelov.bloc      | Facilita el proceso de el manejo del patrón de manejo de estados BloC.                |
| Dart            | dart-code.dart-code    | Permite reconocer la sintaxis de Dart.                                                |
| Flutter         | dart-code.flutter      | Agrega todas las funcionalidad de un IDE referente a el manejo del framework Flutter. |
| i18n arb editor | innwin.i18n-arb-editor | Trabajar las traducciones español-inglés en el proyecto.                              |

### Extensiones opcionales para VSCode

| Nombre                    | ID                             | Descripcion                                                                       |
| ------------------------- | ------------------------------ | --------------------------------------------------------------------------------- |
| Awesome Flutter Snipppets | nash.awesome-flutter-snippets) | Snippets para trabajar más eficientemente con Flutter.                            |
| Workspace                 | fooxly.workspace               | Simplifica tu espacio de trabajo para acceder más rápido a los archivos deseados. |
| Markdown Preview          | bierner.markdown-mermaid       | Vista previa de archivos markdown.                                                |

### ¿Cómo agregar recursos multimedia?

Lo primero es ubicar la carpeta _assets_ en la carpeta raíz del proyecto, al situarse en la carpeta habría que ubicar la carpeta destino en donde vamos a colocar nuestro recurso (dichas carpetas están separadas por tipos de archivos).

Debido a la forma de trabajar de flutter, se buscó una extension que permitiera mapear los recursos que tenemos en la carpeta de assets en constantes por código evitando así totalmente el colocar la ubicación de nuestros assets de forma "manual" y así evitar que la aplicación pudiese fallar por algún error de dedo al ubicar los recursos.

Más información acerca del paquete en el siguiente enlace: [Fluttergen](https://pub.dev/packages?q=flutter_gen_runner).

```Shell
flutter packages pub run build_runner build
```

### ¿Cómo cambiar la ruta de mi dirección API?

Ubica en el explorador de soluciones el archivo **_'lib/app/shared/data/remote/client_api.dart'_**. En la constante llamada **_\_httpLink_**, coloca las credenciales de tu API local.

### Quiero compilar el proyecto en un dispositivo fisico

En estos casos, es probable que no se reconozca el API en tu dispositivo fisico, por lo tanto necesitas utilizar protocolos Ipv4, auxiiarte de una aplicación como [Ngrok](https://ngrok.com/download) o [Cloudflare](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-local-tunnel/).

## 🔨 Compilación

```Shell
  flutter build apk --release --no-tree-shake-icons
```

Vease este enlace para conocer más acerca del firmado

https://developer.android.com/studio/publish/app-signing?hl=es-419