"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[6012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:1},i="Getting Started",l={unversionedId:"e2e-system-tests/GettingStarted",id:"e2e-system-tests/GettingStarted",title:"Getting Started",description:"This section provides instructions for setting up the Cypress-Cucumber test environment to ensure a smooth onboarding process.",source:"@site/docs/e2e-system-tests/0_GettingStarted.md",sourceDirName:"e2e-system-tests",slug:"/e2e-system-tests/GettingStarted",permalink:"/docs/e2e-system-tests/GettingStarted",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/e2e-system-tests/0_GettingStarted.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"e2e-system-tests",permalink:"/docs/category/e2e-system-tests"},next:{title:"Project Structure",permalink:"/docs/e2e-system-tests/ProjectStructure"}},o={},p=[{value:"1. Pre-requisites",id:"1-pre-requisites",level:2},{value:"2. Cloning the Repository",id:"2-cloning-the-repository",level:2},{value:"3. Setting Up Environment Variables for the Testing User Credentials and URLs",id:"3-setting-up-environment-variables-for-the-testing-user-credentials-and-urls",level:2},{value:"4. Installing Dependencies",id:"4-installing-dependencies",level:2},{value:"5. Running Cypress Tests",id:"5-running-cypress-tests",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"This section provides instructions for setting up the Cypress-Cucumber test environment to ensure a smooth onboarding process."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"1-pre-requisites"},"1. Pre-requisites"),(0,a.kt)("p",null,"Before getting started, ensure the following tools are installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node.js: Download Node v18"),(0,a.kt)("li",{parentName:"ul"},"Git: Download Git"),(0,a.kt)("li",{parentName:"ul"},"Browser: (Recommended: Microsoft Edge) Download Edge Browser"),(0,a.kt)("li",{parentName:"ul"},"IDE: Choose any IDE (Recommended: VS Code)"),(0,a.kt)("li",{parentName:"ul"},"Optional Tools: GitHub Desktop App"),(0,a.kt)("li",{parentName:"ul"},"Recommended VS Code Extensions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cucumber (Gherkin) Full Support"),(0,a.kt)("li",{parentName:"ul"},"EditorConfig"),(0,a.kt)("li",{parentName:"ul"},"Prettier")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"2-cloning-the-repository"},"2. Cloning the Repository"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To get the project files locally, follow these steps:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone <repository-url>\ncd <repository-folder>\n")))),(0,a.kt)("p",null,"Make sure you have access to the repository using your organization's credentials."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"3-setting-up-environment-variables-for-the-testing-user-credentials-and-urls"},"3. Setting Up Environment Variables for the Testing User Credentials and URLs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setting Up Environment Variables for Dev Environment/Cluster:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Duplicate the file ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hpi-schul-cloud/e2e-system-tests/blob/main/env_variables/devTemplate.env.json"},"devTemplate.env.json")," and rename the duplicated file to ",(0,a.kt)("inlineCode",{parentName:"li"},"local.env.json")," inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"env_variables")," folder."),(0,a.kt)("li",{parentName:"ul"},"Include the required development namespace URLs for BRB/DBC/NBC."),(0,a.kt)("li",{parentName:"ul"},"Test user data on development clusters are created using the school API."),(0,a.kt)("li",{parentName:"ul"},"To retrieve the API keys for all three namespaces, navigate to 1Password (1PW)."),(0,a.kt)("li",{parentName:"ul"},"Contact QA team for the necessary 1Password links."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setting Up Environment Variables for Staging Environment/Cluster:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Duplicate the file ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hpi-schul-cloud/e2e-system-tests/blob/main/env_variables/stagingTemplate.env.json"},"stagingTemplate.env.json")," and rename the duplicated file to ",(0,a.kt)("inlineCode",{parentName:"li"},"staging.env.json")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"env_variables")," folder."),(0,a.kt)("li",{parentName:"ul"},"Include the required staging namespace URLs for BRB/DBC/NBC."),(0,a.kt)("li",{parentName:"ul"},"Test data on the staging environment are fetched from the seed data on the server."),(0,a.kt)("li",{parentName:"ul"},"Add the environment-specific credentials to ",(0,a.kt)("inlineCode",{parentName:"li"},"staging.env.json")," from 1Password (1PW)."),(0,a.kt)("li",{parentName:"ul"},"Ensure all instances are included, as 1Password contains different vaults for each namespace with testing credentials."),(0,a.kt)("li",{parentName:"ul"},"Contact QA team for the necessary 1Password links.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"4-installing-dependencies"},"4. Installing Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the following command to install all necessary project dependencies:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm ci\n")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"5-running-cypress-tests"},"5. Running Cypress Tests"),(0,a.kt)("p",null,"Once the setup is complete, you can run the tests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To run all tests in headless mode:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run cy:headless:stable:local\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To run tests interactively in the Cypress UI:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run cy:gui:stable:regression:staging:local\n")))),(0,a.kt)("p",null,"For more details on additional configurations and test options, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hpi-schul-cloud/e2e-system-tests/blob/main/docs/executing_tests_guide.md"},(0,a.kt)("inlineCode",{parentName:"a"},"Executing Tests Guide"))," section in README."))}d.isMDXComponent=!0}}]);