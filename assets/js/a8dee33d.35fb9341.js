"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=n,d=u["".concat(p,".").concat(y)]||u[y]||m[y]||o;return r?a.createElement(d,i(i({ref:t},l),{},{components:r})):a.createElement(d,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={id:"ustream",title:"UStream"},i=void 0,s={unversionedId:"datatypes/stream/ustream",id:"datatypes/stream/ustream",title:"UStream",description:"UStream[A] is a type alias for ZStream[Any, Nothing, A], which represents a ZIO stream that does not require any services, it cannot fail, and after evaluation, it may emit zero or more values of type A.",source:"@site/docs/datatypes/stream/ustream.md",sourceDirName:"datatypes/stream",slug:"/datatypes/stream/ustream",permalink:"/datatypes/stream/ustream",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/stream/ustream.md",tags:[],version:"current",frontMatter:{id:"ustream",title:"UStream"},sidebar:"datatypes-sidebar",previous:{title:"Stream",permalink:"/datatypes/stream/stream.md"},next:{title:"ZPipeline",permalink:"/datatypes/stream/zpipeline"}},p={},c=[],l={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"UStream[A]")," is a type alias for ",(0,n.kt)("inlineCode",{parentName:"p"},"ZStream[Any, Nothing, A]"),", which represents a ZIO stream that does not require any services, it cannot fail, and after evaluation, it may emit zero or more values of type ",(0,n.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"type UStream[+A] = ZStream[Any, Nothing, A]\n")))}m.isMDXComponent=!0}}]);