"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[23053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"index",title:"Introduction to ZIO Http",sidebar_label:"ZIO Http"},o=void 0,l={unversionedId:"zio-http/index",id:"zio-http/index",title:"Introduction to ZIO Http",description:"ZIO HTTP is a scala library for building http apps. It is powered by ZIO and Netty and aims at being the defacto solution for writing, highly scalable and performant web applications using idiomatic Scala.",source:"@site/docs/zio-http/index.md",sourceDirName:"zio-http",slug:"/zio-http/",permalink:"/zio-http/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Http",sidebar_label:"ZIO Http"},sidebar:"ecosystem-sidebar",previous:{title:"Internals",permalink:"/zio-flow/internals"},next:{title:"Setup",permalink:"/zio-http/setup"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Steps to run an example",id:"steps-to-run-an-example",level:2},{value:"Watch Mode",id:"watch-mode",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ZIO HTTP is a scala library for building http apps. It is powered by ZIO and ",(0,r.kt)("a",{parentName:"p",href:"https://netty.io/"},"Netty")," and aims at being the defacto solution for writing, highly scalable and performant web applications using idiomatic Scala."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Development-green.svg",alt:"Development"}))," ",(0,r.kt)("img",{parentName:"p",src:"https://github.com/zio/zio-http/workflows/Continuous%20Integration/badge.svg",alt:"CI Badge"})," ",(0,r.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-http_2.13/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-http_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-http_2.13/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-http_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-http-docs_2.13"},(0,r.kt)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-http-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-http"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-http?style=social",alt:"ZIO Http"}))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Setup via ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-http" % "3.0.0-RC3"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTES ON VERSIONING:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Older library versions ",(0,r.kt)("inlineCode",{parentName:"li"},"1.x")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"2.x")," with organization ",(0,r.kt)("inlineCode",{parentName:"li"},"io.d11")," of ZIO Http are derived from Dream11, the organization that donated ZIO Http to the ZIO organization in 2022. "),(0,r.kt)("li",{parentName:"ul"},"Newer library versions, starting in 2023 and resulting from the ZIO organization (",(0,r.kt)("inlineCode",{parentName:"li"},"dev.zio"),") started with ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.x"),", reaching ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0.0")," release candidates in April of 2023")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"A simple Http server can be built using a few lines of code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\n\nobject HelloWorld extends ZIOAppDefault {\n\n  val app: HttpApp[Any] = \n    Routes(\n      Method.GET / "text" -> handler(Response.text("Hello World!"))\n    ).toHttpApp\n\n  override val run =\n    Server.serve(app).provide(Server.default)\n}\n')),(0,r.kt)("h2",{id:"steps-to-run-an-example"},"Steps to run an example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edit the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/zio/zio-http/blob/main/project/BuildHelper.scala#L107"},"RunSettings")," - modify ",(0,r.kt)("inlineCode",{parentName:"li"},"className")," to the example you'd like to run."),(0,r.kt)("li",{parentName:"ol"},"From sbt shell, run ",(0,r.kt)("inlineCode",{parentName:"li"},"~example/reStart"),". You should see ",(0,r.kt)("inlineCode",{parentName:"li"},"Server started on port: 8080"),"."),(0,r.kt)("li",{parentName:"ol"},"Send curl request for defined ",(0,r.kt)("inlineCode",{parentName:"li"},"http Routes"),", for eg : ",(0,r.kt)("inlineCode",{parentName:"li"},'curl -i "http://localhost:8080/text"')," for ",(0,r.kt)("inlineCode",{parentName:"li"},"example.HelloWorld"),".")),(0,r.kt)("h2",{id:"watch-mode"},"Watch Mode"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spray/sbt-revolver"},"sbt-revolver")," plugin to start the server and run it in watch mode using ",(0,r.kt)("inlineCode",{parentName:"p"},"~ reStart")," command on the SBT console."))}u.isMDXComponent=!0}}]);