"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[9969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"HTTP personalizado",description:"Usando HTTP Personalizado como un proveedor de notificaciones para Casdoor",keywords:["personalizado","notificaci\xf3n","proveedor"],authors:["UsherFall"]},i=void 0,d={unversionedId:"provider/notification/customHttp",id:"provider/notification/customHttp",title:"HTTP personalizado",description:"Usando HTTP Personalizado como un proveedor de notificaciones para Casdoor",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/provider/notification/customHttp.md",sourceDirName:"provider/notification",slug:"/provider/notification/customHttp",permalink:"/es/docs/provider/notification/customHttp",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/notification/customHttp.md",tags:[],version:"current",frontMatter:{title:"HTTP personalizado",description:"Usando HTTP Personalizado como un proveedor de notificaciones para Casdoor",keywords:["personalizado","notificaci\xf3n","proveedor"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Telegram",permalink:"/es/docs/provider/notification/telegram"},next:{title:"Slack",permalink:"/es/docs/provider/notification/slack"}},p={},c=[{value:"Configurar Proveedor HTTP Personalizado de Casdoor",id:"configurar-proveedor-http-personalizado-de-casdoor",level:2}],l={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Casdoor soporta Proveedor de Notificaciones HTTP Personalizado. Puedes usarlo para enviar mensajes a direcciones HTTP espec\xedficas.")),(0,n.kt)("h2",{id:"configurar-proveedor-http-personalizado-de-casdoor"},"Configurar Proveedor HTTP Personalizado de Casdoor"),(0,n.kt)("p",null,"Hay tres campos obligatorios: ",(0,n.kt)("inlineCode",{parentName:"p"},"Method"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Parameter name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Content")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"Chat ID"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Nombre"),(0,n.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"M\xe9todo"),(0,n.kt)("td",{parentName:"tr",align:null},"Selecciona el m\xe9todo ",(0,n.kt)("inlineCode",{parentName:"td"},"GET")," o ",(0,n.kt)("inlineCode",{parentName:"td"},"POST"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Nombre del par\xe1metro"),(0,n.kt)("td",{parentName:"tr",align:null},"Nombre del par\xe1metro de consulta URL o par\xe1metro del cuerpo, dependiendo del ",(0,n.kt)("inlineCode",{parentName:"td"},"method"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Contenido"),(0,n.kt)("td",{parentName:"tr",align:null},"El mensaje que quieres enviar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},"Tu direcci\xf3n HTTP")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"custom_http_provider",src:r(3240).Z,width:"1820",height:"1044"})),(0,n.kt)("p",null,"En mi ejemplo, cuando hago clic en ",(0,n.kt)("inlineCode",{parentName:"p"},"Send Notification Message"),", recibo esta solicitud:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"custom_http_request",src:r(67130).Z,width:"1232",height:"250"})),(0,n.kt)("video",{src:"/video/provider/notification/use_custom_http_as_notification_provider.mp4",controls:"controls",width:"100%"}))}s.isMDXComponent=!0},3240:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/custom_http_provider-2b4ee8007a085b75211edde3b156b19e.png"},67130:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/custom_http_request-333547a4c9bb19498bb61faffaafdbc1.png"}}]);