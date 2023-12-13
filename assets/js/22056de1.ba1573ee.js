"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[19230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"repetition",title:"Repetition"},o=void 0,c={unversionedId:"reference/schedule/repetition",id:"reference/schedule/repetition",title:"Repetition",description:"In the case of repetition, ZIO has a ZIO#repeat function, which takes a schedule as a repetition policy and returns another effect that describes an effect with repetition strategy according to that policy.",source:"@site/docs/reference/schedule/repetition.md",sourceDirName:"reference/schedule",slug:"/reference/schedule/repetition",permalink:"/reference/schedule/repetition",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/schedule/repetition.md",tags:[],version:"current",frontMatter:{id:"repetition",title:"Repetition"},sidebar:"reference-sidebar",previous:{title:"Introduction to Scheduling ZIO Effects",permalink:"/reference/schedule/"},next:{title:"Retrying",permalink:"/reference/schedule/retrying"}},l={},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the case of repetition, ZIO has a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#repeat")," function, which takes a schedule as a repetition policy and returns another effect that describes an effect with repetition strategy according to that policy."),(0,a.kt)("p",null,"Repeat policies are used in the following functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ZIO#repeat")," \u2014 Repeats an effect until the schedule is done."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ZIO#repeatOrElse")," \u2014 Repeats an effect until the schedule is done, with a fallback for errors.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Note:"))),(0,a.kt)("p",{parentName:"blockquote"},"Scheduled recurrences are in addition to the first execution, so that ",(0,a.kt)("inlineCode",{parentName:"p"},"io.repeat(Schedule.once)")," yields an effect that executes ",(0,a.kt)("inlineCode",{parentName:"p"},"io"),", and then if that succeeds, executes ",(0,a.kt)("inlineCode",{parentName:"p"},"io")," an additional time.")),(0,a.kt)("p",null,"Let's see how we can create a repeated effect by using ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#repeat")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val action:      ZIO[R, E, A] = ???\nval policy: Schedule[R1, A, B] = ???\n\nval repeated = action repeat policy\n")),(0,a.kt)("p",null,"There is another version of ",(0,a.kt)("inlineCode",{parentName:"p"},"repeat")," that helps us to have a fallback strategy in case of errors, if something goes wrong we can handle that by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#repeatOrElse")," function, which helps up to add an ",(0,a.kt)("inlineCode",{parentName:"p"},"orElse")," callback that will run in case of repetition failure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val action:       ZIO[R, E, A] = ???\nval policy: Schedule[R1, A, B] = ???\n\nval orElse: (E, Option[B]) => ZIO[R1, E2, B] = ???\n\nval repeated = action repeatOrElse (policy, orElse)\n")))}f.isMDXComponent=!0}}]);