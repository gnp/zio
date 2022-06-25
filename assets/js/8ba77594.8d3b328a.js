"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(7462),o=(n(7294),n(3905));const r={id:"index",title:"Introduction"},i=void 0,s={unversionedId:"datatypes/test/environment/index",id:"datatypes/test/environment/index",title:"Introduction",description:"ZIO Test has out of the box test implementations for all standard ZIO environment types, such as Console, Clock, Random and System through the following modules:",source:"@site/docs/datatypes/test/environment/index.md",sourceDirName:"datatypes/test/environment",slug:"/datatypes/test/environment/",permalink:"/datatypes/test/environment/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/test/environment/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",previous:{title:"Assertion",permalink:"/datatypes/test/assertion"},next:{title:"TestConsole",permalink:"/datatypes/test/environment/console"}},l={},m=[],p={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ZIO Test has out of the box test implementations for all standard ZIO environment types, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Console"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Clock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Random")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"System")," through the following modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/datatypes/test/environment/console"},(0,o.kt)("inlineCode",{parentName:"a"},"TestConsole"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/datatypes/test/environment/clock"},(0,o.kt)("inlineCode",{parentName:"a"},"TestClock"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/datatypes/test/environment/random"},(0,o.kt)("inlineCode",{parentName:"a"},"TestRandom"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/datatypes/test/environment/system"},(0,o.kt)("inlineCode",{parentName:"a"},"TestSystem")))),(0,o.kt)("p",null,"Stability is what we expect from tests, at least those we consider unit tests. Consecutive runs should yield the same results and take more or less the same amount of time."),(0,o.kt)("p",null,"External services, such as payment APIs, object storages, HTTP APIs, are the biggest source of complexity during testing. It is normal to hide these kinds of services behind an interface and provide test instances to regain control and determinism."),(0,o.kt)("p",null,"However, there is another source of complexity that comes from the local infrastructure that is also hard to control without building prior abstractions. Things like stdin/stdout, clocks, random generators, schedulers can make writing tests hard or even impossible."),(0,o.kt)("p",null,"Fortunately, ZIO abstracted most of it in its runtime under ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment")," type. Thanks to this design ZIO Test could easily provide its own implementation named ",(0,o.kt)("inlineCode",{parentName:"p"},"TestEnvironment")," which gives us test implementations of mentioned infrastructure."),(0,o.kt)("p",null,"If we are using ZIO Test and extending ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIOSpecDefault")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestEnvironment")," containing all of them will be automatically provided to each of our tests. Otherwise, the easiest way to use the test implementations in ZIO Test is by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"TestEnvironment")," to our program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"myProgram.provide(testEnvironment)\n")),(0,o.kt)("p",null,"Then all environmental effects, such as printing to the console or generating random numbers, will be implemented by the ",(0,o.kt)("inlineCode",{parentName:"p"},"TestEnvironment"),' and will be fully testable. When we do need to access the "live" environment, for example to print debugging information to the console, we just use the ',(0,o.kt)("inlineCode",{parentName:"p"},"live")," combinator along with the effect as our normally would. "),(0,o.kt)("p",null,"If we are only interested in one of the test implementations for our application, we can also access them a la carte through the ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," method on each module. Each test module requires some data on initialization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"myProgram.provideCustom(TestConsole.make(TestConsole.Data()))\n")),(0,o.kt)("p",null,"Finally, we can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," object that implements the test interface directly using the ",(0,o.kt)("inlineCode",{parentName:"p"},"makeTest")," method. This can be useful when we want to access some testing functionality without using the environment type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  testRandom <- TestRandom.makeTest(TestRandom.DefaultData)\n  n          <- testRandom.nextInt\n} yield n\n")),(0,o.kt)("p",null,"This can also be useful when we are creating a more complex environment to provide the implementation for test services that we mix in."))}c.isMDXComponent=!0}}]);