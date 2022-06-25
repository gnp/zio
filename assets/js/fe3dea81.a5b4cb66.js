"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1579],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(r),d=n,y=u["".concat(p,".").concat(d)]||u[d]||l[d]||o;return r?a.createElement(y,s(s({ref:t},c),{},{components:r})):a.createElement(y,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=r[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={id:"stream",slug:"stream.md",title:"Stream"},s=void 0,i={unversionedId:"datatypes/stream/stream",id:"datatypes/stream/stream",title:"Stream",description:"Stream[E, A] is a type alias for ZStream[Any, E, A], which represents a ZIO stream that does not require any services, and may fail with an E, or produce elements with an A.",source:"@site/docs/datatypes/stream/stream.md",sourceDirName:"datatypes/stream",slug:"/datatypes/stream/stream.md",permalink:"/datatypes/stream/stream.md",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/stream/stream.md",tags:[],version:"current",frontMatter:{id:"stream",slug:"stream.md",title:"Stream"},sidebar:"datatypes-sidebar",previous:{title:"ZStream",permalink:"/datatypes/stream/zstream"},next:{title:"UStream",permalink:"/datatypes/stream/ustream"}},p={},m=[],c={toc:m};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Stream[E, A]")," is a type alias for ",(0,n.kt)("inlineCode",{parentName:"p"},"ZStream[Any, E, A]"),", which represents a ZIO stream that does not require any services, and may fail with an ",(0,n.kt)("inlineCode",{parentName:"p"},"E"),", or produce elements with an ",(0,n.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"type Stream[+E, +A] = ZStream[Any, E, A]\n")))}l.isMDXComponent=!0}}]);