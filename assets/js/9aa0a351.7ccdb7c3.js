"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[6012],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(a),u=o,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},98007:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"Casdoor Public API",description:"Casdoor Public API",keywords:["Casdoor Public API"],authors:["hsluoyz"]},s=void 0,i={unversionedId:"basic/public-api",id:"basic/public-api",title:"Casdoor Public API",description:"Casdoor Public API",source:"@site/docs/basic/public-api.md",sourceDirName:"basic",slug:"/basic/public-api",permalink:"/docs/basic/public-api",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/basic/public-api.md",tags:[],version:"current",frontMatter:{title:"Casdoor Public API",description:"Casdoor Public API",keywords:["Casdoor Public API"],authors:["hsluoyz"]},sidebar:"tutorialSidebar",previous:{title:"(Optional) Try with K8s Helm",permalink:"/docs/basic/try-with-helm"},next:{title:"Tutorials",permalink:"/docs/basic/tutorials"}},c={},l=[{value:"How to authenticate with <code>Casdoor Public API</code>",id:"how-to-authenticate-with-casdoor-public-api",level:2},{value:"1. By <code>Access token</code>",id:"1-by-access-token",level:3},{value:"How to get the access token?",id:"how-to-get-the-access-token",level:4},{value:"How to authenticate?",id:"how-to-authenticate",level:4},{value:"2. By <code>Client ID</code> and <code>Client secret</code>",id:"2-by-client-id-and-client-secret",level:3},{value:"How to get the client ID and secret?",id:"how-to-get-the-client-id-and-secret",level:4},{value:"How to authenticate?",id:"how-to-authenticate-1",level:4},{value:"3. By <code>Access key</code> and <code>Access secret</code>",id:"3-by-access-key-and-access-secret",level:3},{value:"How to authenticate?",id:"how-to-authenticate-2",level:4},{value:"4. By <code>username</code> and <code>password</code>",id:"4-by-username-and-password",level:3},{value:"How to authenticate?",id:"how-to-authenticate-3",level:4}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casdoor frontend web UI is a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/SPA"},"SPA (Single-Page Application)")," developed in React. The React frontend consumes the Casdoor RESTful API exposed by the Go backend code. This RESTful API is referred to as the ",(0,o.kt)("inlineCode",{parentName:"p"},"Casdoor Public API"),". In Another word, with HTTP calls, you can do everything just like how Casdoor web UI itself does. There's no other limitations. The API can be utilized by the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Casdoor's frontend"),(0,o.kt)("li",{parentName:"ul"},"Casdoor client SDKs (e.g., casdoor-go-sdk)"),(0,o.kt)("li",{parentName:"ul"},"Any other customized code from the application side")),(0,o.kt)("p",null,"The full reference for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Casdoor Public API")," can be found on Swagger: ",(0,o.kt)("a",{parentName:"p",href:"https://door.casdoor.com/swagger"},(0,o.kt)("strong",{parentName:"a"},"https://door.casdoor.com/swagger")),". These Swagger docs are automatically generated using Beego's Bee tool. If you want to generate the Swagger docs by yourself, see: ",(0,o.kt)("a",{parentName:"p",href:"/docs/developer-guide/swagger/#how-to-generate-the-swagger-file"},"How to generate the swagger file")),(0,o.kt)("h2",{id:"how-to-authenticate-with-casdoor-public-api"},"How to authenticate with ",(0,o.kt)("inlineCode",{parentName:"h2"},"Casdoor Public API")),(0,o.kt)("h3",{id:"1-by-access-token"},"1. By ",(0,o.kt)("inlineCode",{parentName:"h3"},"Access token")),(0,o.kt)("p",null,"We can use the access token granted for an authenticated user to call ",(0,o.kt)("inlineCode",{parentName:"p"},"Casdoor Public API")," as the user itself."),(0,o.kt)("h4",{id:"how-to-get-the-access-token"},"How to get the access token?"),(0,o.kt)("p",null,"The application can get the access token for the Casdoor user at the end of OAuth login process (aka get the token by code and state). The permissions for the API calls will be the same as the user."),(0,o.kt)("p",null,"The below examples shows how to call ",(0,o.kt)("inlineCode",{parentName:"p"},"GetOAuthToken()")," function in Go via casdoor-go-sdk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (c *ApiController) Signin() {\n    code := c.Input().Get("code")\n    state := c.Input().Get("state")\n\n    token, err := casdoorsdk.GetOAuthToken(code, state)\n    if err != nil {\n        c.ResponseError(err.Error())\n        return\n    }\n\n    claims, err := casdoorsdk.ParseJwtToken(token.AccessToken)\n    if err != nil {\n        c.ResponseError(err.Error())\n        return\n    }\n\n    if !claims.IsAdmin {\n        claims.Type = "chat-user"\n    }\n\n    err = c.addInitialChat(&claims.User)\n    if err != nil {\n        c.ResponseError(err.Error())\n        return\n    }\n\n    claims.AccessToken = token.AccessToken\n    c.SetSessionClaims(claims)\n\n    c.ResponseOk(claims)\n}\n')),(0,o.kt)("p",null,"All granted access tokens can also be accessed via the web UI by an admin user in the Tokens page. For example, visit: ",(0,o.kt)("a",{parentName:"p",href:"https://door.casdoor.com/tokens"},"https://door.casdoor.com/tokens")," for the demo site."),(0,o.kt)("h4",{id:"how-to-authenticate"},"How to authenticate?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," parameter, the URL format is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/page?access_token=<The access token>\n")),(0,o.kt)("p",{parentName:"li"},"Demo site example: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://door.casdoor.com/api/get-global-providers?access_token=eyJhbGciOiJSUzI1NiIs"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"HTTP Bearer token, the HTTP header format is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Authorization: Bearer <The access token>\n")))),(0,o.kt)("h3",{id:"2-by-client-id-and-client-secret"},"2. By ",(0,o.kt)("inlineCode",{parentName:"h3"},"Client ID")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"Client secret")),(0,o.kt)("h4",{id:"how-to-get-the-client-id-and-secret"},"How to get the client ID and secret?"),(0,o.kt)("p",null,"The application edit page (e.g., ",(0,o.kt)("a",{parentName:"p",href:"https://door.casdoor.com/applications/casbin/app-vue-python-example"},"https://door.casdoor.com/applications/casbin/app-vue-python-example"),') will show the client ID and secret for an application. This authentication is useful when you want to call the API as a "machine", "application" or a "service" instead of a user. The permissions for the API calls will be the same as the application (aka the admin of the organization).'),(0,o.kt)("p",null,"The below examples shows how to call ",(0,o.kt)("inlineCode",{parentName:"p"},"GetOAuthToken()")," function in Go via casdoor-go-sdk."),(0,o.kt)("h4",{id:"how-to-authenticate-1"},"How to authenticate?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," parameter, the URL format is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/page?clientId=<The client ID>&clientSecret=<the client secret>\n")),(0,o.kt)("p",{parentName:"li"},"Demo site example: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://door.casdoor.com/api/get-global-providers?clientId=294b09fbc17f95daf2fe&clientSecret=dd8982f7046ccba1bbd7851d5c1ece4e52bf039d"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"HTTP Basic Authentication"),", the HTTP header format is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Authorization: Basic <The Base64 encoding of client ID and client secret joined by a single colon ":">\n')))),(0,o.kt)("p",null,"If you are not familiar with the Base64 encoding, you can use a library to do that because ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP Basic Authentication")," is a popular standard supported by many places."),(0,o.kt)("h3",{id:"3-by-access-key-and-access-secret"},"3. By ",(0,o.kt)("inlineCode",{parentName:"h3"},"Access key")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"Access secret")),(0,o.kt)("p",null,"We can use the access key and access secret for a Casdoor user to call ",(0,o.kt)("inlineCode",{parentName:"p"},"Casdoor Public API")," as the user itself. The access key and access secret can be configured in the user setting page by an admin or the user himself. the ",(0,o.kt)("inlineCode",{parentName:"p"},"update-user")," API can also be called to update these fields. The permissions for the API calls will be the same as the user."),(0,o.kt)("h4",{id:"how-to-authenticate-2"},"How to authenticate?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a pair of accessKey and accessSecret in account setting page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," parameter, the URL format is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/page?accessKey=<The user's access key>&accessSecret=<the user's access secret>\"\n")))),(0,o.kt)("p",null,"Demo site example: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://door.casdoor.com/api/get-global-providers?accessKey=b86db9dc-6bd7-4997-935c-af480dd2c796/admin&accessSecret=79911517-fc36-4093-b115-65a9741f6b14")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"User Api Key",src:a(33379).Z,width:"538",height:"231"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location 'http://door.casdoor.com/api/user?accessKey=b86db9dc-6bd7-4997-935c-af480dd2c796&accessSecret=79911517-fc36-4093-b115-65a9741f6b14'\n")),(0,o.kt)("h3",{id:"4-by-username-and-password"},"4. By ",(0,o.kt)("inlineCode",{parentName:"h3"},"username")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"password")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This authentication method is not safe and kept here only for compatibility or demo purposes. We recommend using the previous three authentication methods instead."),(0,o.kt)("h4",{parentName:"admonition",id:"what-will-happen"},"What will happen?"),(0,o.kt)("p",{parentName:"admonition"},"The user credential will be exposed as ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," parameters the in the request URL. Moreover, the user credential will be sniffed in plain text by the network if you are using HTTP instead of HTTPS.")),(0,o.kt)("p",null,"We can use the username and password for a Casdoor user to call ",(0,o.kt)("inlineCode",{parentName:"p"},"Casdoor Public API")," as the user itself. The username takes the format of ",(0,o.kt)("inlineCode",{parentName:"p"},"<The user's organization name>/<The user name>"),". The permissions for the API calls will be the same as the user."),(0,o.kt)("h4",{id:"how-to-authenticate-3"},"How to authenticate?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," parameter, the URL format is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/page?username=<The user's organization name>/<The user name>&password=<the user's password>\"\n")))),(0,o.kt)("p",null,"Demo site example: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://door.casdoor.com/api/get-global-providers?username=built-in/admin&password=123")))}d.isMDXComponent=!0},33379:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/user_api_key-dd4f820d64ab1511d1d948bfd1dec81a.png"}}]);