"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[51580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"access-system-information",title:"How to Access System Information?"},i=void 0,s={unversionedId:"guides/access-system-information",id:"version-1.0.18/guides/access-system-information",title:"How to Access System Information?",description:"Sometimes, environment variables are relevant information to an application. ZIO provides a system package to interface with this functionality.",source:"@site/versioned_docs/version-1.0.18/guides/access-system-information.md",sourceDirName:"guides",slug:"/guides/access-system-information",permalink:"/1.0.18/guides/access-system-information",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/guides/access-system-information.md",tags:[],version:"1.0.18",frontMatter:{id:"access-system-information",title:"How to Access System Information?"},sidebar:"overview_sidebar",previous:{title:"How to Handle Errors?",permalink:"/1.0.18/guides/handle-errors"},next:{title:"How to use ZIO Macros?",permalink:"/1.0.18/guides/use-zio-macros"}},l={},c=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Properties",id:"properties",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes, environment variables are relevant information to an application. ZIO provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"system")," package to interface with this functionality."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.system\n")),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," method, you can safely read an environment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// Read an environment variable\nsystem.env("JAVA_HOME")\n// res0: zio.ZIO[system.package.System, SecurityException, Option[String]] = zio.ZIO$Read@2111d7b9\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"property")," method, you can safely access Java properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// Read a system property\nsystem.property("java.version")\n// res1: zio.ZIO[system.package.System, Throwable, Option[String]] = zio.ZIO$Read@7a023e34\n')),(0,a.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"lineSeparator")," method, you can determine the line separator for the underlying platform:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"system.lineSeparator\n// res2: zio.package.URIO[system.package.System, String] = zio.ZIO$Read@260f05ee\n")))}u.isMDXComponent=!0}}]);