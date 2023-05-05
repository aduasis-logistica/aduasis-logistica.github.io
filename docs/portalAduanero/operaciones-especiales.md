# Operaciones especiales

Operaciones especiales es un modulo el cual tiene como objetivo principal crear una operación desde recibo hasta consolidación por meido de un layout (excel) configurado por cliente.

## Entidades

```mermaid
classDiagram
    class OcRecibo
    class OcGuia
    class OcBultos
    class OcPackingEncabezado
    class OcPackingDetalle
    
    class OcFacturaEncabezado
    class OcFacturaDetalle
    class OcInstruccion

    OcRecibo "1" *-- "*" OcGuia
    OcGuia "1" *-- "*" OcBultos
    OcRecibo "1" *-- "*" OcPackingEncabezado
    OcPackingEncabezado "1" *-- "*" OcPackingDetalle
    OcRecibo "1" *-- "1" OcInstruccion
 
    
    OcRecibo "1" *-- "*" OcFacturaEncabezado
    OcFacturaEncabezado "1" *-- "*" OcFacturaDetalle
```

### Packings

```mermaid
classDiagram
    class OcPackingEncabezado
    class OcPackingDetalle
    class OcProducto
    class OcProveedor

    
    OcPackingEncabezado "1" *-- "*" OcPackingDetalle
    OcPackingDetalle "1" *-- "1" OcProducto
    OcPackingDetalle "1" *-- "1" OcProveedor
    OcPackingDetalle "1" *-- "1" OcUnidadMedida
```

### Factura

```mermaid
classDiagram
    class OcFacturaEncabezado
    class OcFacturaDetalle
    class OcProducto
    class OcProveedor
     
    OcFacturaEncabezado "1" *-- "*" OcFacturaDetalle

    OcFacturaDetalle "1" *-- "1" OcProducto
    OcFacturaDetalle "1" *-- "1" OcProveedor
    OcFacturaDetalle "1" *-- "1" OcUnidadMedida
    OcFacturaDetalle "1" *-- "1" OcUnidadMedida
    OcFacturaDetalle "1" *-- "1" OcIncoterm
```

## Instruccion

## Configuración

## Página de operaciones especiales

### Cargado de la pagina

```mermaid
sequenceDiagram
    Usuario->>JSF: Cargar pagina
    JSF->>Bean: Cargar defaults
    Bean->>Facade: Buscar generales de acorde a rol de usuario
    Usuario->>JSF: Editar formulario
```

## Cargado de layout (Excel)

```mermaid
sequenceDiagram
    Usuario->>JSF: Subir layout (Excel)
    JSF->>Bean: Validar layout (Excel)
    Bean ->>JSF: Mostrar resultados
```
