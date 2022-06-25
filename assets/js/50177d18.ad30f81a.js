"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"sink",title:"Sink"},o=void 0,s={unversionedId:"datatypes/stream/sink",id:"datatypes/stream/sink",title:"Sink",description:"Sink[E, A, L, B] is a type alias for ZSink[Any, E, A, L, B]. We can think of a Sink as a function that does not require any services and will consume a variable amount of A elements (could be 0, 1, or many!), might fail with an error of type E, and will eventually yield a value of type B. The L is the type of elements in the leftover.",source:"@site/docs/datatypes/stream/sink.md",sourceDirName:"datatypes/stream",slug:"/datatypes/stream/sink",permalink:"/datatypes/stream/sink",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/stream/sink.md",tags:[],version:"current",frontMatter:{id:"sink",title:"Sink"},sidebar:"datatypes-sidebar",previous:{title:"ZSink",permalink:"/datatypes/stream/zsink"},next:{title:"SubscriptionRef",permalink:"/datatypes/stream/subscription-ref"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Sink[E, A, L, B]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZSink[Any, E, A, L, B]"),". We can think of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Sink")," as a function that does not require any services and will consume a variable amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," elements (could be 0, 1, or many!), might fail with an error of type ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),", and will eventually yield a value of type ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"L")," is the type of elements in the leftover."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type Sink[+E, A, +L, +B] = ZSink[Any, E, A, L, B]\n")))}u.isMDXComponent=!0}}]);