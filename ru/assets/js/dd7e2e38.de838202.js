"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=i(n),b=o,d=h["".concat(c,".").concat(b)]||h[b]||s[b]||a;return n?r.createElement(d,u(u({ref:t},p),{},{components:n})):r.createElement(d,u({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var i=2;i<a;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={title:"WebAuthn",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 WebAuthn \u0432 Casdoor",keywords:["webauthn"],authors:["ComradeProgrammer"]},u=void 0,l={unversionedId:"how-to-connect/webauthn",id:"how-to-connect/webauthn",title:"WebAuthn",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 WebAuthn \u0432 Casdoor",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/how-to-connect/webauthn.md",sourceDirName:"how-to-connect",slug:"/how-to-connect/webauthn",permalink:"/ru/docs/how-to-connect/webauthn",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/how-to-connect/webauthn.md",tags:[],version:"current",frontMatter:{title:"WebAuthn",description:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 WebAuthn \u0432 Casdoor",keywords:["webauthn"],authors:["ComradeProgrammer"]},sidebar:"tutorialSidebar",previous:{title:"Face ID",permalink:"/ru/docs/how-to-connect/face-id"},next:{title:"Casdoor Authenticator App",permalink:"/ru/docs/how-to-connect/casdoor-authenticator-app"}},c={},i=[{value:"\u041e\u0431\u0437\u043e\u0440",id:"\u043e\u0431\u0437\u043e\u0440",level:2},{value:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 WebAuthn?",id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-webauthn",level:3},{value:"\u041a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c WebAuthn \u0432 Casdoor?",id:"\u043a\u0430\u043a-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-webauthn-\u0432-casdoor",level:3},{value:"\u0428\u0430\u0433 0: \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e WebAuthn",id:"\u0448\u0430\u0433-0-\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-\u0438-\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e-webauthn",level:4},{value:"\u0428\u0430\u0433 1: \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 &quot;\u041c\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442&quot;",id:"\u0448\u0430\u0433-1-\u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435-\u043d\u0430-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443-\u043c\u043e\u0439-\u0430\u043a\u043a\u0430\u0443\u043d\u0442",level:4},{value:"\u0428\u0430\u0433 2: \u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f WebAuthn",id:"\u0448\u0430\u0433-2-\u0432\u043e\u0439\u0434\u0438\u0442\u0435-\u0432-\u0441\u0438\u0441\u0442\u0435\u043c\u0443-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-webauthn",level:4}],p={toc:i};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u043e\u0431\u0437\u043e\u0440"},"\u041e\u0431\u0437\u043e\u0440"),(0,o.kt)("p",null,"\u041c\u044b \u0440\u0430\u0434\u044b \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c Casdoor, \u0447\u0442\u043e \u0442\u0435\u043f\u0435\u0440\u044c Casdoor \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c WebAuthn. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0432\u043e\u0438 \u0431\u0438\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u043e\u0442\u043f\u0435\u0447\u0430\u0442\u043a\u0438 \u043f\u0430\u043b\u044c\u0446\u0435\u0432 \u0438\u043b\u0438 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u043b\u0438\u0446\u0430, \u0438\u043b\u0438 \u0434\u0430\u0436\u0435 U-\u0434\u0438\u0441\u043a\u0438, \u043f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438, \u0447\u0442\u043e \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u044d\u0442\u0438 \u043a\u0440\u0443\u0442\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 WebAuthn."),(0,o.kt)("h3",{id:"\u0447\u0442\u043e-\u0442\u0430\u043a\u043e\u0435-webauthn"},"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 WebAuthn?"),(0,o.kt)("p",null,"WebAuthn - \u044d\u0442\u043e API \u0432\u0435\u0431-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438, \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u0430\u044f W3C \u0438 FIDO \u0432 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0441 Google, Mozilla, Microsoft, Yubico \u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438. \u042d\u0442\u043e\u0442 API \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0430\u0440\u043e\u043b\u044f. \u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u043c\u0438 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430\u043c\u0438, \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c\u0438 \u0432 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a Windows Hello \u0438\u043b\u0438 Touch ID \u043e\u0442 Apple."),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0449\u0435 \u0433\u043e\u0432\u043e\u0440\u044f, WebAuthn \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0430\u0440\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u043b\u044e\u0447-\u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u043b\u044e\u0447 \u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443. \u041a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0445\u043e\u0447\u0435\u0442 \u0432\u043e\u0439\u0442\u0438 \u043d\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u0432\u0435\u0431 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0438 \u043f\u0440\u043e\u0441\u0438\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0441\u0432\u043e\u0438\u043c \u0437\u0430\u043a\u0440\u044b\u0442\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u043e. \u041f\u043e\u043b\u0443\u0447\u0438\u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u043b\u044e\u0447 \u0434\u043b\u044f \u0435\u0433\u043e \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438. \u0415\u0441\u043b\u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u0440\u0430\u043d\u0435\u0435 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u043a\u043e\u043d\u043d\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0432\u0445\u043e\u0434\u0443 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u041a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 \u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0442\u0430\u043a\u043e\u0439 \u043a\u0430\u043a \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0442\u043e\u0440\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0443\u0447\u0435\u0442\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 WebAuthn, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043e\u043c."),(0,o.kt)("p",null,"\u041f\u0430\u0440\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u043b\u044e\u0447-\u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u043b\u044e\u0447 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u0430 \u0441 \u0442\u0440\u0435\u043c\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438: \u0438\u043c\u0435\u043d\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 URL-\u0430\u0434\u0440\u0435\u0441\u043e\u043c \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430. \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f (\u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 URL-\u0430\u0434\u0440\u0435\u0441 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430) \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u0430, \u043f\u0430\u0440\u0430 \u043a\u043b\u044e\u0447\u0435\u0439 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u043e\u0439, \u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 WebAuthn \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u044c ",(0,o.kt)("a",{parentName:"p",href:"https://webauthn.guide/"},"https://webauthn.guide/"),"."),(0,o.kt)("h3",{id:"\u043a\u0430\u043a-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-webauthn-\u0432-casdoor"},"\u041a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c WebAuthn \u0432 Casdoor?"),(0,o.kt)("p",null,"\u041d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0432\u0445\u043e\u0434\u0430 \u0432\u044b, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0443\u0436\u0435 \u0437\u0430\u043c\u0435\u0442\u0438\u043b\u0438 \u043e\u043f\u0446\u0438\u044e \u0432\u0445\u043e\u0434\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c WebAuthn. \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435\u0442 \u0443\u0447\u0435\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 WebAuthn (\u0447\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0440\u0430\u0432\u043d\u0438\u0442\u044c \u0441 \u043f\u0430\u0440\u043e\u043b\u0435\u043c WebAuth), \u044d\u0442\u043e \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e\u043a\u0430\u0436\u0435\u0442 \u0432\u0430\u043c, \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u0430 \u0437\u0430\u0442\u0435\u043c \u0432\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0438\u0445."),(0,o.kt)("h4",{id:"\u0448\u0430\u0433-0-\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-\u0438-\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e-webauthn"},"\u0428\u0430\u0433 0: \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e WebAuthn"),(0,o.kt)("p",null,"\u0412 \u0444\u0430\u0439\u043b\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf")," \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'origin = "http://localhost:8000"\n')),(0,o.kt)("p",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0442\u043e\u0447\u043d\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 URL \u0432\u0430\u0448\u0435\u0433\u043e \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435: WebAuthn \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f HTTPS, \u0435\u0441\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 localhost.")),(0,o.kt)("p",null,'\u0417\u0430\u0442\u0435\u043c \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u043a\u0430\u043a \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u0438 \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c "Enable WebAuthn signin". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u044d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0430.'),(0,o.kt)("h4",{id:"\u0448\u0430\u0433-1-\u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435-\u043d\u0430-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443-\u043c\u043e\u0439-\u0430\u043a\u043a\u0430\u0443\u043d\u0442"},'\u0428\u0430\u0433 1: \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "\u041c\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"'),(0,o.kt)("p",null,'\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430. \u041d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 WebAuthn" \u0438 \u0441\u043f\u0438\u0441\u043e\u043a, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0449\u0438\u0439 \u0432\u0441\u0435 \u0443\u0447\u0435\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 WebAuthn, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"WebAuthn1",src:n(12129).Z,width:"3258",height:"1345"})),(0,o.kt)("p",null,'\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0438 \u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u0432\u0430\u0448\u0435\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0443\u0447\u0435\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 Casdoor. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043b\u044e\u0431\u044b\u0435 \u0443\u0447\u0435\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043d\u043e\u043f\u043a\u0443 "\u0443\u0434\u0430\u043b\u0438\u0442\u044c" \u0432 \u0441\u043f\u0438\u0441\u043a\u0435.'),(0,o.kt)("h4",{id:"\u0448\u0430\u0433-2-\u0432\u043e\u0439\u0434\u0438\u0442\u0435-\u0432-\u0441\u0438\u0441\u0442\u0435\u043c\u0443-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-webauthn"},"\u0428\u0430\u0433 2: \u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f WebAuthn"),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c \u044d\u0442\u043e\u0433\u043e \u0448\u0430\u0433\u0430 \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 Casdoor."),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0432\u0445\u043e\u0434\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0442\u043e\u0434 \u0432\u0445\u043e\u0434\u0430 WebAuthn, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0432\u0445\u043e\u0434\u0430. \u0421\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u0432\u0430\u0448\u0435\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430."),(0,o.kt)("p",null,"(\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043e\u0442\u043f\u0435\u0447\u0430\u0442\u043e\u043a \u043f\u0430\u043b\u044c\u0446\u0430 \u0438 Windows Hello, \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0447\u0442\u043e-\u0442\u043e \u0432\u0440\u043e\u0434\u0435 \u044d\u0442\u043e\u0433\u043e)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"WebAuthn2",src:n(14608).Z,width:"2385",height:"1370"})),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0439\u0434\u0435\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443."))}s.isMDXComponent=!0},14608:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/login_webauthn-2c808d16236d35066e13262bee117858.png"},12129:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/webauthn-732ec1106885a458043ebfcf66f7e73e.png"}}]);