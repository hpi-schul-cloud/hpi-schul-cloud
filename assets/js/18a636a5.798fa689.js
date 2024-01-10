"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[5556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Git Conventions",l={unversionedId:"nuxt-client/GitConventions",id:"nuxt-client/GitConventions",title:"Git Conventions",description:"Each change should be done in a Ticket (no matter how small).",source:"@site/docs/nuxt-client/3_GitConventions.md",sourceDirName:"nuxt-client",slug:"/nuxt-client/GitConventions",permalink:"/docs/nuxt-client/GitConventions",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/nuxt-client/3_GitConventions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Code Conventions",permalink:"/docs/nuxt-client/CodeConventions"},next:{title:"How To",permalink:"/docs/nuxt-client/HowTo"}},s={},c=[{value:"Pull Requests",id:"pull-requests",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-conventions"},"Git Conventions"),(0,o.kt)("p",null,"Each change should be done in a Ticket (no matter how small)."),(0,o.kt)("p",null,"We use a ",(0,o.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow"},"Feature Branch model"),". Start a branch from main and make a PR to main."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Branch naming:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{{ PROJECT_ABBREVIATION }}-{{ NUMBER }}-word1-word2-word2")),(0,o.kt)("p",null,"e.g.: ",(0,o.kt)("inlineCode",{parentName:"p"},"BC-1234-course-copy")),(0,o.kt)("p",null,"We try to keep branch names small. The Ticket Number should be in Uppercase (e.g BC-1234) but the namespace should be in lowercase. It should stay below 64 letters."),(0,o.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,o.kt)("p",null,"Pull Requests must contain a relevant description (template provides useful information, when creating the PR)."),(0,o.kt)("p",null,"In case of UI changes also put a screenshot and talk to UX if thats fine like it is.\nAll Pull Requests Criterias (as defined in deployment pipeline) must be green before merge,\ne.g. 1 approving review, unit tests or QA checkbox in PR template."),(0,o.kt)("p",null,"We merge by squash strategy. The squashed commit subject should start with a ticket number and end with a PR number. Write commit messages in imperative and active."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Text"},"BC-1993 - lesson lernstore and geogebra copy (#3532)\n\nIn order to make sure developers in the future can find out why changes have been made,\nwe would like some descriptive text here that explains what we did and why.\n\n- change some important things\n- change some other things\n- refactor some existing things\n\n# We dont need to mention tests, changes that didnt make it to main, linter, or other fixups\n# only leave lines that are relevant changes compared to main\n# comments like this will not actually show up in the git history\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note for working with Windows:")," We strongly recommend to let git translate line endings. Please set ",(0,o.kt)("inlineCode",{parentName:"p"},"git config --global --add core.autocrlf")," input when working with windows."))}d.isMDXComponent=!0}}]);