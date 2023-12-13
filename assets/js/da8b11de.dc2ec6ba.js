"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={id:"dynamic-test-generation",title:"Dynamic Test Generation"},i=void 0,o={unversionedId:"reference/test/dynamic-test-generation",id:"reference/test/dynamic-test-generation",title:"Dynamic Test Generation",description:"Tests in ZIO are dynamic. Meaning that they are not required to be statically defined at compile time. They can be generated at runtime effectfully.",source:"@site/docs/reference/test/dynamic-test-generation.md",sourceDirName:"reference/test",slug:"/reference/test/dynamic-test-generation",permalink:"/reference/test/dynamic-test-generation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/dynamic-test-generation.md",tags:[],version:"current",frontMatter:{id:"dynamic-test-generation",title:"Dynamic Test Generation"},sidebar:"reference-sidebar",previous:{title:"Timing-out Tests",permalink:"/reference/test/aspects/timing-out-tests"},next:{title:"Introduction To Property Testing",permalink:"/reference/test/property-testing/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tests in ZIO are dynamic. Meaning that they are not required to be statically defined at compile time. They can be generated at runtime effectfully."),(0,a.kt)("p",null,"Assume we have implemented the ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," operator which adds two numbers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"def add(a: Int, b: Int): Int = ???\n")),(0,a.kt)("p",null,"We want to test this function using the following test data inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:'title="src/test/resources/test-data.csv"',title:'"src/test/resources/test-data.csv"'},"0, 0, 0\n1, 0, 1\n0, 1, 1\n0, -1, -1\n-1, 0, -1\n1, 1, 2\n1, -1, 0\n-1, 1, 0\n")),(0,a.kt)("p",null,"Let's load it and create a bunch of tests using this test data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test._\nimport zio.test.test\n\ndef loadTestData: Task[List[((Int, Int), Int)]] =\n  ZIO.attemptBlocking(\n    scala.io.Source\n      .fromResource("test-data.csv")\n      .getLines()\n      .toList\n      .map(_.split(\',\').map(_.trim))\n      .map(i => ((i(0).toInt, i(1).toInt), i(2).toInt))\n  )\n  \ndef makeTest(a: Int, b: Int)(expected: Int): Spec[Any, Nothing] =\n  test(s"test add($a, $b) == $expected") {\n    assertTrue(add(a, b) == expected)\n  }\n\ndef makeTests: ZIO[Any, Throwable, List[Spec[Any, Nothing]]] =\n  loadTestData.map { testData =>\n    testData.map { case ((a, b), expected) =>\n      makeTest(a, b)(expected)\n    }\n  }\n')),(0,a.kt)("p",null,"Now we are ready to run all generated tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test._\n\nobject AdditionSpec extends ZIOSpecDefault {\n  override def spec = suite("add")(makeTests)\n}\n')),(0,a.kt)("p",null,"Here is the test runner's output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"+ add\n  + test add(0, 0) == 0\n  + test add(1, 0) == 1\n  + test add(0, -1) == -1\n  + test add(0, 1) == 1\n  + test add(-1, 1) == 0\n  + test add(1, -1) == 0\n  + test add(1, 1) == 2\n  + test add(-1, 0) == -1\n8 tests passed. 0 tests failed. 0 tests ignored.\n")))}u.isMDXComponent=!0}}]);