"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[72362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"using-optics",title:"Using Optics"},a=void 0,s={unversionedId:"zio-optics/using-optics",id:"zio-optics/using-optics",title:"Using Optics",description:"We can use optics to work with our data structures using the get, set, and update operators on Optic.",source:"@site/docs/zio-optics/using_optics.md",sourceDirName:"zio-optics",slug:"/zio-optics/using-optics",permalink:"/zio-optics/using-optics",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-optics/using_optics.md",tags:[],version:"current",frontMatter:{id:"using-optics",title:"Using Optics"},sidebar:"ecosystem-sidebar",previous:{title:"Composing Optics",permalink:"/zio-optics/composing-optics"},next:{title:"Effectual Optics",permalink:"/zio-optics/effectual-optics"}},p={},c=[],l={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We can use optics to work with our data structures using the ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"set"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," operators on ",(0,o.kt)("inlineCode",{parentName:"p"},"Optic"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.optics._\n\ncase class Person(name: String, age: Int)\n\nobject Person {\n  val age: Lens[Person, Int] =\n    Lens(\n      person => Right(person.age),\n      age => person => Right(person.copy(age = age))\n    )\n}\n\nval person = Person("Jane Doe", 42)\n// person: Person = Person(name = "Jane Doe", age = 42)\n\nPerson.age.get(person)\n// res0: optics.package.OpticResult[Nothing, Int] = Right(value = 42)\n\nPerson.age.set(43)(person)\n// res1: optics.package.OpticResult[Nothing, Person] = Right(\n//   value = Person(name = "Jane Doe", age = 43)\n// )\n\nPerson.age.update(person)(_ + 1)\n// res2: optics.package.OpticResult[Nothing, Person] = Right(\n//   value = Person(name = "Jane Doe", age = 43)\n// )\n')),(0,o.kt)("p",null,'In addition to this, ZIO Optics provides support for accessing values directly using "dot" syntax with the ',(0,o.kt)("inlineCode",{parentName:"p"},"optic")," operator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val map: Map[String, Either[String, Chunk[Int]]] =\n  ???\n\nval updated: Either[OpticFailure, Map[String, Either[String, Chunk[Int]]]] =\n  map.optic.key("key").right.at(0).update(_ + 1)\n')),(0,o.kt)("p",null,"Note that this syntax is currently only available for optics defined in ZIO Optics. When automatic derivation of optics is introduced this syntax will be supported for user defined data structures as well."))}g.isMDXComponent=!0}}]);