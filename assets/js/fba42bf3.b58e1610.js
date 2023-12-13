"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[34703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"random",title:"TestRandom"},s=void 0,i={unversionedId:"reference/test/services/random",id:"reference/test/services/random",title:"TestRandom",description:"When working with randomness, testing might be hard because the inputs to the tested function change on every invocation. So our code behaves in an indeterministic way.",source:"@site/docs/reference/test/services/random.md",sourceDirName:"reference/test/services",slug:"/reference/test/services/random",permalink:"/reference/test/services/random",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/services/random.md",tags:[],version:"current",frontMatter:{id:"random",title:"TestRandom"},sidebar:"reference-sidebar",previous:{title:"TestClock",permalink:"/reference/test/services/clock"},next:{title:"TestSystem",permalink:"/reference/test/services/system"}},d={},l=[{value:"Initial Seed with Series of Internal State Transition",id:"initial-seed-with-series-of-internal-state-transition",level:2},{value:"Feeding Predefined Random Values",id:"feeding-predefined-random-values",level:2}],c={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When working with randomness, testing might be hard because the inputs to the tested function change on every invocation. So our code behaves in an indeterministic way."),(0,a.kt)("p",null,"Precisely because of this reason ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," exposes ",(0,a.kt)("inlineCode",{parentName:"p"},"TestRandom")," module which allows for fully deterministic testing of code that deals with Randomness. ",(0,a.kt)("inlineCode",{parentName:"p"},"TestRandom")," can operate in two modes based on the needed use-case. It can generate a sequence of psudeo-random values using an initial seed with series of internal state transition or by feeding predefined random values."),(0,a.kt)("h2",{id:"initial-seed-with-series-of-internal-state-transition"},"Initial Seed with Series of Internal State Transition"),(0,a.kt)("p",null,"In the first mode, the ",(0,a.kt)("inlineCode",{parentName:"p"},"TestRandom")," is a purely functional pseudo-random number generator. It will generate pseudo-random values just like ",(0,a.kt)("inlineCode",{parentName:"p"},"scala.util.Random"),". While the ",(0,a.kt)("inlineCode",{parentName:"p"},"scala.util.Random")," doesn't have internal state, the ",(0,a.kt)("inlineCode",{parentName:"p"},"TestRandom")," has an internal state. Instead, methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"nextInt")," describe state transitions from one random state to another that are automatically composed together through methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"flatMap"),". "),(0,a.kt)("p",null,"The random seed can be set using ",(0,a.kt)("inlineCode",{parentName:"p"},"setSeed")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TestRandom")," is guaranteed to return the same sequence of values for any given seed. This is useful for deterministically generating a sequence of pseudo-random values and powers the property based testing functionality in ZIO Test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\n\ntest("Use setSeed to generate stable values") {\n  for {\n    _ <- TestRandom.setSeed(27)\n    r1 <- Random.nextLong\n    r2 <- Random.nextLong\n    r3 <- Random.nextLong\n  } yield\n    assertTrue(\n      List(r1, r2, r3) == List[Long](\n        -4947896108136290151L,\n        -5264020926839611059L,\n        -9135922664019402287L\n      )\n    )\n}\n// res0: Spec[Any, Nothing] = Spec(\n//   caseValue = LabeledCase(\n//     label = "Use setSeed to generate stable values",\n//     spec = Spec(\n//       caseValue = TestCase(\n//         test = OnSuccess(\n//           trace = "repl.MdocSession.MdocApp.res0(random.md:17)",\n//           first = Stateful(\n//             trace = "repl.MdocSession.MdocApp.res0(random.md:17)",\n//             onState = zio.ZIO$$$Lambda$17934/0x00007f75b6c6bc28@22337a7f\n//           ),\n//           successK = zio.test.package$ZTest$$$Lambda$17935/0x00007f75b6c6c3e8@5718a5d5\n//         ),\n//         annotations = Map(zio.test.TestAnnotation@b4aaf9ee -> List(SourceLocation(random.md,17)))\n//       )\n//     )\n//   )\n// )\n')),(0,a.kt)("h2",{id:"feeding-predefined-random-values"},"Feeding Predefined Random Values"),(0,a.kt)("p",null,"In the second mode, ",(0,a.kt)("inlineCode",{parentName:"p"},"TestRandom")," maintains an internal buffer of values that can be ",(0,a.kt)("em",{parentName:"p"},"fed")," with methods such as ",(0,a.kt)("inlineCode",{parentName:"p"},"feedInts")," and then when random values of that type are generated they will first be taken from the buffer. This is useful for verifying that functions produce the expected output for a given sequence of ",(0,a.kt)("em",{parentName:"p"},"random")," inputs."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TestRandom")," will automatically take values from the buffer if a value of the appropriate type is available and otherwise generate a pseudo-random value, so there is nothing we need to do to switch between the two modes. Just generate random values as we normally would to get pseudo-random values, or feed in values of our own to get those values back."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\n\ntest("One can provide its own list of ints") {\n  for {\n    _ <- TestRandom.feedInts(1, 9, 2, 8, 3, 7, 4, 6, 5)\n    r1 <- Random.nextInt\n    r2 <- Random.nextInt\n    r3 <- Random.nextInt\n    r4 <- Random.nextInt\n    r5 <- Random.nextInt\n    r6 <- Random.nextInt\n    r7 <- Random.nextInt\n    r8 <- Random.nextInt\n    r9 <- Random.nextInt\n  } yield assertTrue(\n    List(1, 9, 2, 8, 3, 7, 4, 6, 5) == List(r1, r2, r3, r4, r5, r6, r7, r8, r9)\n  )\n}\n')),(0,a.kt)("p",null,"We can also use methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"clearInts")," to clear the buffer of values of a given type, so we can fill the buffer with new values or go back to pseudo-random number generation."))}p.isMDXComponent=!0}}]);