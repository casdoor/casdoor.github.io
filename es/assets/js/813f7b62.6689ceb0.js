"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2528],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"Personalizaci\xf3n de Cuenta",description:"Personalizando los elementos de la cuenta de los usuarios",keywords:["personalizaci\xf3n de cuenta"],authors:["leo220yuyaodog"]},l=void 0,o={unversionedId:"organization/accountCustomization",id:"organization/accountCustomization",title:"Personalizaci\xf3n de Cuenta",description:"Personalizando los elementos de la cuenta de los usuarios",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/organization/accountCustomization.md",sourceDirName:"organization",slug:"/organization/accountCustomization",permalink:"/es/docs/organization/accountCustomization",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/organization/accountCustomization.md",tags:[],version:"current",frontMatter:{title:"Personalizaci\xf3n de Cuenta",description:"Personalizando los elementos de la cuenta de los usuarios",keywords:["personalizaci\xf3n de cuenta"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Password Obfuscator",permalink:"/es/docs/organization/passwordObfuscator"},next:{title:"Personalizaci\xf3n de Temas",permalink:"/es/docs/organization/customize-theme"}},s={},p=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"\xbfC\xf3mo Personalizar?",id:"c\xf3mo-personalizar",level:2},{value:"Tabla de Cuenta",id:"tabla-de-cuenta",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,i.kt)("p",null,"En una organizaci\xf3n, puedes personalizar los ",(0,i.kt)("strong",{parentName:"p"},"elementos de la cuenta")," de los usuarios. Esto incluye si cada elemento es ",(0,i.kt)("strong",{parentName:"p"},"visible")," y su ",(0,i.kt)("strong",{parentName:"p"},"regla de visualizaci\xf3n")," y ",(0,i.kt)("strong",{parentName:"p"},"regla de modificaci\xf3n"),"."),(0,i.kt)("p",null,"Cuando personalizas los elementos de la cuenta en una organizaci\xf3n, esta configuraci\xf3n tiene efecto en la p\xe1gina de inicio de todos los miembros de esa organizaci\xf3n."),(0,i.kt)("h2",{id:"c\xf3mo-personalizar"},"\xbfC\xf3mo Personalizar?"),(0,i.kt)("p",null,"Los elementos de la cuenta tienen cuatro atributos:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Nombre de Columna"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Valor Seleccionable"),(0,i.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Nombre del elemento de la cuenta.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Visible"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"True")," / ",(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:null},"Selecciona si este elemento de la cuenta es visible en la p\xe1gina de inicio del usuario.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ViewRule"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Elementos de Regla"),(0,i.kt)("td",{parentName:"tr",align:null},"Selecciona una regla para usar al visualizar el elemento de la cuenta.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ModifyRule"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Elementos de Regla"),(0,i.kt)("td",{parentName:"tr",align:null},"Selecciona una regla para usar al modificar el elemento de la cuenta.")))),(0,i.kt)("p",null,"Para personalizar los elementos de la cuenta, sigue estos pasos:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ve a la p\xe1gina de Edici\xf3n de la Organizaci\xf3n.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Encontrar\xe1s las siguientes opciones:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"account_customize.png",src:a(94717).Z,width:"1803",height:"885"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casdoor proporciona operaciones simples para configurar los elementos de la cuenta:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Establece el elemento para que sea visible o invisible."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"account_visible.png",src:a(99990).Z,width:"1519",height:"349"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Establece reglas de visualizaci\xf3n y modificaci\xf3n."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"account_rule.png",src:a(76474).Z,width:"676",height:"237"})))))),(0,i.kt)("p",null,"Hay 3 reglas disponibles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Public"),": Todos tienen permiso."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Self"),": Cada usuario tiene su propio permiso."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Admin"),": El administrador tiene permiso.")),(0,i.kt)("h2",{id:"tabla-de-cuenta"},"Tabla de Cuenta"),(0,i.kt)("p",null,"A continuaci\xf3n se presentan todos los campos en el elemento de la cuenta. Para descripciones, puedes referirte a ",(0,i.kt)("a",{parentName:"p",href:"/docs/user/overview"},"usuario"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Organizaci\xf3n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Nombre")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Nombre para mostrar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Avatar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tipo de usuario")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Contrase\xf1a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Correo electr\xf3nico")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Tel\xe9fono")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pa\xeds/Regi\xf3n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ubicaci\xf3n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Afiliaci\xf3n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"T\xedtulo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"P\xe1gina de inicio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Biograf\xeda")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Etiqueta")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Solicitud de registro")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Inicios de sesi\xf3n de terceros")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Propiedades")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Es administrador")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Es administrador global")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Est\xe1 prohibido")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Est\xe1 eliminado"))))}u.isMDXComponent=!0},94717:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/account_customize-243885eef021d59360f3c91f10301898.png"},76474:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/account_rule-ed55cc6b2700da2609c190578af09b85.png"},99990:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/account_visible-05d5e8e4761434d4117577bad7707d8c.png"}}]);