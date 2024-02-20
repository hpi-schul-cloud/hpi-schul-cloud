"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[7858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Exception Handling",s={unversionedId:"schulcloud-server/Coding-Guidelines/exception-handling",id:"schulcloud-server/Coding-Guidelines/exception-handling",title:"Exception Handling",description:"exception hierarchy",source:"@site/docs/schulcloud-server/Coding-Guidelines/exception-handling.md",sourceDirName:"schulcloud-server/Coding-Guidelines",slug:"/schulcloud-server/Coding-Guidelines/exception-handling",permalink:"/docs/schulcloud-server/Coding-Guidelines/exception-handling",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/schulcloud-server/Coding-Guidelines/exception-handling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Domain Object Validation",permalink:"/docs/schulcloud-server/Coding-Guidelines/domain-object-validation"},next:{title:"Logging",permalink:"/docs/schulcloud-server/Coding-Guidelines/logging"}},l={},c=[{value:"Chaining errors with the <code>cause</code> property",id:"chaining-errors-with-the-cause-property",level:2},{value:"Loggable exceptions",id:"loggable-exceptions",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exception-handling"},"Exception Handling"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"exception hierarchy",src:n(484).Z,width:"661",height:"591"})),(0,o.kt)("p",null,"We separate our business exceptions from technical exceptions. While for technical exceptions, we use the predefined HTTPExceptions from NestJS, business exceptions inherit from abstract BusinessException."),(0,o.kt)("p",null,"By default, implementations of BusinessException must define"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'code: 500\ntype: "CUSTOM_ERROR_TYPE",\ntitle: "Custom Error Type",\nmessage: "Human readable details",\n// additional: optionalData\n')),(0,o.kt)("p",null,"There is a GlobalErrorFilter provided to handle exceptions, which cares about the response format of exceptions and logging. It overrides the default NestJS APP_FILTER in the core/error-module."),(0,o.kt)("p",null,"In client applications, for technical errors, evaluate the http-error-code, then for business exceptions, the type can be used as identifier and additional data can be evaluated."),(0,o.kt)("p",null,"For business errors we use 409/conflict as default to clearly have all business errors with one error code identified."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Sample: For API validation errors, 400/Bad Request will be extended with ",(0,o.kt)("inlineCode",{parentName:"p"},"validationError: ValidationError[{ field: string, error: string }]")," and a custom type ",(0,o.kt)("inlineCode",{parentName:"p"},"API_VALIDATION_ERROR"),".")),(0,o.kt)("p",null,"Pipes can be used as input validation. To get errors reported in the correct format, they can define a custom exception factory when they should produce api validation error or other exceptions, handled by clients."),(0,o.kt)("h2",{id:"chaining-errors-with-the-cause-property"},"Chaining errors with the ",(0,o.kt)("inlineCode",{parentName:"h2"},"cause")," property"),(0,o.kt)("p",null,"If you catch an error and throw a new one, put the original error in the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause"},(0,o.kt)("inlineCode",{parentName:"a"},"cause")," property")," of the new error. See example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"try {\n    someMethod();\n} catch(error) {\n    throw new ForbiddenException('some message', { cause: error });\n}\n")),(0,o.kt)("h2",{id:"loggable-exceptions"},"Loggable exceptions"),(0,o.kt)("p",null,"If you want the error log to contain more information than just the exception message, use or create an exception which implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"Loggable")," interface. Don't put data directly in the exception message!"),(0,o.kt)("p",null,"A loggable exception should extend the respective ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/exception-filters#built-in-http-exceptions"},"Built-in HTTP exception"),' from NestJS. For the name just put in "Loggable" before the word "Exception", e.g. "BadRequestLoggableException". Except for logging a loggable exception behaves like any other exception, specifically the error response is not affected by this.'),(0,o.kt)("p",null,"See example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"export class UnauthorizedLoggableException extends UnauthorizedException implements Loggable {\n    constructor(private readonly username: string, private readonly systemId?: string) {\n        super();\n    }\n\n    getLogMessage(): ErrorLogMessage {\n        const message = {\n            type: 'UNAUTHORIZED_EXCEPTION',\n            stack: this.stack,\n            data: {\n                userName: this.username,\n                systemId: this.systemId,\n            },\n        };\n\n        return message;\n    }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"export class YourService {\n    public sampleServiceMethod(username, systemId) {\n        throw new UnauthorizedLoggableException(username, systemId);\n    }\n}\n")))}d.isMDXComponent=!0},484:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/exception-hierarchy-38148717902c7eeb24fc082e786c2e74.svg"}}]);