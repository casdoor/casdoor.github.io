"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||s[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"Zentao",description:"Using Casdoor for authentication in Zentao",keywords:["Zentao","zentao-oidc"],authors:["leo220yuyaodog"]},i=void 0,p={unversionedId:"integration/php/zentao",id:"integration/php/zentao",title:"Zentao",description:"Using Casdoor for authentication in Zentao",source:"@site/docs/integration/php/zentao.md",sourceDirName:"integration/php",slug:"/integration/php/zentao",permalink:"/docs/integration/php/zentao",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/php/zentao.md",tags:[],version:"current",frontMatter:{title:"Zentao",description:"Using Casdoor for authentication in Zentao",keywords:["Zentao","zentao-oidc"],authors:["leo220yuyaodog"]},sidebar:"tutorialSidebar",previous:{title:"Zabbix",permalink:"/docs/integration/php/Zabbix"},next:{title:"Using Casdoor as an OAuth2 Server in ShowDoc",permalink:"/docs/integration/php/showdoc"}},l={},d=[{value:"Step 1: Deploy Casdoor and Zentao",id:"step-1-deploy-casdoor-and-zentao",level:2},{value:"Step 2: Integrate Zentao OIDC third-party module",id:"step-2-integrate-zentao-oidc-third-party-module",level:2},{value:"Step 3: Configure Casdoor Application",id:"step-3-configure-casdoor-application",level:2},{value:"Step 4: Configure Zentao",id:"step-4-configure-zentao",level:2}],c={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.zentao.pm/"},"Zentao")," is an agile (scrum) project management system/tool, but it does not support OIDC itself.\nTo integrate Zentao with Casdoor SSO, we need to use a 3rd-party OIDC module called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casdoor/zentao-oidc"},"zentao-oidc"),", and this document will show you how to do it."),(0,a.kt)("h2",{id:"step-1-deploy-casdoor-and-zentao"},"Step 1: Deploy Casdoor and Zentao"),(0,a.kt)("p",null,"Firstly, deploy ",(0,a.kt)("a",{parentName:"p",href:"/docs/basic/server-installation"},"Casdoor")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://www.zentao.pm/download/zentao-community-edition-release-164-1100.html"},"Zentao"),".\nAfter a successful deployment, make sure:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Casdoor can be logged in and used successfully."),(0,a.kt)("li",{parentName:"ol"},"You can successfully log in and use Zentao.")),(0,a.kt)("h2",{id:"step-2-integrate-zentao-oidc-third-party-module"},"Step 2: Integrate Zentao OIDC third-party module"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casdoor/zentao-oidc"},"zentao-oidc")," by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"git clone https://github.com/casdoor/zentao-oidc.git\n")),(0,a.kt)("p",null,"Alternatively, you can download the ZIP and unzip it."),(0,a.kt)("p",null,"This module is used to integrate Zentao with SSO for OpenId. Here's how to use it:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the entire ",(0,a.kt)("inlineCode",{parentName:"p"},"oidc"),' directory to the module of Zentao and use it as a module of Zentao.\nRename the downloaded package to "oidc".')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the filter."),(0,a.kt)("p",{parentName:"li"},"Since the Zentao framework filters the parameters in the URL and does not allow spaces,\nyou need to put the following code at the end of ",(0,a.kt)("inlineCode",{parentName:"p"},"/config/my.php"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$filter->oidc = new stdclass();\n$filter->oidc->index = new stdclass();\n$filter->oidc->index->paramValue['scope'] = 'reg::any';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"/module/commom/model.php"),"."),(0,a.kt)("p",{parentName:"li"},"Add 'oidc' to the anonymous access list and add a line to the ",(0,a.kt)("inlineCode",{parentName:"p"},"isOpenMethod")," method of ",(0,a.kt)("inlineCode",{parentName:"p"},"model.php"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public function isOpenMethod($module, $method)\n{          \n    if ($module == 'oidc' and $method == 'index') {\n        return true; \n    }\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you don't want the Zentao login screen to appear, go directly to the Casdoor login screen."),(0,a.kt)("p",{parentName:"li"},"Modify the last line of code in ",(0,a.kt)("inlineCode",{parentName:"p"},"public function checkPriv()")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"/module/common/model.php"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"//return print(js::locate(helper::createLink('user', 'login', \"referer=$referer\")));\nreturn print(js::locate(helper::createLink('oidc', 'index', \"referer=$referer\")));\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"setSuperVars()")," method inside ",(0,a.kt)("inlineCode",{parentName:"p"},"framework/base/router.class.php")," and comment out the following statements."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public function setSuperVars()\n//  unset($_REQUEST);\n")))),(0,a.kt)("h2",{id:"step-3-configure-casdoor-application"},"Step 3: Configure Casdoor Application"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new Casdoor application or use an existing one."),(0,a.kt)("li",{parentName:"ol"},"Add your redirect URL.\n",(0,a.kt)("img",{alt:"Casdoor Application Setting",src:n(9798).Z,width:"793",height:"360"})),(0,a.kt)("li",{parentName:"ol"},"Add the provider you want and fill in other required settings.")),(0,a.kt)("h2",{id:"step-4-configure-zentao"},"Step 4: Configure Zentao"),(0,a.kt)("p",null,"Configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.php")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"oidc")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$config->oidc->clientId = "<Your ClientId>";\n$config->oidc->clientSecret = "<Your ClientSecret>";\n$config->oidc->issuer = "http://localhost:8000";\n')),(0,a.kt)("p",null,"Set your redirect URL in ",(0,a.kt)("inlineCode",{parentName:"p"},"module/oidc")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"public function index()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$oidc->setRedirectURL($path."/zentao/oidc-index.html");\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The URL here refers to calling the 'index' method in the 'oidc' module. You also need to set a variable separator.\nBy default, the framework uses a dash (\"-\").\nPlease refer to the official Zentao framework for more details.\n",(0,a.kt)("a",{parentName:"p",href:"https://devel.easycorp.cn/book/zentaophphelp/about-10.html"},'"zentaoPHP\u6846\u67b6"'))))}s.isMDXComponent=!0},9798:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/clientId-563efc95f2798062bde65091a87cc546.png"}}]);