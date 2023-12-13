"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[27694],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>y});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?t.createElement(y,i(i({ref:r},l),{},{components:n})):t.createElement(y,i({ref:r},l))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64987:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var t=n(87462),o=(n(67294),n(3905));const a={id:"union-types",title:"Use Union Types to Be More Specific About Error Types",sidebar_label:"Union Types"},i=void 0,c={unversionedId:"reference/error-management/best-practices/union-types",id:"reference/error-management/best-practices/union-types",title:"Use Union Types to Be More Specific About Error Types",description:"In Scala 3, we have an exciting new feature called union types. By using the union operator, we can encode multiple error types. Using this facility, we can have more precise information on typed errors.",source:"@site/docs/reference/error-management/best-practices/union-types.md",sourceDirName:"reference/error-management/best-practices",slug:"/reference/error-management/best-practices/union-types",permalink:"/reference/error-management/best-practices/union-types",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/best-practices/union-types.md",tags:[],version:"current",frontMatter:{id:"union-types",title:"Use Union Types to Be More Specific About Error Types",sidebar_label:"Union Types"},sidebar:"reference-sidebar",previous:{title:"Algebraic Data Types",permalink:"/reference/error-management/best-practices/algebraic-data-types"},next:{title:"Don't Type Unexpected Errors",permalink:"/reference/error-management/best-practices/unexpected-errors"}},p={},s=[],l={toc:s},m="wrapper";function d(e){let{components:r,...n}=e;return(0,o.kt)(m,(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Scala 3, we have an exciting new feature called union types. By using the union operator, we can encode multiple error types. Using this facility, we can have more precise information on typed errors."),(0,o.kt)("p",null,"Let's see an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage")," service which have ",(0,o.kt)("inlineCode",{parentName:"p"},"upload"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"download")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ntype Name = String\n\nenum StorageError extends Exception {\n  case ObjectExist(name: Name)            extends StorageError\n  case ObjectNotExist(name: Name)         extends StorageError\n  case PermissionDenied(cause: String)    extends StorageError\n  case StorageLimitExceeded(limit: Int)   extends StorageError\n  case BandwidthLimitExceeded(limit: Int) extends StorageError\n}\n\nimport StorageError.*\n\ntrait Storage {\n  def upload(\n      name: Name,\n      obj: Array[Byte]\n  ): ZIO[Any, ObjectExist | StorageLimitExceeded, Unit]\n\n  def download(\n      name: Name\n  ): ZIO[Any, ObjectNotExist | BandwidthLimitExceeded, Array[Byte]]\n\n  def delete(name: Name): ZIO[Any, ObjectNotExist | PermissionDenied, Unit]\n}\n")),(0,o.kt)("p",null,"Union types allow us to get rid of the requirement to extend some sort of common error types like ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable"),". This allows us to have completely unrelated error types."),(0,o.kt)("p",null,"In the following example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"FooError")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BarError")," are two distinct error. They have no super common type like ",(0,o.kt)("inlineCode",{parentName:"p"},"FooBarError")," and also they are not extending ",(0,o.kt)("inlineCode",{parentName:"p"},"Exception")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Throwable")," classes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.*\n\n// Two unrelated errors without having a common supertype\ntrait FooError\ntrait BarError\n\ndef foo: IO[FooError, Nothing] = ZIO.fail(new FooError {})\ndef bar: IO[BarError, Nothing] = ZIO.fail(new BarError {})\n\nval myApp: ZIO[Any, FooError | BarError, Unit] = for {\n  _ <- foo\n  _ <- bar\n} yield ()\n")))}d.isMDXComponent=!0}}]);