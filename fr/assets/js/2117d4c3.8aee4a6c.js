"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[5141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"Configuration et synchronisation des utilisateurs LDAP",description:"Configuration de LDAP dans Casdoor pour la synchronisation des utilisateurs",keywords:["ldap","config","user","sync"],authors:["WindSpiritSR"]},o=void 0,s={unversionedId:"ldap/config",id:"ldap/config",title:"Configuration et synchronisation des utilisateurs LDAP",description:"Configuration de LDAP dans Casdoor pour la synchronisation des utilisateurs",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/ldap/config.md",sourceDirName:"ldap",slug:"/ldap/config",permalink:"/fr/docs/ldap/config",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/ldap/config.md",tags:[],version:"current",frontMatter:{title:"Configuration et synchronisation des utilisateurs LDAP",description:"Configuration de LDAP dans Casdoor pour la synchronisation des utilisateurs",keywords:["ldap","config","user","sync"],authors:["WindSpiritSR"]},sidebar:"tutorialSidebar",previous:{title:"Aper\xe7u",permalink:"/fr/docs/ldap/overview"},next:{title:"Serveur LDAP",permalink:"/fr/docs/ldap/ldapserver"}},u={},l=[{value:"Configuration de la connexion au serveur LDAP",id:"configuration-de-la-connexion-au-serveur-ldap",level:2},{value:"Nom du serveur",id:"nom-du-serveur",level:3},{value:"H\xf4te du serveur",id:"h\xf4te-du-serveur",level:3},{value:"Port du serveur",id:"port-du-serveur",level:3},{value:"Base DN",id:"base-dn",level:3},{value:"Filtre de recherche",id:"filtre-de-recherche",level:3},{value:"Champs de filtre",id:"champs-de-filtre",level:3},{value:"Admin",id:"admin",level:3},{value:"Mot de passe Admin",id:"mot-de-passe-admin",level:3},{value:"Synchronisation automatique",id:"synchronisation-automatique",level:3},{value:"Synchronisation des utilisateurs",id:"synchronisation-des-utilisateurs",level:2},{value:"Default group",id:"default-group",level:2}],d={toc:l};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Les configurations LDAP sont sp\xe9cifiques \xe0 chaque organisation, car les utilisateurs LDAP seront synchronis\xe9s avec elles."),(0,i.kt)("p",null,'Pour modifier la configuration, vous devez utiliser un utilisateur admin global. Entrez les informations suivantes pour la synchronisation des utilisateurs LDAP sur la page "organisation". ',(0,i.kt)("img",{alt:"ldap_table",src:n(36952).Z,width:"1840",height:"237"})),(0,i.kt)("h2",{id:"configuration-de-la-connexion-au-serveur-ldap"},"Configuration de la connexion au serveur LDAP"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ldap_edit",src:n(80201).Z,width:"1243",height:"865"})),(0,i.kt)("h3",{id:"nom-du-serveur"},"Nom du serveur"),(0,i.kt)("p",null,"Un nom convivial que les gestionnaires peuvent utiliser pour identifier diff\xe9rents serveurs."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Example LDAP Server"))),(0,i.kt)("h3",{id:"h\xf4te-du-serveur"},"H\xf4te du serveur"),(0,i.kt)("p",null,"L'h\xf4te ou l'adresse IP du serveur LDAP."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"example.com"))),(0,i.kt)("h3",{id:"port-du-serveur"},"Port du serveur"),(0,i.kt)("p",null,"Le num\xe9ro de port du serveur LDAP. Seules les valeurs num\xe9riques sont autoris\xe9es."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"389"))),(0,i.kt)("h3",{id:"base-dn"},"Base DN"),(0,i.kt)("p",null,"Casdoor utilise par d\xe9faut le mode de recherche Sub lors de la recherche dans LDAP. La Base DN est le nom distinctif de base utilis\xe9 pour la recherche. Casdoor retournera tous les utilisateurs sous la Base DN sp\xe9cifi\xe9e."),(0,i.kt)("p",null,"Le compte admin configur\xe9 dans Casdoor devrait avoir au moins des permissions en lecture seule \xe0 la Base DN."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"ou=Example,dc=example,dc=com"))),(0,i.kt)("h3",{id:"filtre-de-recherche"},"Filtre de recherche"),(0,i.kt)("p",null,"Casdoor utilise un filtre de recherche pour interroger les utilisateurs LDAP."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"(objectClass=posixAccount)"))),(0,i.kt)("h3",{id:"champs-de-filtre"},"Champs de filtre"),(0,i.kt)("p",null,"Les champs de filtre sont les identifiants de l'utilisateur dans le serveur LDAP. Lors de la connexion \xe0 Casdoor en tant qu'utilisateur LDAP, le nom d'utilisateur de connexion saisi est consid\xe9r\xe9 comme le ",(0,i.kt)("inlineCode",{parentName:"p"},"uid")," de l'utilisateur LDAP. Vous pouvez \xe9galement configurer d'autres champs, tels que ",(0,i.kt)("inlineCode",{parentName:"p"},"mail")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"mobile"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LDAP_field",src:n(95447).Z,width:"2100",height:"1080"})),(0,i.kt)("h3",{id:"admin"},"Admin"),(0,i.kt)("p",null,"Un compte qui peut se connecter au serveur LDAP sp\xe9cifi\xe9."),(0,i.kt)("p",null,"La m\xe9thode de connexion (DN ou ID) d\xe9pend des param\xe8tres du serveur LDAP auquel vous souhaitez vous connecter."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"cn=manager,dc=example,dc=com"))),(0,i.kt)("h3",{id:"mot-de-passe-admin"},"Mot de passe Admin"),(0,i.kt)("p",null,"Le mot de passe pour le compte Admin du serveur LDAP."),(0,i.kt)("h3",{id:"synchronisation-automatique"},"Synchronisation automatique"),(0,i.kt)("p",null,"R\xe9glez sur ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," pour d\xe9sactiver la synchronisation automatique. Toute autre valeur signifie ",(0,i.kt)("strong",{parentName:"p"},"Synchroniser toutes les quelques minutes"),"."),(0,i.kt)("h2",{id:"synchronisation-des-utilisateurs"},"Synchronisation des utilisateurs"),(0,i.kt)("p",null,"La table de synchronisation affiche tous les utilisateurs obtenus du serveur LDAP dans le ",(0,i.kt)("inlineCode",{parentName:"p"},"ou")," sp\xe9cifique. Si les utilisateurs ont d\xe9j\xe0 \xe9t\xe9 synchronis\xe9s, la case \xe0 cocher sera d\xe9sactiv\xe9e. Vous pouvez s\xe9lectionner les utilisateurs en cochant la case, puis synchroniser les utilisateurs s\xe9lectionn\xe9s \xe0 partir du serveur LDAP. ",(0,i.kt)("img",{alt:"ldap_sync",src:n(36784).Z,width:"1783",height:"727"})),(0,i.kt)("h2",{id:"default-group"},"Default group"),(0,i.kt)("p",null,"Group to which users belong after synchronization."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Si le ",(0,i.kt)("inlineCode",{parentName:"p"},"uid")," d'un utilisateur dans le serveur LDAP est le m\xeame que le ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," d'un utilisateur existant dans l'organisation Casdoor, Casdoor cr\xe9era un nouvel utilisateur avec un ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," qui inclut le ",(0,i.kt)("inlineCode",{parentName:"p"},"uid")," et une cha\xeene al\xe9atoire. Cependant, cet utilisateur pourrait ne pas \xeatre capable de se connecter car le nom du nouvel utilisateur synchronis\xe9 n'existe pas dans le serveur LDAP. Par cons\xe9quent, il est recommand\xe9 d'\xe9viter cette situation.")))}c.isMDXComponent=!0},80201:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ldap_edit-9ac932be030d2073a61b7db6e10a4b25.png"},95447:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ldap_field-8aa1db64d07df1ebff4671a15b4fc6bf.gif"},36784:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ldap_sync-1e63b8aedf505ce5a3cbb2b0e24f8c4f.png"},36952:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ldap_table-1e60fcbbf9f6a9709a60aebaa8876fa6.png"}}]);