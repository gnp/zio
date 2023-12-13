"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[58078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"hello-world",title:"ZIO Quickstart: Hello World",sidebar_label:"Hello World"},o=void 0,l={unversionedId:"guides/quickstarts/hello-world",id:"guides/quickstarts/hello-world",title:"ZIO Quickstart: Hello World",description:"This is the simplest quickstart for a ZIO application. You can download and run it very quickly. This will give you an idea of how to write similar apps.",source:"@site/docs/guides/quickstarts/hello-world.md",sourceDirName:"guides/quickstarts",slug:"/guides/quickstarts/hello-world",permalink:"/guides/quickstarts/hello-world",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/quickstarts/hello-world.md",tags:[],version:"current",frontMatter:{id:"hello-world",title:"ZIO Quickstart: Hello World",sidebar_label:"Hello World"},sidebar:"guides-sidebar",previous:{title:"Overview",permalink:"/guides/"},next:{title:"RESTful Web Service",permalink:"/guides/quickstarts/restful-webservice"}},s={},p=[{value:"Running The Example",id:"running-the-example",level:2},{value:"Testing The Quickstart",id:"testing-the-quickstart",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the simplest quickstart for a ZIO application. You can download and run it very quickly. This will give you an idea of how to write similar apps."),(0,i.kt)("h2",{id:"running-the-example"},"Running The Example"),(0,i.kt)("p",null,"First, open the console and clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-quickstarts"},"ZIO Quickstarts")," project using ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," (or you can simply download the project) and then change the directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"git clone git@github.com:zio/zio-quickstarts.git \ncd zio-quickstarts/zio-quickstart-hello-world\n")),(0,i.kt)("p",null,"Once you are inside the project directory, run the application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sbt run\n")),(0,i.kt)("h2",{id:"testing-the-quickstart"},"Testing The Quickstart"),(0,i.kt)("p",null,"When we prompt the ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt run")," the sbt search for the executable class and will find the ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.dev.quickstart.MainApp")," which contains the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run = Console.printLine("Hello, World!")\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MainApp")," is the main object of our application which extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIOAppDefault")," trait. This trait provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function which can be invoked from IDEs or the command-line, e.g. the ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt run"),"."),(0,i.kt)("p",null,"This example is the simplest, example we can run. Let's change it so that we ask the name of the user and print a hello along with the user's name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    for {\n      _    <- Console.print("Please enter your name: ")\n      name <- Console.readLine\n      _    <- Console.printLine(s"Hello, $name!")\n    } yield ()\n}\n')),(0,i.kt)("p",null,"In this example, we used ",(0,i.kt)("inlineCode",{parentName:"p"},"for-comprehension")," to compose ",(0,i.kt)("inlineCode",{parentName:"p"},"print"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"readLine")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"printLine")," workflows. We can think of it as the following ",(0,i.kt)("inlineCode",{parentName:"p"},"flatMap")," operations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    Console.print("Please enter your name: ")\n      .flatMap { _ =>\n        Console.readLine\n          .flatMap { name =>\n            Console.printLine(s"Hello, $name!")\n          }\n      }\n}\n')))}d.isMDXComponent=!0}}]);