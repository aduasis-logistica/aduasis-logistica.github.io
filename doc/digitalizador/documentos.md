---
sidebar_position: 5
---

# Documentos

Entiendase como **digitalizar** al proceso por el cual tiene que pasar un documento para ser generado y a **digitalizador** como al conjunto de tecnologías y servicios utilizados para lograr el proceso de digitalizado.

Por cada documento existe un **digitalizador concreto** encargado del proceso para generarlo.

```kroki type=mermaid
flowchart TD
    Digitalizador --> DigitalizadorCove
    Digitalizador --> DigitalizadorPedimentoCompleto
    Digitalizador --> DigitalizadorAcuseCove
```

## Documentos

El digitalizador tiene dos formas de generar documentos:

- A partir del consumo de un web service de  [VUCEM](https://www.snice.gob.mx/cs/avi/snice/f.c.vucem.html).
- A partir de un reporte propio de Aduasis tipo Jasper.

### VUCEM

| Nombre | ID |    Web Service endpoint | SP para buscar referencias |
| --- | --- | --- | --- |
| Cove xml | 77 |  https://www.ventanillaunica.gob.mx:443/ventanilla/ConsultarEdocumentService| up_digitalizadorCoveXML|
| Pedimento completo xml | 76  | https://www.ventanillaunica.gob.mx:443/ventanilla-ws-pedimentos/ConsultarPedimentoCompletoService | up_digitalizadorPedimentoCompletoXML |
| Acuse EDocument pdf | 73  | https://www.ventanillaunica.gob.mx:443/ventanilla-acuses-HA/ConsultaAcusesServiceWS | up_digitalizadorAcuseEDocumentPDF|
| Acuse Cove pdf | 72  | https://www.ventanillaunica.gob.mx:443/ventanilla-acuses-HA/ConsultaAcusesServiceWS | up_digitalizadorAcuseCovePDF |
| Cove respuesta xml | 53 | https://www.ventanillaunica.gob.mx:443/ventanilla/ConsultarRespuestaCoveService | up_digitalizadorCoveRespuestaXML |
| EDocument respuesta xml | 316 | https://www.ventanillaunica.gob.mx:443/ventanilla/DigitalizarDocumentoService | up_digitalizadorEDocumentRespuestaXML |

### Aduasis

| Nombre | ID |  Nombre(s) Jasper | SP(s) | Recursos estaticos |
 | --- | --- | --- | --- | --- |
 | Cove PDF | 25 |cove_reporte.jasper, cove_reporte_mercancias.jasper, cove_reporte_mercancias_modelos.jasper | up_digitalizadorCovePDF.sql, up_reporteCoveMercanciasModelosPDF ,up_reporteCoveMercanciasPDF , up_reporteCovePDF.sql | footer.png, header.png|
