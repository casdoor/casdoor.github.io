"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[9525],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=m(a),u=r,N=s["".concat(o,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(N,d(d({ref:e},p),{},{components:a})):n.createElement(N,d({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,d=new Array(l);d[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,d[1]=i;for(var m=2;m<l;m++)d[m]=a[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},28070:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"(\uc120\ud0dd \uc0ac\ud56d) K8s Helm\uc73c\ub85c \uc2dc\ub3c4\ud574 \ubcf4\uc138\uc694",description:"Helm\uc744 \uc0ac\uc6a9\ud558\uc5ec Kubernetes\uc5d0 Casdoor\ub97c \ubc30\ud3ec\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6cc\ubcf4\uc138\uc694",keywords:["Casdoor","Helm","Kubernetes","K8s"],authors:["nomeguy"]},d=void 0,i={unversionedId:"basic/try-with-helm",id:"basic/try-with-helm",title:"(\uc120\ud0dd \uc0ac\ud56d) K8s Helm\uc73c\ub85c \uc2dc\ub3c4\ud574 \ubcf4\uc138\uc694",description:"Helm\uc744 \uc0ac\uc6a9\ud558\uc5ec Kubernetes\uc5d0 Casdoor\ub97c \ubc30\ud3ec\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6cc\ubcf4\uc138\uc694",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic/try-with-helm.md",sourceDirName:"basic",slug:"/basic/try-with-helm",permalink:"/ko/docs/basic/try-with-helm",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/basic/try-with-helm.md",tags:[],version:"current",frontMatter:{title:"(\uc120\ud0dd \uc0ac\ud56d) K8s Helm\uc73c\ub85c \uc2dc\ub3c4\ud574 \ubcf4\uc138\uc694",description:"Helm\uc744 \uc0ac\uc6a9\ud558\uc5ec Kubernetes\uc5d0 Casdoor\ub97c \ubc30\ud3ec\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6cc\ubcf4\uc138\uc694",keywords:["Casdoor","Helm","Kubernetes","K8s"],authors:["nomeguy"]},sidebar:"tutorialSidebar",previous:{title:"(\uc120\ud0dd \uc0ac\ud56d) Docker\ub85c \uc2dc\ub3c4\ud574 \ubcf4\uc138\uc694",permalink:"/ko/docs/basic/try-with-docker"},next:{title:"Casdoor \uacf5\uac1c API",permalink:"/ko/docs/basic/public-api"}},o={},m=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\uc0ac\uc804 \uc694\uad6c \uc0ac\ud56d",id:"\uc0ac\uc804-\uc694\uad6c-\uc0ac\ud56d",level:2},{value:"\uc124\uce58 \ub2e8\uacc4",id:"\uc124\uce58-\ub2e8\uacc4",level:2},{value:"\ub2e8\uacc4 1: Casdoor \ucc28\ud2b8 \uc124\uce58",id:"\ub2e8\uacc4-1-casdoor-\ucc28\ud2b8-\uc124\uce58",level:3},{value:"\ub2e8\uacc4 2: Casdoor \uc811\uadfc",id:"\ub2e8\uacc4-2-casdoor-\uc811\uadfc",level:3},{value:"\uc0ac\uc6a9\uc790 \uc815\uc758 \ubc0f \uad6c\uc131",id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\ubc0f-\uad6c\uc131",level:3},{value:"\ubc30\ud3ec \uad00\ub9ac",id:"\ubc30\ud3ec-\uad00\ub9ac",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}],p={toc:m};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,r.kt)("p",null,"\uc774\uc81c Helm\uc744 \uc0ac\uc6a9\ud558\uc5ec Kubernetes\uc5d0 Casdoor\ub97c \ubc30\ud3ec\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc27d\uace0 \ud655\uc7a5 \uac00\ub2a5\ud55c \uad00\ub9ac\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc0ac\uc804-\uc694\uad6c-\uc0ac\ud56d"},"\uc0ac\uc804 \uc694\uad6c \uc0ac\ud56d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc2e4\ud589 \uc911\uc778 Kubernetes \ud074\ub7ec\uc2a4\ud130"),(0,r.kt)("li",{parentName:"ul"},"\uc124\uce58\ub41c Helm v3")),(0,r.kt)("h2",{id:"\uc124\uce58-\ub2e8\uacc4"},"\uc124\uce58 \ub2e8\uacc4"),(0,r.kt)("h3",{id:"\ub2e8\uacc4-1-casdoor-\ucc28\ud2b8-\uc124\uce58"},"\ub2e8\uacc4 1: Casdoor \ucc28\ud2b8 \uc124\uce58"),(0,r.kt)("p",null,"Install the Casdoor ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/casbin/casdoor-helm-charts/tags"},"chart"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install casdoor oci://registry-1.docker.io/casbin/casdoor-helm-charts --version 1.604.0\n")),(0,r.kt)("h3",{id:"\ub2e8\uacc4-2-casdoor-\uc811\uadfc"},"\ub2e8\uacc4 2: Casdoor \uc811\uadfc"),(0,r.kt)("p",null,"\uc124\uce58\uac00 \uc644\ub8cc\ub418\uba74, Casdoor\ub294 Kubernetes \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uc11c\ube44\uc2a4 URL\uc744 \ud1b5\ud574 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\uc0ac\uc6a9\uc790-\uc815\uc758-\ubc0f-\uad6c\uc131"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \ubc0f \uad6c\uc131"),(0,r.kt)("p",null,"Helm \ucc28\ud2b8 \uac12\uc744 \uc218\uc815\ud558\uc5ec Casdoor \uc124\uce58\ub97c \uc0ac\uc6a9\uc790 \uc815\uc758\ud558\uc138\uc694. \uc790\uc138\ud55c \uc635\uc158\uc740 \ucc28\ud2b8 \ub0b4\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor-helm/blob/master/charts/casdoor/values.yaml"},"values.yaml")," \ud30c\uc77c\uc744 \ucc38\uc870\ud558\uc138\uc694. \ub2e4\uc74c \ub9e4\uac1c\ubcc0\uc218\ub97c \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ub9e4\uac1c\ubcc0\uc218"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"),(0,r.kt)("th",{parentName:"tr",align:null},"\uae30\ubcf8 \uac12"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replicaCount")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc2e4\ud589\ud560 Casdoor \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubcf5\uc81c\ubcf8 \uc218."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.repository")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor Docker \uc774\ubbf8\uc9c0\uc758 \uc800\uc7a5\uc18c."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"casbin"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.name")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor Docker \uc774\ubbf8\uc9c0\uc758 \uc774\ub984."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"casdoor"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.pullPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor Docker \uc774\ubbf8\uc9c0\uc758 \ud480 \uc815\ucc45."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IfNotPresent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor Docker \uc774\ubbf8\uc9c0\uc758 \ud0dc\uadf8."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ub300\ud55c \uad6c\uc131 \uc124\uc815."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casdoor/casdoor-helm/blob/master/charts/casdoor/values.yaml"},"config")," \ud544\ub4dc\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.driver")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\ud560 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ub4dc\ub77c\uc774\ubc84 (mysql, postgres, cockroachdb, sqlite3 \uc9c0\uc6d0)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sqlite3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.user")),(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc0ac\uc6a9\uc790 \uc774\ub984."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.password")),(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ube44\ubc00\ubc88\ud638."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.host")),(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ud638\uc2a4\ud2b8."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.port")),(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ud3ec\ud2b8."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.databaseName")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uc774\ub984."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"casdoor"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"database.sslMode")),(0,r.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\uacb0\uc744 \uc704\ud55c SSL \ubaa8\ub4dc."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"service.type")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor\uc5d0 \ub300\ud574 \uc0dd\uc131\ud560 Kubernetes \uc11c\ube44\uc2a4\uc758 \uc720\ud615 (ClusterIP, NodePort, LoadBalancer \ub4f1)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ClusterIP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"service.port")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor \uc11c\ube44\uc2a4\uc758 \ud3ec\ud2b8 \ubc88\ud638."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor\uc5d0 \ub300\ud574 Ingress\ub97c \ud65c\uc131\ud654\ud560\uc9c0 \uc5ec\ubd80."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress.annotations")),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc8fc\uc11d."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingress.hosts")),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \ud638\uc2a4\ud2b8 \uc774\ub984."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor \ucee8\ud14c\uc774\ub108\uc5d0 \ub300\ud55c \ub9ac\uc18c\uc2a4 \uc694\uccad \ubc0f \uc81c\ud55c."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"autoscaling.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor\uc5d0 \ub300\ud574 Horizontal Pod Autoscaler\ub97c \ud65c\uc131\ud654\ud560\uc9c0 \uc5ec\ubd80."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"autoscaling.minReplicas")),(0,r.kt)("td",{parentName:"tr",align:null},"Horizontal Pod Autoscaler\uc5d0 \ub300\ud55c \ucd5c\uc18c \ubcf5\uc81c\ubcf8 \uc218."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"autoscaling.maxReplicas")),(0,r.kt)("td",{parentName:"tr",align:null},"Horizontal Pod Autoscaler\uc5d0 \ub300\ud55c \ucd5c\ub300 \ubcf5\uc81c\ubcf8 \uc218."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"autoscaling.targetCPUUtilizationPercentage")),(0,r.kt)("td",{parentName:"tr",align:null},"Horizontal Pod Autoscaler\uc5d0 \ub300\ud55c \ub300\uc0c1 CPU \uc0ac\uc6a9\ub960 \ud37c\uc13c\ud2b8."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"80"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nodeSelector")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud30c\ub4dc \ud560\ub2f9\uc744 \uc704\ud55c \ub178\ub4dc \ub808\uc774\ube14."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tolerations")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud30c\ub4dc \ud560\ub2f9\uc744 \uc704\ud55c \ud5c8\uc6a9 \ub808\uc774\ube14."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"affinity")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud30c\ub4dc \ud560\ub2f9\uc744 \uc704\ud55c Affinity \uc124\uc815."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraContainersEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"\ucd94\uac00 \uc0ac\uc774\ub4dc\uce74 \ucee8\ud14c\uc774\ub108\ub97c \ud65c\uc131\ud654\ud560\uc9c0 \uc5ec\ubd80."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraContainers")),(0,r.kt)("td",{parentName:"tr",align:null},"\ucd94\uac00 \uc0ac\uc774\ub4dc\uce74 \ucee8\ud14c\uc774\ub108."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraVolumeMounts")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor \ucee8\ud14c\uc774\ub108\uc5d0 \ub300\ud55c \ucd94\uac00 \ubcfc\ub968 \ub9c8\uc6b4\ud2b8."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extraVolumes")),(0,r.kt)("td",{parentName:"tr",align:null},"Casdoor \ucee8\ud14c\uc774\ub108\uc5d0 \ub300\ud55c \ucd94\uac00 \ubcfc\ub968."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"envFromSecret")),(0,r.kt)("td",{parentName:"tr",align:null},"\ube44\ubc00\uc5d0\uc11c \ud658\uacbd \ubcc0\uc218 \uc81c\uacf5."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'[{name:"",secretName:"",key:""}]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"envFromConfigmap")),(0,r.kt)("td",{parentName:"tr",align:null},"configmap\uc5d0\uc11c \ud658\uacbd \ubcc0\uc218 \uc81c\uacf5."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'[{name:"",configmapName:"",key:""}]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"envFrom")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc804\uccb4 \ube44\ubc00 \ub610\ub294 configmap\uc5d0\uc11c \ud658\uacbd \ubcc0\uc218 \uc81c\uacf5."),(0,r.kt)("td",{parentName:"tr",align:null},'`[{name:"",type:"configmap ',"\\")))),(0,r.kt)("h3",{id:"\ubc30\ud3ec-\uad00\ub9ac"},"\ubc30\ud3ec \uad00\ub9ac"),(0,r.kt)("p",null,"Casdoor \ubc30\ud3ec\ub97c \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\ub824\uba74:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade casdoor casdoor/casdoor-helm-charts\n")),(0,r.kt)("p",null,"Casdoor\ub97c \uc81c\uac70\ud558\ub824\uba74:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm delete casdoor\n")),(0,r.kt)("p",null,"\ub354\uc6b1 \uc790\uc138\ud55c \uad00\ub9ac \ubc0f \uc0ac\uc6a9\uc790 \uc815\uc758\ub97c \uc704\ud574 Helm \ubc0f Kubernetes \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc138\uc694."),(0,r.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,r.kt)("p",null,"Kubernetes\uc5d0\uc11c Helm\uc744 \uc0ac\uc6a9\ud558\uc5ec Casdoor\ub97c \ubc30\ud3ec\ud558\uba74 Kubernetes \ud658\uacbd \ub0b4\uc758 \uc778\uc99d \uc11c\ube44\uc2a4\uc758 \uad00\ub9ac\uc640 \ud655\uc7a5\uc131\uc774 \uac04\uc18c\ud654\ub429\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);