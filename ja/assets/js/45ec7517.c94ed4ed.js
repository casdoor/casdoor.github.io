"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2067],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(f,i(i({ref:e},d),{},{components:r})):n.createElement(f,i({ref:e},d))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42667:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u30ab\u30b9\u30bf\u30e0HTTP",description:"Casdoor\u306e\u901a\u77e5\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u3057\u3066\u30ab\u30b9\u30bf\u30e0HTTP\u3092\u4f7f\u7528\u3059\u308b",keywords:["\u30ab\u30b9\u30bf\u30e0","\u901a\u77e5","\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc"],authors:["UsherFall"]},i=void 0,p={unversionedId:"provider/notification/customHttp",id:"provider/notification/customHttp",title:"\u30ab\u30b9\u30bf\u30e0HTTP",description:"Casdoor\u306e\u901a\u77e5\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u3057\u3066\u30ab\u30b9\u30bf\u30e0HTTP\u3092\u4f7f\u7528\u3059\u308b",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/provider/notification/customHttp.md",sourceDirName:"provider/notification",slug:"/provider/notification/customHttp",permalink:"/ja/docs/provider/notification/customHttp",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/provider/notification/customHttp.md",tags:[],version:"current",frontMatter:{title:"\u30ab\u30b9\u30bf\u30e0HTTP",description:"Casdoor\u306e\u901a\u77e5\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3068\u3057\u3066\u30ab\u30b9\u30bf\u30e0HTTP\u3092\u4f7f\u7528\u3059\u308b",keywords:["\u30ab\u30b9\u30bf\u30e0","\u901a\u77e5","\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc"],authors:["UsherFall"]},sidebar:"tutorialSidebar",previous:{title:"Telegram",permalink:"/ja/docs/provider/notification/telegram"},next:{title:"Slack",permalink:"/ja/docs/provider/notification/slack"}},l={},c=[{value:"Casdoor\u30ab\u30b9\u30bf\u30e0HTTP\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u8a2d\u5b9a",id:"casdoor\u30ab\u30b9\u30bf\u30e0http\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u8a2d\u5b9a",level:2}],d={toc:c};function s(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Casdoor\u306f\u30ab\u30b9\u30bf\u30e0HTTP\u901a\u77e5\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002 \u7279\u5b9a\u306eHTTP\u30a2\u30c9\u30ec\u30b9\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,o.kt)("h2",{id:"casdoor\u30ab\u30b9\u30bf\u30e0http\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u8a2d\u5b9a"},"Casdoor\u30ab\u30b9\u30bf\u30e0HTTP\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u8a2d\u5b9a"),(0,o.kt)("p",null,"3\u3064\u306e\u5fc5\u9808\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u3042\u308a\u307e\u3059: ",(0,o.kt)("inlineCode",{parentName:"p"},"Method"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Parameter name"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Content"),"\u3001\u305d\u3057\u3066",(0,o.kt)("inlineCode",{parentName:"p"},"Chat ID"),"\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8aac\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u30e1\u30bd\u30c3\u30c9"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"GET"),"\u307e\u305f\u306f",(0,o.kt)("inlineCode",{parentName:"td"},"POST"),"\u30e1\u30bd\u30c3\u30c9\u3092\u9078\u629e\u3057\u307e\u3059\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u30d1\u30e9\u30e1\u30fc\u30bf\u540d"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"method"),"\u306b\u5fdc\u3058\u3066\u3001URL\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u540d\u307e\u305f\u306f\u30dc\u30c7\u30a3\u30d1\u30e9\u30e1\u30fc\u30bf\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9001\u4fe1\u3057\u305f\u3044\u30e1\u30c3\u30bb\u30fc\u30b8\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,o.kt)("td",{parentName:"tr",align:null},"\u3042\u306a\u305f\u306eHTTP\u30a2\u30c9\u30ec\u30b9")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"custom_http_provider",src:r(3240).Z,width:"1820",height:"1044"})),(0,o.kt)("p",null,"\u79c1\u306e\u4f8b\u3067\u306f\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Send Notification Message"),"\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"custom_http_request",src:r(67130).Z,width:"1232",height:"250"})),(0,o.kt)("video",{src:"/video/provider/notification/use_custom_http_as_notification_provider.mp4",controls:"controls",width:"100%"}))}s.isMDXComponent=!0},3240:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/custom_http_provider-2b4ee8007a085b75211edde3b156b19e.png"},67130:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/custom_http_request-333547a4c9bb19498bb61faffaafdbc1.png"}}]);