"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[8286],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",description:"\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19",keywords:["\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19","\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19"],authors:["leoil"]},i=void 0,l={unversionedId:"organization/passwordComplexity",id:"organization/passwordComplexity",title:"\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",description:"\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19",source:"@site/i18n/th/docusaurus-plugin-content-docs/current/organization/passwordComplexity.md",sourceDirName:"organization",slug:"/organization/passwordComplexity",permalink:"/th/docs/organization/passwordComplexity",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/organization/passwordComplexity.md",tags:[],version:"current",frontMatter:{title:"\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",description:"\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19",keywords:["\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19","\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19"],authors:["leoil"]},sidebar:"tutorialSidebar",previous:{title:"\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23",permalink:"/th/docs/organization/organization-tree"},next:{title:"Password Obfuscator",permalink:"/th/docs/organization/passwordObfuscator"}},p={},s=[{value:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a",id:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a",level:2},{value:"\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",id:"\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",level:2}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casdoor \u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e31\u0e1a\u0e41\u0e15\u0e48\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e41\u0e15\u0e48\u0e25\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23"),(0,a.kt)("h2",{id:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a"},"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a"),(0,a.kt)("p",null,"\u0e02\u0e13\u0e30\u0e19\u0e35\u0e49\u0e40\u0e23\u0e32\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e49\u0e32\u0e2d\u0e22\u0e48\u0e32\u0e07:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AtLeast6"),": \u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22\u0e2b\u0e01\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AtLeast8"),": \u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22\u0e41\u0e1b\u0e14\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Aa123"),": \u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e15\u0e31\u0e27\u0e43\u0e2b\u0e0d\u0e48 \u0e2b\u0e19\u0e36\u0e48\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e15\u0e31\u0e27\u0e40\u0e25\u0e47\u0e01 \u0e41\u0e25\u0e30\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e15\u0e31\u0e27\u0e40\u0e25\u0e02"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SpecialChar"),": \u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e1e\u0e34\u0e40\u0e28\u0e29"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NoRepeat"),": \u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e17\u0e35\u0e48\u0e0b\u0e49\u0e33\u0e01\u0e31\u0e19")),(0,a.kt)("p",null,"\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e25\u0e32\u0e22\u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e14\u0e49\u0e43\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e01\u0e49\u0e44\u0e02\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0e04\u0e25\u0e34\u0e01\u0e1b\u0e38\u0e48\u0e21 ",(0,a.kt)("strong",{parentName:"p"},"\u0e41\u0e01\u0e49\u0e44\u0e02")," \u0e1a\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u0e41\u0e01\u0e49\u0e44\u0e02 org",src:r(47215).Z,width:"1756",height:"432"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e19\u0e04\u0e2d\u0e25\u0e31\u0e21\u0e19\u0e4c ",(0,a.kt)("inlineCode",{parentName:"p"},"Password complexity options")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01",src:r(33838).Z,width:"2056",height:"1291"})))),(0,a.kt)("h2",{id:"\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"},"\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"),(0,a.kt)("p",null,"\u0e40\u0e23\u0e32\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e43\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e19\u0e35\u0e49:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0e2b\u0e19\u0e49\u0e32\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19",src:r(27259).Z,width:"1918",height:"1038"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0e2b\u0e19\u0e49\u0e32\u0e25\u0e37\u0e21\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e25\u0e37\u0e21\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19",src:r(39317).Z,width:"1918",height:"1038"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e01\u0e49\u0e44\u0e02\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e41\u0e01\u0e49\u0e44\u0e02\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49",src:r(90006).Z,width:"1918",height:"1038"})))))}d.isMDXComponent=!0},39317:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/forget_demo-89b5a94380b8792d2ce1b3b1e5325f76.gif"},47215:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/org_edit-3fb82cc71eb03925606c390831ed19a5.png"},33838:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/select_password_option-8ff3a33271c551184ca6aea97faed9b9.png"},27259:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sign_up_demo-73a9d16ec1ee65c0c509756ef4ad572e.gif"},90006:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/user_edit_demo-4bf610e7f7dcbd86bcba5be07c924851.gif"}}]);