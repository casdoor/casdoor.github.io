"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",description:"\u0645\u0642\u062f\u0645\u0629 \u0625\u0644\u0649 \u0627\u0644\u0631\u0645\u0648\u0632 \u0641\u064a \u0643\u0627\u0633\u062f\u0648\u0631",keywords:["token","OAuth"],authors:["sh1luo"]},i=void 0,l={unversionedId:"token/overview",id:"token/overview",title:"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",description:"\u0645\u0642\u062f\u0645\u0629 \u0625\u0644\u0649 \u0627\u0644\u0631\u0645\u0648\u0632 \u0641\u064a \u0643\u0627\u0633\u062f\u0648\u0631",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/token/overview.md",sourceDirName:"token",slug:"/token/overview",permalink:"/ar/docs/token/overview",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/token/overview.md",tags:[],version:"current",frontMatter:{title:"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",description:"\u0645\u0642\u062f\u0645\u0629 \u0625\u0644\u0649 \u0627\u0644\u0631\u0645\u0648\u0632 \u0641\u064a \u0643\u0627\u0633\u062f\u0648\u0631",keywords:["token","OAuth"],authors:["sh1luo"]},sidebar:"tutorialSidebar",previous:{title:"Tokens",permalink:"/ar/docs/category/tokens"},next:{title:"Webhooks",permalink:"/ar/docs/category/webhooks"}},p={},u=[],s={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0643\u0627\u0633\u062f\u0648\u0631 \u0645\u0628\u0646\u064a \u0639\u0644\u0649 OAuth \u0648\u064a\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0631\u0645\u0648\u0632 \u0643\u0631\u0645\u0648\u0632 OAuth \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646."),(0,a.kt)("p",null,"\u0641\u064a\u0645\u0627 \u064a\u0644\u064a \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0631\u0645\u0632 \u0641\u064a \u0643\u0627\u0633\u062f\u0648\u0631:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Owner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CreatedTime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Organization")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"User")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AccessToken")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExpireIn")," (\u0633\u064a\u0646\u062a\u0647\u064a \u0627\u0644\u0631\u0645\u0632 \u0628\u0639\u062f \u0633\u0627\u0639\u0627\u062a)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Scope")," (\u0646\u0637\u0627\u0642 \u0627\u0644\u062a\u0641\u0648\u064a\u0636)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TokenType")," (\u0645\u062b\u0644\u0627\u064b\u060c \u0646\u0648\u0639 ",(0,a.kt)("inlineCode",{parentName:"li"},"Bearer"),")")),(0,a.kt)("p",null,"\u0628\u0639\u062f \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u060c \u0647\u0646\u0627\u0643 \u062b\u0644\u0627\u062b \u062e\u064a\u0627\u0631\u0627\u062a \u0644\u062a\u0648\u0644\u064a\u062f \u0631\u0645\u0632 JWT:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWT-Empty")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWT-Custom")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWT-Standard"))),(0,a.kt)("p",null,"\u0627\u0644\u062e\u064a\u0627\u0631\u0627\u062a \u0643\u0627\u0644\u062a\u0627\u0644\u064a: JWT \u0633\u064a\u0648\u0644\u062f \u0631\u0645\u0632 \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u062c\u0645\u064a\u0639 \u062d\u0642\u0648\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u060c JWT-Empty \u0633\u064a\u0648\u0644\u062f \u0631\u0645\u0632 \u0628\u062c\u0645\u064a\u0639 \u0627\u0644\u0642\u064a\u0645 \u063a\u064a\u0631 \u0627\u0644\u0641\u0627\u0631\u063a\u0629 \u0644\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u060c \u0648 JWT-Custom \u0633\u064a\u0648\u0644\u062f \u0631\u0645\u0632 \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u062d\u0642\u0648\u0644 \u0631\u0645\u0632 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u062e\u0635\u0635\u0629 (\u064a\u0645\u0643\u0646\u0643 \u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0633\u0645\u0627\u062a \u0641\u064a \u062d\u0642\u0648\u0644 \u0627\u0644\u0631\u0645\u0632). JWT-Standard will generate a token with some standard OIDC token fields include email, phone, gender and Address (Address value in other format is not standard)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"JWT-Custom",src:n(36199).Z,width:"3646",height:"912"})))}c.isMDXComponent=!0},36199:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/JWT-Custom-87a56a11ee5f6d9ade1af88a7eda22ba.png"}}]);