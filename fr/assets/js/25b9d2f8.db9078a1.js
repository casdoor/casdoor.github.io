"use strict";(self.webpackChunkcasdoor_website=self.webpackChunkcasdoor_website||[]).push([[2073],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18115:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const s={title:"Hasura",metaTitle:"Hasura | Tutoriel d'authentification Hasura",metaDescription:"Apprenez comment int\xe9grer Casdoor avec Hasura pour s\xe9curiser vos applications en utilisant JWT"},o=void 0,i={unversionedId:"integration/Haskell/Hasura",id:"integration/Haskell/Hasura",title:"Hasura",description:"Avant l'int\xe9gration, nous devons d\xe9ployer Casdoor localement.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/integration/Haskell/Hasura.md",sourceDirName:"integration/Haskell",slug:"/integration/Haskell/Hasura",permalink:"/fr/docs/integration/Haskell/Hasura",draft:!1,editUrl:"https://github.com/casdoor/casdoor-website/edit/master/docs/integration/Haskell/Hasura.md",tags:[],version:"current",frontMatter:{title:"Hasura",metaTitle:"Hasura | Tutoriel d'authentification Hasura",metaDescription:"Apprenez comment int\xe9grer Casdoor avec Hasura pour s\xe9curiser vos applications en utilisant JWT"},sidebar:"tutorialSidebar",previous:{title:"Haskell",permalink:"/fr/docs/category/haskell"},next:{title:"Python",permalink:"/fr/docs/category/python"}},l={},u=[{value:"Configurer l&#39;application Casdoor",id:"configurer-lapplication-casdoor",level:2},{value:"Ajoutez un utilisateur dans Casdoor",id:"ajoutez-un-utilisateur-dans-casdoor",level:2},{value:"Construisez l&#39;application Hasura",id:"construisez-lapplication-hasura",level:2},{value:"Configurez Hasura avec Casdoor",id:"configurez-hasura-avec-casdoor",level:2},{value:"R\xe9cup\xe9rez le Token JWT",id:"r\xe9cup\xe9rez-le-token-jwt",level:2}],p={toc:u};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Avant l'int\xe9gration, nous devons d\xe9ployer Casdoor localement."),(0,n.kt)("p",null,"Ensuite, nous pouvons rapidement mettre en place une page de connexion bas\xe9e sur Casdoor dans notre propre application avec les \xe9tapes suivantes."),(0,n.kt)("h2",{id:"configurer-lapplication-casdoor"},"Configurer l'application Casdoor"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Cr\xe9ez ou utilisez une application Casdoor existante."),(0,n.kt)("li",{parentName:"ol"},"Ajoutez une URL de redirection : ",(0,n.kt)("inlineCode",{parentName:"li"},"http://CASDOOR_HOSTNAME/login")," ",(0,n.kt)("img",{alt:"Param\xe8tre de l&#39;application Casdoor",src:a(78479).Z,width:"1767",height:"146"})),(0,n.kt)("li",{parentName:"ol"},"Copiez l'ID client ; nous en aurons besoin dans les \xe9tapes suivantes.")),(0,n.kt)("h2",{id:"ajoutez-un-utilisateur-dans-casdoor"},"Ajoutez un utilisateur dans Casdoor"),(0,n.kt)("p",null,"Maintenant que vous avez l'application, mais pas d'utilisateur. Cela signifie que vous devez cr\xe9er un utilisateur et lui attribuer un r\xf4le."),(0,n.kt)("p",null,'Allez \xe0 la page "Utilisateurs" et cliquez sur "Ajouter un utilisateur" dans le coin sup\xe9rieur droit. Cela ouvre une nouvelle page o\xf9 vous pouvez ajouter le nouvel utilisateur.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image montrant la page des utilisateurs",src:a(77596).Z,width:"1856",height:"657"})),(0,n.kt)("p",null,"Sauvegardez l'utilisateur apr\xe8s avoir ajout\xe9 un nom d'utilisateur et ajout\xe9 l'organisation Hasura (les autres d\xe9tails sont optionnels)."),(0,n.kt)("p",null,'Maintenant, vous devez d\xe9finir un mot de passe pour votre utilisateur, ce que vous pouvez faire en cliquant sur "g\xe9rer votre mot de passe".'),(0,n.kt)("p",null,"Choisissez un mot de passe pour votre utilisateur et confirmez-le."),(0,n.kt)("h2",{id:"construisez-lapplication-hasura"},"Construisez l'application Hasura"),(0,n.kt)("p",null,"D\xe9marrez Hasura par Docker ou Hasura Cloud."),(0,n.kt)("p",null,"Maintenant cr\xe9ez une table ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," avec les colonnes suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," de type Texte (Cl\xe9 Primaire)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"username")," de type Texte")),(0,n.kt)("p",null,"R\xe9f\xe9rez-vous \xe0 l'image ci-dessous pour r\xe9f\xe9rence."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-hasura-authentication/keycloak/hasura-create-table.png",alt:"Image montrant comment cr\xe9er une table dans Hasura"})),(0,n.kt)("p",null,"L'\xe9tape suivante consiste \xe0 cr\xe9er un r\xf4le ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," pour l'application. Les utilisateurs devraient \xeatre capables de voir seulement leurs enregistrements mais pas ceux des autres."),(0,n.kt)("p",null,"Configurez le r\xf4le ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," comme montr\xe9 dans l'image ci-dessous. For more information, read about ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/docs/2.0/auth/authorization/permissions/"},"configuring permission rules in Hasura"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-hasura-authentication/keycloak/hasura-set-permissions.png",alt:"Image montrant comment d\xe9finir les permissions dans Hasura"})),(0,n.kt)("p",null,"De cette mani\xe8re, les utilisateurs ne peuvent pas lire les enregistrements des autres. Ils ne peuvent acc\xe9der qu'\xe0 leurs propres informations."),(0,n.kt)("p",null,"Pour des fins de test, ajoutez un utilisateur fictif. Ceci est pour s'assurer que lorsque vous utilisez le token JWT, vous ne voyez que les d\xe9tails de votre utilisateur et non ceux des autres utilisateurs."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://graphql-engine-cdn.hasura.io/learn-hasura/assets/graphql-hasura-authentication/keycloak/hasura-dummy-user.png",alt:"Image montrant comment ajouter un enregistrement de table dans Hasura"})),(0,n.kt)("p",null,"Maintenant, vous devez d\xe9finir le ",(0,n.kt)("inlineCode",{parentName:"p"},"JWT_SECRET")," dans Hasura."),(0,n.kt)("h2",{id:"configurez-hasura-avec-casdoor"},"Configurez Hasura avec Casdoor"),(0,n.kt)("p",null,"Dans cette \xe9tape, vous devez ajouter le ",(0,n.kt)("strong",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRET")," \xe0 Hasura."),(0,n.kt)("p",null,"Pour ce faire, allez dans le fichier docker-compose.yaml de Hasura et ajoutez le nouveau ",(0,n.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRET")," comme ci-dessous."),(0,n.kt)("p",null,"Le ",(0,n.kt)("inlineCode",{parentName:"p"},"HASURA_GRAPHQL_JWT_SECRET")," doit \xeatre au format suivant. N'oubliez pas de changer ",(0,n.kt)("inlineCode",{parentName:"p"},"<Casdoor endpoint>")," par l'URL de votre propre Casdoor (comme ",(0,n.kt)("inlineCode",{parentName:"p"},"https://door.casdoor.com"),")"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'HASURA_GRAPHQL_JWT_SECRET: \'{"claims_map": {\n      "x-hasura-allowed-roles": {"path": "$.roles"},\n      "x-hasura-default-role": {"path": "$.roles[0]"},\n      "x-hasura-user-id": {"path": "$.id"}\n    },"jwk_url":"<Casdoor endpoint>/.well-known/jwks"}\'\n')),(0,n.kt)("p",null,"Sauvegardez le changement et rechargez le docker."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Ajoutez l&#39;URL JWT de Clerk \xe0 Hasura",src:a(40876).Z,width:"963",height:"242"})),(0,n.kt)("h2",{id:"r\xe9cup\xe9rez-le-token-jwt"},"R\xe9cup\xe9rez le Token JWT"),(0,n.kt)("p",null,"Puisqu'il n'y a pas d'impl\xe9mentation client, vous pouvez obtenir votre token d'acc\xe8s en faisant une requ\xeate \xe0 l'URL ci-dessous :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-url"},"http://localhost:8000/login/oauth/authorize?client_id=<client ID>&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Flogin&scope=read&state=app-built-in<public certificate>>\n")),(0,n.kt)("p",null,"Changez ",(0,n.kt)("inlineCode",{parentName:"p"},"client ID")," par l'ID que vous avez copi\xe9 auparavant et entrez le certificat public de Casdoor, que vous pouvez trouver sur la page Certs de Casdoor."),(0,n.kt)("p",null,"Ensuite, entrez le nom d'utilisateur et le mot de passe que vous avez cr\xe9\xe9s pour Hasura auparavant."),(0,n.kt)("p",null,'Cliquez sur "Se connecter"'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"R\xe9cup\xe9rez le Token JWT",src:a(20588).Z,width:"1871",height:"846"})),(0,n.kt)("p",null,"Retournez \xe0 la page Casdoor/Token."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Page de Token",src:a(16786).Z,width:"1827",height:"793"})),(0,n.kt)("p",null,'Trouvez le nom d\'utilisateur que vous avez entr\xe9 auparavant, puis cliquez sur "\xe9diter"'),(0,n.kt)("p",null,"Copiez le Token d'Acc\xe8s"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Token d&#39;Acc\xe8s",src:a(51355).Z,width:"1843",height:"814"})),(0,n.kt)("p",null,"Maintenant, vous pouvez utiliser le token d'acc\xe8s pour effectuer la requ\xeate authentifi\xe9e. Hasura a renvoy\xe9 l'utilisateur appropri\xe9 au lieu de renvoyer tous les utilisateurs de la base de donn\xe9es."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image montrant le token d&#39;acc\xe8s de Casdoor utilis\xe9 dans Hasura",src:a(37884).Z,width:"1819",height:"922"})))}c.isMDXComponent=!0},40876:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/JWT-4529538a012c1b4739a3e8269107278a.png"},51355:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/access-a7d8fb20ba05b1a548f603664c912c9f.png"},78479:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cas-5af2f28e52ed3cd92f069520979945f5.png"},37884:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hasura-0ab496d67e2e34ed63dc93407053abe0.png"},20588:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/login-537105fddeaaeff5471ca0cd0c5e2f21.png"},16786:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tokens-d3624b07df57028c7a6085d18855c0f5.png"},77596:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/user-bd4da280495b507962f00e452754e5a7.png"}}]);