"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[3922],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4962:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(87462),i=(t(67294),t(3905));const o={title:"Serveur LDAP",description:"Comment connecter un client LDAP dans Casdoor",keywords:["Serveur LDAP"],authors:["forestmgy"]},a=void 0,l={unversionedId:"ldap/ldapserver",id:"ldap/ldapserver",title:"Serveur LDAP",description:"Comment connecter un client LDAP dans Casdoor",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/ldap/ldapserver.md",sourceDirName:"ldap",slug:"/ldap/ldapserver",permalink:"/fr/docs/ldap/ldapserver",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/ldap/ldapserver.md",tags:[],version:"current",frontMatter:{title:"Serveur LDAP",description:"Comment connecter un client LDAP dans Casdoor",keywords:["Serveur LDAP"],authors:["forestmgy"]},sidebar:"tutorialSidebar",previous:{title:"Configuration et synchronisation des utilisateurs LDAP",permalink:"/fr/docs/ldap/config"},next:{title:"RADIUS",permalink:"/fr/docs/category/radius"}},s={},u=[{value:"Port du serveur LDAP",id:"port-du-serveur-ldap",level:3},{value:"Fonctionnement",id:"fonctionnement",level:3},{value:"Comment se Lier",id:"comment-se-lier",level:3},{value:"Comment Rechercher",id:"comment-rechercher",level:3}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"De nombreux syst\xe8mes, comme ",(0,i.kt)("inlineCode",{parentName:"p"},"Nexus"),", prennent en charge l'authentification LDAP. Casdoor impl\xe9mente \xe9galement un serveur LDAP simple, qui prend en charge les op\xe9rations de liaison (bind) et de recherche (search)."),(0,i.kt)("p",null,"Ce document d\xe9crit comment se connecter au serveur LDAP dans Casdoor et mettre en \u0153uvre une authentification de connexion simple."),(0,i.kt)("h3",{id:"port-du-serveur-ldap"},"Port du serveur LDAP"),(0,i.kt)("p",null,"Le serveur LDAP \xe9coute sur le port ",(0,i.kt)("inlineCode",{parentName:"p"},"389")," par d\xe9faut. Vous pouvez changer le port par d\xe9faut en modifiant la valeur ",(0,i.kt)("inlineCode",{parentName:"p"},"ldapServerPort")," dans ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor/blob/28b381e01eebac66e39e20179ed95282695ecd75/conf/app.conf#L22"},"conf/app.conf"),"."),(0,i.kt)("h3",{id:"fonctionnement"},"Fonctionnement"),(0,i.kt)("p",null,"Semblable au client LDAP dans Casdoor, les utilisateurs du serveur LDAP sont tous des sous-classes de ",(0,i.kt)("inlineCode",{parentName:"p"},"posixAccount"),"."),(0,i.kt)("p",null,"Lorsque le serveur re\xe7oit un ensemble de donn\xe9es transmises par LDAP, il analysera le ",(0,i.kt)("inlineCode",{parentName:"p"},"cn")," et le ",(0,i.kt)("inlineCode",{parentName:"p"},"ou"),", o\xf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"cn")," repr\xe9sente le nom d'utilisateur et ",(0,i.kt)("inlineCode",{parentName:"p"},"ou")," repr\xe9sente le nom de l'organisation. Le ",(0,i.kt)("inlineCode",{parentName:"p"},"dc")," n'a pas d'importance."),(0,i.kt)("p",null,"S'il s'agit d'une op\xe9ration de liaison, le serveur utilisera Casdoor pour v\xe9rifier le nom d'utilisateur et le mot de passe et accorder \xe0 l'utilisateur la permission dans Casdoor."),(0,i.kt)("p",null,"S'il s'agit d'une op\xe9ration de recherche, le serveur v\xe9rifiera si l'op\xe9ration de recherche est l\xe9gale, selon les permissions accord\xe9es au client par l'op\xe9ration de liaison, et retournera une r\xe9ponse."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Nous ne prenons en charge que l'",(0,i.kt)("strong",{parentName:"p"},"Authentification Simple"),".")),(0,i.kt)("h3",{id:"comment-se-lier"},"Comment se Lier"),(0,i.kt)("p",null,"Dans le serveur LDAP de Casdoor, nous ne reconnaissons que le ",(0,i.kt)("inlineCode",{parentName:"p"},"DN")," similaire \xe0 ce format : ",(0,i.kt)("inlineCode",{parentName:"p"},"cn=admin,ou=built-in,dc=example,dc=com"),"."),(0,i.kt)("p",null,"Veuillez d\xe9finir le ",(0,i.kt)("inlineCode",{parentName:"p"},"DN")," de l'utilisateur admin au format ci-dessus. Ensuite, vous pouvez utiliser ce ",(0,i.kt)("inlineCode",{parentName:"p"},"DN")," pour vous lier au serveur LDAP avec le mot de passe de l'utilisateur pour vous connecter \xe0 Casdoor pour v\xe9rification. Si la v\xe9rification du serveur est r\xe9ussie, l'utilisateur se verra accorder une autorit\xe9 dans Casdoor."),(0,i.kt)("h3",{id:"comment-rechercher"},"Comment Rechercher"),(0,i.kt)("p",null,"Une fois l'op\xe9ration de liaison r\xe9ussie, vous pouvez effectuer l'op\xe9ration de recherche. Il existe quelques diff\xe9rences entre les op\xe9rations de recherche et de liaison."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pour rechercher un certain utilisateur, comme ",(0,i.kt)("inlineCode",{parentName:"li"},"Alice")," sous l'organisation ",(0,i.kt)("inlineCode",{parentName:"li"},"built-in"),", vous devriez utiliser un ",(0,i.kt)("inlineCode",{parentName:"li"},"DN")," comme ceci : ",(0,i.kt)("inlineCode",{parentName:"li"},"ou=built-in,dc=example,dc=com"),", et ajouter ",(0,i.kt)("inlineCode",{parentName:"li"},"cn=Alice")," dans le champ Filtre."),(0,i.kt)("li",{parentName:"ul"},"Pour rechercher tous les utilisateurs sous une certaine organisation, comme tous les utilisateurs de ",(0,i.kt)("inlineCode",{parentName:"li"},"built-in"),", vous devriez utiliser un ",(0,i.kt)("inlineCode",{parentName:"li"},"DN")," comme ceci : ",(0,i.kt)("inlineCode",{parentName:"li"},"ou=built-in,dc=example,dc=com"),", et ajouter ",(0,i.kt)("inlineCode",{parentName:"li"},"cn=*")," dans le champ Filtre."),(0,i.kt)("li",{parentName:"ul"},"Pour rechercher tous les utilisateurs dans toutes les organisations (en supposant que l'utilisateur a suffisamment de permissions), vous devriez utiliser un ",(0,i.kt)("inlineCode",{parentName:"li"},"DN")," comme ceci : ",(0,i.kt)("inlineCode",{parentName:"li"},"ou=*,dc=example,dc=com"),", et ajouter ",(0,i.kt)("inlineCode",{parentName:"li"},"cn=*")," dans le champ Filtre."),(0,i.kt)("li",{parentName:"ul"},"To search for all users in a specific group, you should use a filter query like this: ",(0,i.kt)("inlineCode",{parentName:"li"},"(memberOf=organization_name/group_name)")," in the Filter field.")))}p.isMDXComponent=!0}}]);