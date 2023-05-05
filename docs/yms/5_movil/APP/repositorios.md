# Repositorios

A grandes rasgos la clase con la que vamos a estar utilizando para obtener información será la clase ContextoProvider, de tal forma que no sea una tarea tediosa saber que entorno debemos de utilizar dependiendo del estatus de conexion.

```mermaid
 classDiagram
        class Cliente{

        }

        class Contexto{
            <<interface>> 
            + Repository: getConcreteRepository()
        }
        class ContextoProvider{
        }

        class ContextoLocal{

        }
        class ContextoRemoto{

        }
        class Repositorio{
            <<interface>>
        }
        class RepositorioConcreto{

        }
      
        Cliente -- ContextoProvider : Usa
        ContextoProvider ..> Contexto : Implementa
        ContextoLocal ..> Contexto : Implementa
        ContextoRemoto ..> Contexto : Implementa
        ContextoLocal --* ContextoProvider : Si no hay conexion provee 
        ContextoRemoto --* ContextoProvider  : Si hay conexion provee
        Repositorio --* Contexto : Tiene


        RepositorioConcreto ..> Repositorio : Implementa

```