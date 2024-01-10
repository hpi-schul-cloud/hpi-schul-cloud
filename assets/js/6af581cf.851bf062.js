"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[8639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Getting Started",l={unversionedId:"nuxt-client/GettingStarted",id:"nuxt-client/GettingStarted",title:"Getting Started",description:"Development Setup",source:"@site/docs/nuxt-client/0_GettingStarted.md",sourceDirName:"nuxt-client",slug:"/nuxt-client/GettingStarted",permalink:"/docs/nuxt-client/GettingStarted",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/nuxt-client/0_GettingStarted.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"nuxt-client",permalink:"/docs/category/nuxt-client"},next:{title:"Project Structure",permalink:"/docs/nuxt-client/ProjectStructure"}},u={},s=[{value:"Development Setup",id:"development-setup",level:2},{value:"Start the Server",id:"start-the-server",level:3},{value:"Unit Tests",id:"unit-tests",level:3},{value:"Lint",id:"lint",level:3},{value:"Editor Setup",id:"editor-setup",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"development-setup"},"Development Setup"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Please ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"don't use yarn"))," !!! We decided to use npm across all of our repositories.")),(0,a.kt)("p",null,"In order to run this client, you need to have the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hpi-schul-cloud/schulcloud-client"},"legacy-client")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hpi-schul-cloud/schulcloud-server"},"schulcloud-server")," set up and running. See for documentation on how to do that in the respective repositories."),(0,a.kt)("h3",{id:"start-the-server"},"Start the Server"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone the repository"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:hpi-schul-cloud/nuxt-client.git\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the required dependencies:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm ci\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the development server:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run serve\n")),(0,a.kt)("p",{parentName:"li"},"By default the server will listen on the URL ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4000"},"http://localhost:4000")))),(0,a.kt)("h3",{id:"unit-tests"},"Unit Tests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Run all (unit) tests\nnpm run test\n")),(0,a.kt)("h3",{id:"lint"},"Lint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run lint\n")),(0,a.kt)("h2",{id:"editor-setup"},"Editor Setup"),(0,a.kt)("p",null,"We are using Visual Studio Code as our default deveopment-IDE. In /.vscode you can find two templates to setup your IDE:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"launch.default.json")," (copy its content and us it in ",(0,a.kt)("inlineCode",{parentName:"li"},"launch.json"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"settings.default.json")," (copy its content and us it in ",(0,a.kt)("inlineCode",{parentName:"li"},"settings.json"),")")),(0,a.kt)("p",null,"For a list of recommended Visual Studio Code extensions please refer to ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions.json"),"."))}d.isMDXComponent=!0}}]);