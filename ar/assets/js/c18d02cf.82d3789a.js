"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[1991],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=m(a),u=r,N=s["".concat(o,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(N,d(d({ref:e},p),{},{components:a})):n.createElement(N,d({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,d=new Array(l);d[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,d[1]=i;for(var m=2;m<l;m++)d[m]=a[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},28209:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"(\u0627\u062e\u062a\u064a\u0627\u0631\u064a) \u062c\u0631\u0628 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 K8s Helm",description:"\u062a\u0639\u0644\u0645 \u0643\u064a\u0641\u064a\u0629 \u0646\u0634\u0631 Casdoor \u0639\u0644\u0649 Kubernetes \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Helm",keywords:["Casdoor","Helm","Kubernetes","K8s"],authors:["nomeguy"]},d=void 0,i={unversionedId:"basic/try-with-helm",id:"basic/try-with-helm",title:"(\u0627\u062e\u062a\u064a\u0627\u0631\u064a) \u062c\u0631\u0628 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 K8s Helm",description:"\u062a\u0639\u0644\u0645 \u0643\u064a\u0641\u064a\u0629 \u0646\u0634\u0631 Casdoor \u0639\u0644\u0649 Kubernetes \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Helm",source:"@site/i18n/ar/docusaurus-plugin-content-docs/current/basic/try-with-helm.md",sourceDirName:"basic",slug:"/basic/try-with-helm",permalink:"/ar/docs/basic/try-with-helm",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/basic/try-with-helm.md",tags:[],version:"current",frontMatter:{title:"(\u0627\u062e\u062a\u064a\u0627\u0631\u064a) \u062c\u0631\u0628 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 K8s Helm",description:"\u062a\u0639\u0644\u0645 \u0643\u064a\u0641\u064a\u0629 \u0646\u0634\u0631 Casdoor \u0639\u0644\u0649 Kubernetes \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Helm",keywords:["Casdoor","Helm","Kubernetes","K8s"],authors:["nomeguy"]},sidebar:"tutorialSidebar",previous:{title:"(\u0627\u062e\u062a\u064a\u0627\u0631\u064a) \u062c\u0631\u0628 \u0645\u0639 Docker",permalink:"/ar/docs/basic/try-with-docker"},next:{title:"\u0648\u0627\u062c\u0647\u0629 \u0628\u0631\u0645\u062c\u0629 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0640 Casdoor",permalink:"/ar/docs/basic/public-api"}},o={},m=[{value:"\u0645\u0642\u062f\u0645\u0629",id:"\u0645\u0642\u062f\u0645\u0629",level:2},{value:"\u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629",id:"\u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a-\u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629",level:2},{value:"\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u062a\u062b\u0628\u064a\u062a",id:"\u062e\u0637\u0648\u0627\u062a-\u0627\u0644\u062a\u062b\u0628\u064a\u062a",level:2},{value:"\u0627\u0644\u062e\u0637\u0648\u0629 1: \u062a\u062b\u0628\u064a\u062a \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a Casdoor",id:"\u0627\u0644\u062e\u0637\u0648\u0629-1-\u062a\u062b\u0628\u064a\u062a-\u0627\u0644\u0631\u0633\u0645-\u0627\u0644\u0628\u064a\u0627\u0646\u064a-casdoor",level:3},{value:"\u0627\u0644\u062e\u0637\u0648\u0629 2: \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 Casdoor",id:"\u0627\u0644\u062e\u0637\u0648\u0629-2-\u0627\u0644\u0648\u0635\u0648\u0644-\u0625\u0644\u0649-casdoor",level:3},{value:"\u0627\u0644\u062a\u062e\u0635\u064a\u0635 \u0648\u0627\u0644\u062a\u0643\u0648\u064a\u0646",id:"\u0627\u0644\u062a\u062e\u0635\u064a\u0635-\u0648\u0627\u0644\u062a\u0643\u0648\u064a\u0646",level:3},{value:"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0646\u0634\u0631",id:"\u0625\u062f\u0627\u0631\u0629-\u0627\u0644\u0646\u0634\u0631",level:3},{value:"\u062e\u0627\u062a\u0645\u0629",id:"\u062e\u0627\u062a\u0645\u0629",level:2}],p={toc:m};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0645\u0642\u062f\u0645\u0629"},"\u0645\u0642\u062f\u0645\u0629"),(0,r.kt)("p",null,"\u0627\u0644\u0622\u0646 \u0646\u0639\u0631\u0636 \u0643\u064a\u0641\u064a\u0629 \u0646\u0634\u0631 Casdoor \u0639\u0644\u0649 Kubernetes \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Helm \u0644\u0625\u062f\u0627\u0631\u0629 \u0633\u0647\u0644\u0629 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0648\u0633\u0639."),(0,r.kt)("h2",{id:"\u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a-\u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629"},"\u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u062a\u0634\u063a\u064a\u0644 \u062a\u062c\u0645\u0639 Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"Helm v3 \u0645\u062b\u0628\u062a")),(0,r.kt)("h2",{id:"\u062e\u0637\u0648\u0627\u062a-\u0627\u0644\u062a\u062b\u0628\u064a\u062a"},"\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u062a\u062b\u0628\u064a\u062a"),(0,r.kt)("h3",{id:"\u0627\u0644\u062e\u0637\u0648\u0629-1-\u062a\u062b\u0628\u064a\u062a-\u0627\u0644\u0631\u0633\u0645-\u0627\u0644\u0628\u064a\u0627\u0646\u064a-casdoor"},"\u0627\u0644\u062e\u0637\u0648\u0629 1: \u062a\u062b\u0628\u064a\u062a \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a Casdoor"),(0,r.kt)("p",null,"Install the Casdoor ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/casbin/casdoor-helm-charts/tags"},"chart"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install casdoor oci://registry-1.docker.io/casbin/casdoor-helm-charts --version v1.702.0\n")),(0,r.kt)("h3",{id:"\u0627\u0644\u062e\u0637\u0648\u0629-2-\u0627\u0644\u0648\u0635\u0648\u0644-\u0625\u0644\u0649-casdoor"},"\u0627\u0644\u062e\u0637\u0648\u0629 2: \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 Casdoor"),(0,r.kt)("p",null,"\u0628\u0645\u062c\u0631\u062f \u0627\u0644\u062a\u062b\u0628\u064a\u062a\u060c \u064a\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 Casdoor \u0639\u0646\u062f \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0642\u062f\u0645 \u0645\u0646 \u0642\u0628\u0644 \u062a\u062c\u0645\u0639 Kubernetes \u0627\u0644\u062e\u0627\u0635 \u0628\u0643."),(0,r.kt)("h3",{id:"\u0627\u0644\u062a\u062e\u0635\u064a\u0635-\u0648\u0627\u0644\u062a\u0643\u0648\u064a\u0646"},"\u0627\u0644\u062a\u062e\u0635\u064a\u0635 \u0648\u0627\u0644\u062a\u0643\u0648\u064a\u0646"),(0,r.kt)("p",null,"\u0642\u0645 \u0628\u062a\u062e\u0635\u064a\u0635 \u062a\u062b\u0628\u064a\u062a Casdoor \u0639\u0646 \u0637\u0631\u064a\u0642 \u062a\u0639\u062f\u064a\u0644 \u0642\u064a\u0645 \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a Helm. \u0644\u0644\u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u0641\u0635\u064a\u0644\u064a\u0629\u060c \u0631\u0627\u062c\u0639 \u0645\u0644\u0641 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-helm/blob/master/charts/casdoor/values.yaml"},"values.yaml")," \u0641\u064a \u0627\u0644\u0631\u0633\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a. \u064a\u0645\u0643\u0646 \u062a\u0643\u0648\u064a\u0646 \u0627\u0644\u0645\u0639\u0644\u0645\u0627\u062a \u0627\u0644\u062a\u0627\u0644\u064a\u0629."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0645\u0639\u0644\u0645\u0629"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0648\u0635\u0641"),(0,r.kt)("th",{parentName:"tr",align:null},"\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0629"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replicaCount")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0639\u062f\u062f \u0646\u0633\u062e \u062a\u0637\u0628\u064a\u0642 Casdoor \u0644\u0644\u062a\u0634\u063a\u064a\u0644."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.repository")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0645\u0633\u062a\u0648\u062f\u0639 \u0635\u0648\u0631\u0629 Docker \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0640 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"casbin"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.name")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0633\u0645 \u0635\u0648\u0631\u0629 Docker \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0640 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"casdoor"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.pullPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u0633\u062d\u0628 \u0644\u0635\u0648\u0631\u0629 Docker \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0640 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IfNotPresent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0639\u0644\u0627\u0645\u0629 \u0644\u0635\u0648\u0631\u0629 Docker \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0640 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u062a\u0643\u0648\u064a\u0646 \u0644\u062a\u0637\u0628\u064a\u0642 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0646\u0638\u0631 \u062d\u0642\u0644 ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor-helm/blob/master/charts/casdoor/values.yaml"},"config"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.driver")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0628\u0631\u0646\u0627\u0645\u062c \u062a\u0634\u063a\u064a\u0644 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 (\u064a\u062f\u0639\u0645 mysql, postgres, cockroachdb, sqlite3)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sqlite3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.user")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0633\u0645 \u0645\u0633\u062a\u062e\u062f\u0645 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.password")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.host")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0645\u0636\u064a\u0641 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0645\u0646\u0641\u0630 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.databaseName")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0633\u0645 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0628\u0648\u0627\u0633\u0637\u0629 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"casdoor"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.sslMode")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0648\u0636\u0639 SSL \u0644\u0627\u062a\u0635\u0627\u0644 \u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"service.type")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0646\u0648\u0639 \u062e\u062f\u0645\u0629 Kubernetes \u0644\u0625\u0646\u0634\u0627\u0621 Casdoor (ClusterIP, NodePort, LoadBalancer, \u0625\u0644\u062e)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ClusterIP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"service.port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0631\u0642\u0645 \u0627\u0644\u0645\u0646\u0641\u0630 \u0644\u062e\u062f\u0645\u0629 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0645\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0633\u064a\u062a\u0645 \u062a\u0645\u0643\u064a\u0646 Ingress \u0644\u0640 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress.annotations")),(0,r.kt)("td",{parentName:"tr",align:null},"\u062a\u0639\u0644\u064a\u0642\u0627\u062a \u0644\u0645\u0648\u0631\u062f Ingress."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress.hosts")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0646\u0637\u0627\u0642\u0627\u062a \u0644\u0645\u0648\u0631\u062f Ingress."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0648\u0627\u0644\u062d\u062f\u0648\u062f \u0644\u062d\u0627\u0648\u064a\u0629 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"autoscaling.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0645\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0633\u064a\u062a\u0645 \u062a\u0645\u0643\u064a\u0646 Horizontal Pod Autoscaler \u0644\u0640 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"autoscaling.minReplicas")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 \u0644\u0639\u062f\u062f \u0627\u0644\u0646\u0633\u062e \u0644\u0640 Horizontal Pod Autoscaler."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"autoscaling.maxReplicas")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0639\u062f\u062f \u0627\u0644\u0646\u0633\u062e \u0644\u0640 Horizontal Pod Autoscaler."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"autoscaling.targetCPUUtilizationPercentage")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0646\u0633\u0628\u0629 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0648\u062d\u062f\u0629 \u0627\u0644\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0645\u0631\u0643\u0632\u064a\u0629 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641\u0629 \u0644\u0640 Horizontal Pod Autoscaler."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"80"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nodeSelector")),(0,r.kt)("td",{parentName:"tr",align:null},"\u062a\u0633\u0645\u064a\u0627\u062a \u0627\u0644\u0639\u0642\u062f \u0644\u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u062d\u0627\u0648\u064a\u0627\u062a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tolerations")),(0,r.kt)("td",{parentName:"tr",align:null},"\u062a\u0633\u0645\u064a\u0627\u062a \u0627\u0644\u062a\u0633\u0627\u0645\u062d \u0644\u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u062d\u0627\u0648\u064a\u0629."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"affinity")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u062a\u0642\u0627\u0631\u0628 \u0644\u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u062d\u0627\u0648\u064a\u0629."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraContainersEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0645\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0633\u064a\u062a\u0645 \u062a\u0645\u0643\u064a\u0646 \u062d\u0627\u0648\u064a\u0627\u062a \u062c\u0627\u0646\u0628\u064a\u0629 \u0625\u0636\u0627\u0641\u064a\u0629."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraContainers")),(0,r.kt)("td",{parentName:"tr",align:null},"\u062d\u0627\u0648\u064a\u0627\u062a \u062c\u0627\u0646\u0628\u064a\u0629 \u0625\u0636\u0627\u0641\u064a\u0629."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraVolumeMounts")),(0,r.kt)("td",{parentName:"tr",align:null},"\u062a\u0631\u0643\u064a\u0628\u0627\u062a \u062d\u062c\u0645 \u0625\u0636\u0627\u0641\u064a\u0629 \u0644\u062d\u0627\u0648\u064a\u0629 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraVolumes")),(0,r.kt)("td",{parentName:"tr",align:null},"\u0623\u062d\u062c\u0627\u0645 \u0625\u0636\u0627\u0641\u064a\u0629 \u0644\u062d\u0627\u0648\u064a\u0629 Casdoor."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"envFromSecret")),(0,r.kt)("td",{parentName:"tr",align:null},"\u062a\u0648\u0641\u064a\u0631 \u0645\u062a\u063a\u064a\u0631 \u0628\u064a\u0626\u0629 \u0645\u0646 \u0633\u0631\u064a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'[{name:"",secretName:"",key:""}]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"envFromConfigmap")),(0,r.kt)("td",{parentName:"tr",align:null},"\u062a\u0648\u0641\u064a\u0631 \u0645\u062a\u063a\u064a\u0631 \u0628\u064a\u0626\u0629 \u0645\u0646 \u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u062a\u0643\u0648\u064a\u0646."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'[{name:"",configmapName:"",key:""}]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"envFrom")),(0,r.kt)("td",{parentName:"tr",align:null},"\u062a\u0648\u0641\u064a\u0631 \u0645\u062a\u063a\u064a\u0631 \u0628\u064a\u0626\u0629 \u0645\u0646 \u0633\u0631\u064a \u0623\u0648 \u062e\u0631\u064a\u0637\u0629 \u0627\u0644\u062a\u0643\u0648\u064a\u0646 \u0628\u0627\u0644\u0643\u0627\u0645\u0644."),(0,r.kt)("td",{parentName:"tr",align:null},'`[{name:"",type:"configmap ',"\\")))),(0,r.kt)("h3",{id:"\u0625\u062f\u0627\u0631\u0629-\u0627\u0644\u0646\u0634\u0631"},"\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0646\u0634\u0631"),(0,r.kt)("p",null,"\u0644\u062a\u0631\u0642\u064a\u0629 \u0646\u0634\u0631 Casdoor \u0627\u0644\u062e\u0627\u0635 \u0628\u0643:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade casdoor casdoor/casdoor-helm-charts\n")),(0,r.kt)("p",null,"\u0644\u0625\u0644\u063a\u0627\u0621 \u062a\u062b\u0628\u064a\u062a Casdoor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm delete casdoor\n")),(0,r.kt)("p",null,"\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0625\u062f\u0627\u0631\u0629 \u0648\u0627\u0644\u062a\u062e\u0635\u064a\u0635\u060c \u0631\u0627\u062c\u0639 \u0648\u062b\u0627\u0626\u0642 Helm \u0648 Kubernetes."),(0,r.kt)("h2",{id:"\u062e\u0627\u062a\u0645\u0629"},"\u062e\u0627\u062a\u0645\u0629"),(0,r.kt)("p",null,"\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Helm \u0644\u0646\u0634\u0631 Casdoor \u0639\u0644\u0649 Kubernetes \u064a\u0628\u0633\u0637 \u0625\u062f\u0627\u0631\u0629 \u0648\u0642\u0627\u0628\u0644\u064a\u0629 \u062a\u0648\u0633\u0639 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643 \u0636\u0645\u0646 \u0628\u064a\u0626\u0629 Kubernetes \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643."))}k.isMDXComponent=!0}}]);