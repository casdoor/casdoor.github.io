"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[9236],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>u});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?t.createElement(v,o(o({ref:n},c),{},{components:a})):t.createElement(v,o({ref:n},c))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89024:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const i={title:"Verwendung von Casdoor als CAS-Server",description:"Wie man Casdoor als CAS-Server verwendet",keywords:["CAS","server"],authors:["ComradeProgrammer"]},o=void 0,l={unversionedId:"how-to-connect/cas",id:"how-to-connect/cas",title:"Verwendung von Casdoor als CAS-Server",description:"Wie man Casdoor als CAS-Server verwendet",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/how-to-connect/cas.md",sourceDirName:"how-to-connect",slug:"/how-to-connect/cas",permalink:"/de/docs/how-to-connect/cas",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/cas.md",tags:[],version:"current",frontMatter:{title:"Verwendung von Casdoor als CAS-Server",description:"Wie man Casdoor als CAS-Server verwendet",keywords:["CAS","server"],authors:["ComradeProgrammer"]},sidebar:"tutorialSidebar",previous:{title:"OAuth 2.0",permalink:"/de/docs/how-to-connect/oauth"},next:{title:"SAML",permalink:"/de/docs/category/saml"}},s={},p=[{value:"Verwendung von Casdoor als CAS-Server",id:"verwendung-von-casdoor-als-cas-server",level:2},{value:"\xdcbersicht",id:"\xfcbersicht",level:3},{value:"Ein Beispiel",id:"ein-beispiel",level:3}],c={toc:p};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"verwendung-von-casdoor-als-cas-server"},"Verwendung von Casdoor als CAS-Server"),(0,r.kt)("p",null,"Casdoor kann jetzt als CAS-Server verwendet werden. Es unterst\xfctzt derzeit CAS 3.0."),(0,r.kt)("h3",{id:"\xfcbersicht"},"\xdcbersicht"),(0,r.kt)("p",null,"Das CAS-Endpunktprefix in Casdoor ist ",(0,r.kt)("inlineCode",{parentName:"p"},"<Casdoor-Endpunkt>/cas/<Organisationsname>/<Anwendungsname>"),". Hier ist ein Beispiel mit dem Endpunkt ",(0,r.kt)("inlineCode",{parentName:"p"},"https://door.casdoor.com")," f\xfcr eine Anwendung namens ",(0,r.kt)("inlineCode",{parentName:"p"},"cas-java-app")," unter der Organisation ",(0,r.kt)("inlineCode",{parentName:"p"},"casbin"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/login")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/login")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/logout")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/logout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/serviceValidate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/serviceValidate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/proxyValidate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/proxyValidate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/proxy")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/proxy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/validate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/validate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/p3/serviceValidate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/p3/serviceValidate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/p3/proxyValidate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/p3/proxyValidate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/samlValidate")," endpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://door.casdoor.com/cas/casbin/cas-java-app/samlValidate"))),(0,r.kt)("p",null,"For more information about CAS, its different versions, and parameters for these endpoints, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://apereo.github.io/cas/7.1.x/protocol/CAS-Protocol-Specification.html"},"CAS Protocol Specification"),"."),(0,r.kt)("h3",{id:"ein-beispiel"},"Ein Beispiel"),(0,r.kt)("p",null,"Hier ist ein offizielles Beispiel ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apereo/cas-sample-java-webapp"},"GitHub-Repository"),", das eine Web-App enth\xe4lt und den offiziellen CAS Java-Client ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apereo/java-cas-client"},"GitHub-Repository")," verwendet. Indem Sie dieses Beispiel durchgehen, k\xf6nnen Sie lernen, wie Sie sich \xfcber CAS mit Casdoor verbinden."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Hinweis: Derzeit unterst\xfctzt Casdoor nur alle drei Versionen von CAS: CAS 1.0, 2.0 und 3.0.")),(0,r.kt)("p",null,"Die CAS-Konfiguration befindet sich in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/webapp/WEB-INF/web.yml"),"."),(0,r.kt)("p",null,"Standardm\xe4\xdfig verwendet diese App CAS 3.0, was durch die folgenden Konfigurationen angegeben wird:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<filter-name>CAS Validation Filter</filter-name>\n<filter-class>org.jasig.cas.client.validation.Cas30ProxyReceivingTicketValidationFilter</filter-class>\n")),(0,r.kt)("p",null,"Wenn Sie diese Web-App mit CAS 2.0 sch\xfctzen m\xf6chten, \xe4ndern Sie den CAS-Validierungsfilter zu folgendem:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<filter-name>CAS Validation Filter</filter-name>\n<filter-class>org.jasig.cas.client.validation.Cas20ProxyReceivingTicketValidationFilter</filter-class>\n")),(0,r.kt)("p",null,"F\xfcr CAS 1.0 verwenden Sie folgendes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<filter-name>CAS Validation Filter</filter-name>\n<filter-class>org.jasig.cas.client.validation.Cas10TicketValidationFilter</filter-class>\n")),(0,r.kt)("p",null,"F\xfcr alle Instanzen des Parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"casServerUrlPrefix")," \xe4ndern Sie diese zu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<param-name>casServerUrlPrefix</param-name>\n<param-value>http://door.casdoor.com/cas/casbin/cas-java-app</param-value>\n")),(0,r.kt)("p",null,"F\xfcr alle Instanzen des Parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"casServerLoginUrl")," \xe4ndern Sie diese zu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<param-name>casServerLoginUrl</param-name>\n<param-value>http://door.casdoor.com/cas/casbin/cas-java-app/login</param-value>\n")),(0,r.kt)("p",null,"Wenn Sie weitere Konfigurationen anpassen m\xfcssen, sehen Sie im ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apereo/java-cas-client"},"Java CAS-Client GitHub-Repository")," f\xfcr detaillierte Informationen."))}d.isMDXComponent=!0}}]);