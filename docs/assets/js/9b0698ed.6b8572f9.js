"use strict";(self.webpackChunkaduasis_docs=self.webpackChunkaduasis_docs||[]).push([[965],{5183:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var r=a(5893),n=a(1151);const o={sidebar_position:1},d="Bit\xe1cora (digitalizador_bitacora)",t={id:"digitalizador/tablas/digitalizadorBitacora",title:"Bit\xe1cora (digitalizador_bitacora)",description:"Esta tabla nos permite tener visibilidad de las referencias que pasaran por el proceso de digitalizaci\xf3n y as\xed poder monitorear distintos aspectos.",source:"@site/doc/digitalizador/tablas/digitalizadorBitacora.md",sourceDirName:"digitalizador/tablas",slug:"/digitalizador/tablas/digitalizadorBitacora",permalink:"/docs/digitalizador/tablas/digitalizadorBitacora",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/doc/digitalizador/tablas/digitalizadorBitacora.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"digitalizadorSidebar",previous:{title:"Instalaci\xf3n",permalink:"/docs/digitalizador/instalacion"},next:{title:"Proceso general",permalink:"/docs/digitalizador/procesos/general"}},s={},c=[{value:"Campos de monitoreo",id:"campos-de-monitoreo",level:2},{value:"Campo digitalizador_bitacora.identificador",id:"campo-digitalizador_bitacoraidentificador",level:2},{value:"Relaci\xf3n con oc_pedimento_pago",id:"relaci\xf3n-con-oc_pedimento_pago",level:2},{value:"DigArchivo",id:"digarchivo",level:2},{value:"Regenerar documento",id:"regenerar-documento",level:2},{value:"Priorizar documentos",id:"priorizar-documentos",level:2}];function l(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"bit\xe1cora-digitalizador_bitacora",children:"Bit\xe1cora (digitalizador_bitacora)"}),"\n",(0,r.jsx)(i.p,{children:"Esta tabla nos permite tener visibilidad de las referencias que pasaran por el proceso de digitalizaci\xf3n y as\xed poder monitorear distintos aspectos."}),"\n",(0,r.jsx)(i.p,{children:"El esquema de la tabla es el siguiente:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-kroki",metastring:"type=plantuml",children:"@startuml\r\nclass digitalizador_bitacora {\r\n  id_cliente : varchar(6) <<PK>>\r\n  id_tipo_operacion : char(1) <<PK>>\r\n  id_referencia : varchar(10) <<PK>>\r\n  identificador : varchar(100) <<PK>>\r\n  id_documento : smallint <<PK>>\r\n  id_rectificacion : int \r\n  fecha_ingreso : datetime\r\n  intentos : smallint\r\n  completado : bit\r\n  fecha_cargado : datetime\r\n  id_error : int\r\n  existente_en_disco : bit\r\n  remesa_sa : varchar(10)\r\n  remesa_agente : varchar(10)\r\n}\r\n@enduml\n"})}),"\n",(0,r.jsx)(i.h2,{id:"campos-de-monitoreo",children:"Campos de monitoreo"}),"\n",(0,r.jsx)(i.p,{children:"Entre las columnas de monitoreo se encuentran las siguientes:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"intentos:"})," indica cuantas veces la referencia ha sido considerada por el digitalizador para intentar generar dicho documento, en caso de que los intentos sean 7 ya no volver\xe1 a ser considerada la referencia por el digitalizador."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"fecha_cargado:"})," indica la fecha en cuando el documento se digitalizo correctamente."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"completado:"})," es una bandera para saber si el documento ya se digitaliz\xf3."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"existente_en_disco"})," indica si el archivo digitalizado ya existia en disco y por lo tanto tuvo que sobrescribir dicho documento."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"fecha_ingreso:"})," fecha en que la referencia se insert\xf3 en la bit\xe1cora."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"id_error"})," es el identificador de algun error guardado en la tabla digitalizador_errores para saber espec\xedficamente por qu\xe9 es que el documento no pudo ser digitalizado."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"campo-digitalizador_bitacoraidentificador",children:"Campo digitalizador_bitacora.identificador"}),"\n",(0,r.jsx)(i.p,{children:"El valor del identificador puede variar dependiendo del id_documento establecido en el registro de la bitacora."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Id"}),(0,r.jsx)(i.th,{children:"Documento"}),(0,r.jsx)(i.th,{children:"Identificador"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"77"}),(0,r.jsx)(i.td,{children:"Cove XML"}),(0,r.jsx)(i.td,{children:"COVE"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"76"}),(0,r.jsx)(i.td,{children:"Pedimento completo"}),(0,r.jsx)(i.td,{children:"Pedimento#Aduana#Patente"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"73"}),(0,r.jsx)(i.td,{children:"Acuse EDocument PDF"}),(0,r.jsx)(i.td,{children:"EDocument"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"72"}),(0,r.jsx)(i.td,{children:"Acuse Cove PDF"}),(0,r.jsx)(i.td,{children:"Cove"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"25"}),(0,r.jsx)(i.td,{children:"Cove PDF"}),(0,r.jsx)(i.td,{children:"Cove"})]})]})]}),"\n",(0,r.jsx)(i.admonition,{title:"recomendaci\xf3n",type:"tip",children:(0,r.jsx)(i.p,{children:"Para el manejo de identificadores separados por '#' se puede hacer uso de la funcion obtener_parametro, dando como argumentos el identificador y el numero de parametro que se desea obtener."})}),"\n",(0,r.jsx)(i.h2,{id:"relaci\xf3n-con-oc_pedimento_pago",children:"Relaci\xf3n con oc_pedimento_pago"}),"\n",(0,r.jsx)(i.p,{children:"La bitacora se relaciona con oc_pedimento_pago por medio de los siguientes campos: id_cliente, id_tipo_operacion, id_referencia e id_rectificacion.\r\nDicha relaci\xf3n servir\xe1 para relacionar los documentos digitalizados a ese pedimento en portal."}),"\n",(0,r.jsx)(i.h2,{id:"digarchivo",children:"DigArchivo"}),"\n",(0,r.jsx)(i.p,{children:"Para saber si un archivo fue cargado por el digitalizador basta con revisar si la columna digitalizador tiene un valor de 1 (dig_archivo.digitalizador = 1)."}),"\n",(0,r.jsx)(i.h2,{id:"regenerar-documento",children:"Regenerar documento"}),"\n",(0,r.jsx)(i.p,{children:"Si se desea volver a considerar una referencia de bitacora que ya fue generada o tuvo algun tipo de problema para ser digitalizada:\r\nElimine la referencia de bitacora y vuelva a insertarla o actualice los siguientes valores del registro ya existente:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"intentos=0"}),"\n",(0,r.jsx)(i.li,{children:"cargado=0"}),"\n",(0,r.jsx)(i.li,{children:"fecha_cargado=NULL"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"priorizar-documentos",children:"Priorizar documentos"}),"\n",(0,r.jsx)(i.p,{children:"Si se desea dar prioridad a un documento basta con establecer en el campo de intentos un valor negativo para que el order ascendente de consulta de referencias aplique a favor de la referencia que necesitamos priorizar."})]})}function u(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,i,a)=>{a.d(i,{Z:()=>t,a:()=>d});var r=a(7294);const n={},o=r.createContext(n);function d(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);