"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[783],{3905:(e,i,n)=>{n.d(i,{Zo:()=>s,kt:()=>m});var a=n(67294);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function c(e,i){if(null==e)return{};var n,a,t=function(e,i){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=a.createContext({}),l=function(e){var i=a.useContext(d),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},s=function(e){var i=l(e.components);return a.createElement(d.Provider,{value:i},e.children)},p={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},u=a.forwardRef((function(e,i){var n=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=t,v=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(v,r(r({ref:i},s),{},{components:n})):a.createElement(v,r({ref:i},s))}));function m(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var d in i)hasOwnProperty.call(i,d)&&(c[d]=i[d]);c.originalType=e,c.mdxType="string"==typeof e?e:t,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61720:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),t=(n(67294),n(3905));const o={title:"Visi\xf3n general",description:"Gesti\xf3n de invitaciones en casdoor",keywords:["invitaciones"],authors:["HGZ-20"]},r=void 0,c={unversionedId:"invitation/overview",id:"invitation/overview",title:"Visi\xf3n general",description:"Gesti\xf3n de invitaciones en casdoor",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/invitation/overview.md",sourceDirName:"invitation",slug:"/invitation/overview",permalink:"/es/docs/invitation/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/invitation/overview.md",tags:[],version:"current",frontMatter:{title:"Visi\xf3n general",description:"Gesti\xf3n de invitaciones en casdoor",keywords:["invitaciones"],authors:["HGZ-20"]},sidebar:"tutorialSidebar",previous:{title:"Invitations",permalink:"/es/docs/category/invitations"},next:{title:"IP Whitelist",permalink:"/es/docs/category/ip-whitelist"}},d={},l=[{value:"Propiedades de la Invitaci\xf3n",id:"propiedades-de-la-invitaci\xf3n",level:2},{value:"Invitaci\xf3n por Defecto",id:"invitaci\xf3n-por-defecto",level:2},{value:"Invitaci\xf3n de Coincidencia Regular",id:"invitaci\xf3n-de-coincidencia-regular",level:2},{value:"Enlace de Invitaci\xf3n",id:"enlace-de-invitaci\xf3n",level:2},{value:"Demo",id:"demo",level:2}],s={toc:l};function p(e){let{components:i,...o}=e;return(0,t.kt)("wrapper",(0,a.Z)({},s,o,{components:i,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Actualmente casdoor ya soporta un m\xe9todo de c\xf3digo de invitaci\xf3n m\xe1s flexible para el registro de usuarios. Una vez que el administrador abre la p\xe1gina de registro con el c\xf3digo de invitaci\xf3n como opci\xf3n obligatoria, los usuarios solo pueden registrarse si tienen un c\xf3digo de invitaci\xf3n v\xe1lido."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"A\xf1adir c\xf3digo de invitaci\xf3n al \xedtem de registro",src:n(581).Z,width:"2724",height:"828"})),(0,t.kt)("p",null,"Hay dos formas principales de usar los c\xf3digos de invitaci\xf3n, el que se a\xf1ade por defecto es un c\xf3digo de cadena aleatoria, compuesto por n\xfameros y letras aleatorios. Para ser m\xe1s flexible, el c\xf3digo de invitaci\xf3n tambi\xe9n soporta coincidencia regular para emparejar m\xfaltiples c\xf3digos de invitaci\xf3n diferentes.\n",(0,t.kt)("img",{alt:"Invitaciones",src:n(24978).Z,width:"2796",height:"470"})),(0,t.kt)("h2",{id:"propiedades-de-la-invitaci\xf3n"},"Propiedades de la Invitaci\xf3n"),(0,t.kt)("p",null,"Casdoor gestiona las invitaciones a trav\xe9s de las siguientes propiedades"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Organizaci\xf3n"),": La organizaci\xf3n que posee la invitaci\xf3n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Nombre"),": El nombre \xfanico de la invitaci\xf3n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Nombre para mostrar"),": Nombre de la Invitaci\xf3n que se muestra"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"C\xf3digo"),": C\xf3digo de invitaci\xf3n, puedes rellenar la cadena de c\xf3digo de invitaci\xf3n espec\xedfica, tambi\xe9n puedes rellenar la expresi\xf3n regular"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"C\xf3digo por defecto"),": Utilizado para rellenar el c\xf3digo de invitaci\xf3n por defecto en el enlace de invitaci\xf3n. Para c\xf3digos de invitaci\xf3n generados aleatoriamente, el c\xf3digo por defecto es el mismo que el c\xf3digo de invitaci\xf3n. Para el c\xf3digo en forma de expresi\xf3n regular, necesitas rellenar el c\xf3digo por defecto por ti mismo que coincida con la regla de expresi\xf3n regular en el c\xf3digo"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Cuota"),": N\xfamero m\xe1ximo de veces que se puede utilizar un c\xf3digo de invitaci\xf3n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Contador de usos"),": N\xfamero de veces que se ha utilizado el c\xf3digo de invitaci\xf3n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Aplicaci\xf3n"),": Permitir aplicaciones que usen este c\xf3digo de invitaci\xf3n. Seleccionar ",(0,t.kt)("inlineCode",{parentName:"li"},"TODOS")," lo hace disponible para todas las aplicaciones bajo la organizaci\xf3n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Nombre de usuario"),": Nombre de usuario espec\xedfico requerido al registrarse con esta invitaci\xf3n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Correo electr\xf3nico"),": Correo electr\xf3nico espec\xedfico requerido al registrarse con esta invitaci\xf3n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Tel\xe9fono"),": Tel\xe9fono espec\xedfico requerido al registrarse con esta invitaci\xf3n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Estado"),": Estado de la invitaci\xf3n")),(0,t.kt)("h2",{id:"invitaci\xf3n-por-defecto"},"Invitaci\xf3n por Defecto"),(0,t.kt)("p",null,"El c\xf3digo de invitaci\xf3n en la invitaci\xf3n por defecto es una cadena generada aleatoriamente de n\xfameros y letras, y con ",(0,t.kt)("inlineCode",{parentName:"p"},"Cuota")," establecida en 1, solo se puede usar una vez. Las aplicaciones est\xe1n configuradas en ",(0,t.kt)("inlineCode",{parentName:"p"},"TODOS")," por defecto, lo que significa que todas las aplicaciones bajo la organizaci\xf3n correspondiente a esta invitaci\xf3n pueden usar este c\xf3digo de invitaci\xf3n."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Invitaci\xf3n por Defecto",src:n(5544).Z,width:"2762",height:"1366"})),(0,t.kt)("p",null,"Si el c\xf3digo de invitaci\xf3n est\xe1 configurado para un usuario espec\xedfico y quieres que el usuario se registre con el ",(0,t.kt)("inlineCode",{parentName:"p"},"nombre de usuario"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"correo electr\xf3nico"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"tel\xe9fono")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"c\xf3digo de invitaci\xf3n")," dados, puedes restringir el registro del usuario rellenando los campos correspondientes. Si los campos est\xe1n vac\xedos o si no est\xe1n configurados en la p\xe1gina de registro, casdoor no fuerza la validaci\xf3n de estos campos"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Configurar la informaci\xf3n del usuario correspondiente al c\xf3digo de invitaci\xf3n",src:n(48268).Z,width:"2708",height:"292"})),(0,t.kt)("p",null,"Cuando sea necesario reutilizar un c\xf3digo de invitaci\xf3n, puedes establecer ",(0,t.kt)("inlineCode",{parentName:"p"},"Cuota")," a un valor mayor, por ejemplo, si quieres que este c\xf3digo de invitaci\xf3n se use 10 veces, entonces puedes establecer ",(0,t.kt)("inlineCode",{parentName:"p"},"Cuota")," en 10. Cuando desees detener el registro con este c\xf3digo de invitaci\xf3n, tambi\xe9n puedes hacerlo modificando el estado de la invitaci\xf3n a ",(0,t.kt)("inlineCode",{parentName:"p"},"Suspendido"),"."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Cuota de invitaci\xf3n y estado",src:n(67148).Z,width:"2718",height:"718"})),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Cuando ",(0,t.kt)("inlineCode",{parentName:"p"},"nombre de usuario"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"correo electr\xf3nico")," o ",(0,t.kt)("inlineCode",{parentName:"p"},"tel\xe9fono")," est\xe1 configurado en la invitaci\xf3n, la ",(0,t.kt)("inlineCode",{parentName:"p"},"cuota")," no debe ser mayor que uno. Esto se debe a que el ",(0,t.kt)("inlineCode",{parentName:"p"},"nombre de usuario"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"correo electr\xf3nico")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"tel\xe9fono")," del usuario deben ser \xfanicos, y m\xfaltiples usuarios no deber\xedan poder registrarse usando el mismo ",(0,t.kt)("inlineCode",{parentName:"p"},"nombre de usuario"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"correo electr\xf3nico")," o ",(0,t.kt)("inlineCode",{parentName:"p"},"tel\xe9fono"),".")),(0,t.kt)("h2",{id:"invitaci\xf3n-de-coincidencia-regular"},"Invitaci\xf3n de Coincidencia Regular"),(0,t.kt)("p",null,"A veces hay una necesidad de un gran n\xfamero de c\xf3digos de invitaci\xf3n para el registro de usuarios, y generar c\xf3digos de invitaci\xf3n uno por uno puede ser muy ineficiente. Casdoor soporta la validaci\xf3n de c\xf3digos de invitaci\xf3n a trav\xe9s de la coincidencia de expresiones regulares. Por ejemplo, al configurar el ",(0,t.kt)("inlineCode",{parentName:"p"},"C\xf3digo")," como ",(0,t.kt)("inlineCode",{parentName:"p"},'"[a-z]2333"'),", cualquier c\xf3digo de invitaci\xf3n que coincida con esta expresi\xf3n regular ser\xe1 emparejado con \xe9xito como un c\xf3digo de invitaci\xf3n v\xe1lido."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Invitaci\xf3n de Coincidencia Regular",src:n(21459).Z,width:"2720",height:"400"})),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Al usar expresiones regulares para validar c\xf3digos de invitaci\xf3n, cada c\xf3digo de invitaci\xf3n que coincida con la expresi\xf3n regular solo se puede usar una vez, y la ",(0,t.kt)("inlineCode",{parentName:"p"},"Cuota")," todav\xeda puede limitar el n\xfamero de usos. Por ejemplo, cuando el ",(0,t.kt)("inlineCode",{parentName:"p"},"C\xf3digo")," es ",(0,t.kt)("inlineCode",{parentName:"p"},'"[a-z]2333"')," y la ",(0,t.kt)("inlineCode",{parentName:"p"},"Cuota")," es 2, solo un m\xe1ximo de dos c\xf3digos de invitaci\xf3n que coincidan con la expresi\xf3n regular pueden ser utilizados con \xe9xito.")),(0,t.kt)("h2",{id:"enlace-de-invitaci\xf3n"},"Enlace de Invitaci\xf3n"),(0,t.kt)("p",null,"Casdoor soporta copiar el enlace de invitaci\xf3n correspondiente a una invitaci\xf3n. El c\xf3digo de invitaci\xf3n en el enlace de invitaci\xf3n corresponde al campo de C\xf3digo por defecto. Por lo tanto, para invitaciones que usan expresiones regulares, el C\xf3digo por defecto debe ser rellenado manualmente para generar el enlace de invitaci\xf3n correcto. Adem\xe1s, al registrarse usando un enlace de invitaci\xf3n, la p\xe1gina de registro autom\xe1ticamente rellenar\xe1 cierta informaci\xf3n de campo establecida por la invitaci\xf3n correspondiente al c\xf3digo de invitaci\xf3n."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Enlace de Invitaci\xf3n",src:n(22304).Z,width:"2757",height:"743"})),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"P\xe1gina de registro correspondiente al enlace de invitaci\xf3n",src:n(7301).Z,width:"2604",height:"1610"})),(0,t.kt)("h2",{id:"demo"},"Demo"),(0,t.kt)("video",{src:"/video/invitation/invitation.mp4",controls:"controls",width:"100%"}))}p.isMDXComponent=!0},5544:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/default-invitation-ae67e333962f14c6900a7ee3b8a4885e.png"},22304:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/invitation-link-copy-4df3fc5ddea53c6ffc526867c0026ccc.png"},67148:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/invitation-quota-state-e16c1c4819ea179a3f8141da552a6b9e.png"},48268:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/invitation-with-user-information-c6c16b8723bc87c5a5d6901d6b7b5f89.png"},24978:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/invitations-6768ecad9997d7c90c08857679f6f31a.png"},21459:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/regular-match-invitation-77cf97d60379d4815a1e461809d8ab1e.png"},581:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/signup-add-invitation-code-2e0e7f751faee803bd95c05282e1b320.png"},7301:(e,i,n)=>{n.d(i,{Z:()=>a});const a=n.p+"assets/images/signup-with-invitation-code-657788efd7df638c6009eae29358a95a.png"}}]);