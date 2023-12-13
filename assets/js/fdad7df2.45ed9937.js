"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[79348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},23313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={id:"run-our-first-zio-project-with-intellij-idea",title:"Tutorial: How to Run Our First ZIO Project With IntelliJ IDEA?",sidebar_label:"Running Our First ZIO Project With IntelliJ IDEA"},l=void 0,o={unversionedId:"guides/tutorials/run-our-first-zio-project-with-intellij-idea",id:"guides/tutorials/run-our-first-zio-project-with-intellij-idea",title:"Tutorial: How to Run Our First ZIO Project With IntelliJ IDEA?",description:"Introduction",source:"@site/docs/guides/tutorials/running-our-first-zio-project-with-intellij-idea.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/run-our-first-zio-project-with-intellij-idea",permalink:"/guides/tutorials/run-our-first-zio-project-with-intellij-idea",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/running-our-first-zio-project-with-intellij-idea.md",tags:[],version:"current",frontMatter:{id:"run-our-first-zio-project-with-intellij-idea",title:"Tutorial: How to Run Our First ZIO Project With IntelliJ IDEA?",sidebar_label:"Running Our First ZIO Project With IntelliJ IDEA"},sidebar:"guides-sidebar",previous:{title:"Running Our First ZIO Project With VSCode",permalink:"/guides/tutorials/run-our-first-zio-project-with-vscode"},next:{title:"Deploying a ZIO Application Using Docker",permalink:"/guides/tutorials/deploy-a-zio-application-using-docker"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Scala and ZIO plugins",id:"installing-scala-and-zio-plugins",level:2},{value:"Creating a New Project",id:"creating-a-new-project",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Running ZIO Tests",id:"running-zio-tests",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"IntelliJ IDEA is a popular IDE for Java developers. It is a powerful tool for developing Java applications. Fortunately, not only does it support the Java language, but it also supports many other languages, including Scala."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"We assume that the reader has already installed IntelliJ IDEA. To download the latest version of IntelliJ IDEA, visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download/"},"IntelliJ IDEA download page"),"."),(0,r.kt)("h2",{id:"installing-scala-and-zio-plugins"},"Installing Scala and ZIO plugins"),(0,r.kt)("p",null,"To add the Scala support for IntelliJ IDEA, we need to install the ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/scala"},"Scala plugin"),". This plugin supports projects that are written in Scala along with the SBT build tool like the ZIO projects."),(0,r.kt)("p",null,"Besides the Scala plugin, in this tutorial we will also use the ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/zio"},"ZIO plugin"),", to create a new ZIO project from predefined templates."),(0,r.kt)("p",null,"Both of these plugins are available in the IntelliJ IDEA marketplace. We should follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the IntelliJ IDEA settings by pressing the ",(0,r.kt)("em",{parentName:"li"},"Ctrl+Alt+S")," key combination."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("em",{parentName:"li"},"Plugins")," tab."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("em",{parentName:"li"},"Marketplace")," tab."),(0,r.kt)("li",{parentName:"ol"},"Search for the ",(0,r.kt)("em",{parentName:"li"},"Scala")," plugin and click on the ",(0,r.kt)("em",{parentName:"li"},"Install")," button."),(0,r.kt)("li",{parentName:"ol"},"Search for the ",(0,r.kt)("em",{parentName:"li"},"ZIO for IntelliJ")," plugin and click on the ",(0,r.kt)("em",{parentName:"li"},"Install")," button."),(0,r.kt)("li",{parentName:"ol"},"Finally, we might need to restart IntelliJ IDEA.")),(0,r.kt)("h2",{id:"creating-a-new-project"},"Creating a New Project"),(0,r.kt)("p",null,"To create a new ZIO project, we will use the ",(0,r.kt)("em",{parentName:"p"},"ZIO for IntelliJ")," plugin. This plugin provides a new project template that we can use to create a new ZIO project."),(0,r.kt)("p",null,"First, click on the ",(0,r.kt)("em",{parentName:"p"},"File > New > Project ...")," menu. This will open a dialog that lets us choose the project type:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IntelliJ IDEA new project dialog",src:n(72138).Z,width:"820",height:"681"})),(0,r.kt)("p",null,"Then, we can choose the ",(0,r.kt)("em",{parentName:"p"},"ZIO project (with sbt)")," project type. It will create a new ZIO project with the sbt build tool:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IntelliJ IDEA new project dialog",src:n(23785).Z,width:"938",height:"694"})),(0,r.kt)("p",null,"It asks us to choose the project name, its location, the ZIO version and other related settings. After entering the project details, we can click on the ",(0,r.kt)("em",{parentName:"p"},"Create")," button:"),(0,r.kt)("p",null,"It will create a new ZIO project and open it in the IntelliJ IDEA. From here, we can start working on the project."),(0,r.kt)("h2",{id:"running-the-application"},"Running the Application"),(0,r.kt)("p",null,"IntelliJ IDEA provides a green run button beside any classes that is executable. So if we open the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/scala/Main.scala")," file, we can see the run button. By clicking on that we can see that the IntelliJ IDEA start to compile and run the ",(0,r.kt)("inlineCode",{parentName:"p"},"Main")," class."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))," "),(0,r.kt)("p",{parentName:"blockquote"},"At the time of writing this tutorial, the ",(0,r.kt)("em",{parentName:"p"},"ZIO for IntelliJ")," doesn't provide a right template for ZIO 2.x projects. So let's write our own Main class:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject Main extends ZIOAppDefault {\n  def run = Console.printLine("Hello, world!")\n}\n'))),(0,r.kt)("h2",{id:"running-zio-tests"},"Running ZIO Tests"),(0,r.kt)("p",null,"IntelliJ IDEA can run tests in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," directory. Let's create a new test class ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleSpec")," and add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/test/scala")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nobject ExampleSpec extends ZIOSpecDefault {\n  def spec =\n    suite("spec")(\n      test("test1") {\n        assertTrue(true)\n      },\n      test("test2") {\n        assertTrue(false)\n      }\n    )\n}\n')),(0,r.kt)("p",null,"The IntelliJ IDEA detects the tests and places a run button beside them. So we can click on the run button, and it will run the tests:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"IntelliJ IDEA test output",src:n(9442).Z,width:"947",height:"336"})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this tutorial, we have learned how to create a new ZIO project in IntelliJ IDEA. Then we learned how to run ZIO applications and ZIO tests in IntelliJ IDEA."))}d.isMDXComponent=!0},72138:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/intellij-idea-new-project-1-a9e47bc3cb6234afef2df3ada396c726.png"},23785:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/intellij-idea-new-project-2-0fbcecb2b245afacafe7d701ce820eeb.png"},9442:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/intellij-idea-test-runner-output-dfc0dfee87caf72173f82484542a8f46.png"}}]);