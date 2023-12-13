"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[38045],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"fatals",title:"Fatal Errors"},i=void 0,l={unversionedId:"reference/error-management/types/fatals",id:"reference/error-management/types/fatals",title:"Fatal Errors",description:"In ZIO on the JVM platform, the VirtualMachineError and all its subtypes are the only errors considered fatal by the ZIO runtime. So if during the running application, the JVM throws any of these errors like StackOverflowError, the ZIO runtime considers it as a catastrophic fatal error. So it will interrupt the whole application immediately without safe resource interruption. None of the ZIO#catchAll and ZIO#catchAllDefects can catch these fatal errors. At most, if we set the Runtime.setReportFatal, the application will log the stack trace before interrupting the entire application.",source:"@site/docs/reference/error-management/types/fatals.md",sourceDirName:"reference/error-management/types",slug:"/reference/error-management/types/fatals",permalink:"/reference/error-management/types/fatals",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/types/fatals.md",tags:[],version:"current",frontMatter:{id:"fatals",title:"Fatal Errors"},sidebar:"reference-sidebar",previous:{title:"Defects",permalink:"/reference/error-management/types/defects"},next:{title:"Imperative vs. Declarative",permalink:"/reference/error-management/imperative-vs-declarative"}},c={},s=[],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ZIO on the JVM platform, the ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtualMachineError")," and all its subtypes are the only errors considered fatal by the ZIO runtime. So if during the running application, the JVM throws any of these errors like ",(0,a.kt)("inlineCode",{parentName:"p"},"StackOverflowError"),", the ZIO runtime considers it as a catastrophic fatal error. So it will interrupt the whole application immediately without safe resource interruption. None of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#catchAll")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#catchAllDefects")," can catch these fatal errors. At most, if we set the ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime.setReportFatal"),", the application will log the stack trace before interrupting the entire application."),(0,a.kt)("p",null,"Here is an example of manually creating a fatal error. Although we are ignoring all expected and unexpected errors, the fatal error interrupts the whole application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    ZIO\n      .attempt(\n        throw new StackOverflowError(\n          "The call stack pointer exceeds the stack bound."\n        )\n      )\n      .catchAll(_ => ZIO.unit)       // ignoring all expected errors\n      .catchAllDefect(_ => ZIO.unit) // ignoring all unexpected errors\n}\n')),(0,a.kt)("p",null,"The output will be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"java.lang.StackOverflowError: The call stack pointer exceeds the stack bound.\nat zio.examples.MainApp$.$anonfun$run$1(MainApp.scala:10)\nat zio.ZIO$.liftedTree1$1(ZIO.scala:2603)\nat zio.ZIO$.$anonfun$attempt$1(ZIO.scala:2603)\nat zio.ZIO$.$anonfun$isFatalWith$1(ZIO.scala:3571)\nat zio.internal.FiberContext.runUntil(FiberContext.scala:410)\nat zio.internal.FiberContext.run(FiberContext.scala:111)\nat zio.Runtime.unsafeRunWithRefs(Runtime.scala:400)\n  ...\n**** WARNING ****\nCatastrophic error encountered. Application not safely interrupted. Resources may be leaked. Check the logs for more details and consider overriding `Runtime.reportFatal` to capture context.\n")),(0,a.kt)("p",null,"Note that we can change the default way to report fatal errors using ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime#reportFatal")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"Runtime.setReportFatal")," layer."))}f.isMDXComponent=!0}}]);