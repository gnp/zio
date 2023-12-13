"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[52255],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=a,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},27846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={id:"gracefully-shutdown-zio-application",title:"Tutorial: How to Gracefully Shutdown ZIO Applications?",sidebar_label:"Gracefully Shutdown ZIO Applications"},o=void 0,s={unversionedId:"guides/tutorials/gracefully-shutdown-zio-application",id:"guides/tutorials/gracefully-shutdown-zio-application",title:"Tutorial: How to Gracefully Shutdown ZIO Applications?",description:"Introduction",source:"@site/docs/guides/tutorials/gracefully-shutdown-zio-application.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/gracefully-shutdown-zio-application",permalink:"/guides/tutorials/gracefully-shutdown-zio-application",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/gracefully-shutdown-zio-application.md",tags:[],version:"current",frontMatter:{id:"gracefully-shutdown-zio-application",title:"Tutorial: How to Gracefully Shutdown ZIO Applications?",sidebar_label:"Gracefully Shutdown ZIO Applications"},sidebar:"guides-sidebar",previous:{title:"Building a GraphQL Web Service",permalink:"/guides/tutorials/build-a-graphql-webservice"},next:{title:"Cats Effect",permalink:"/guides/interop/with-cats-effect"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Graceful Shutdown?",id:"what-is-graceful-shutdown",level:2},{value:"Releasing Resources Before App Termination",id:"releasing-resources-before-app-termination",level:2},{value:"Adding Finalizer Before App Termination",id:"adding-finalizer-before-app-termination",level:2},{value:"Graceful Shutdown and Resource Management in ZIO Applications",id:"graceful-shutdown-and-resource-management-in-zio-applications",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Graceful shutdown is a critical aspect of building robust and reliable software applications. It ensures that an application terminates smoothly, allowing it to complete necessary operations, release resources, and exit in a controlled manner."),(0,a.kt)("p",null,"In this article, we will explore how to achieve a graceful shutdown in ZIO applications, leveraging the power of the ZIO functional effect system."),(0,a.kt)("h2",{id:"what-is-graceful-shutdown"},"What is Graceful Shutdown?"),(0,a.kt)("p",null,"Graceful shutdown refers to the process of stopping an application in a controlled and orderly manner."),(0,a.kt)("p",null,"Graceful shutdowns are applicable in various scenarios where we need to ensure the proper and controlled termination of an application or service. Some common use cases for graceful shutdowns include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Server Applications"),": When stopping a server application, such as a web server, API server, or message broker, it's essential to gracefully handle incoming requests, complete ongoing operations, and release resources before shutting down. Graceful shutdowns prevent data loss, ensure clean client disconnections, and maintain service availability for existing requests.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Database Connections"),": Graceful shutdowns are important when closing database connections to ensure that pending transactions are committed or rolled back, and resources are released. This helps maintain data integrity and prevent blocking or deadlocking issues caused by abrupt connection closures.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Background Processes and Workers"),": Graceful shutdowns are relevant for long-running background processes, worker threads, or scheduled tasks. They provide a mechanism to stop these processes gracefully, complete their current work items, and release any acquired resources before exiting.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Service-oriented Architectures"),": In a service-oriented architecture, where multiple services communicate with each other, graceful shutdowns enable services to notify their dependencies, complete pending requests, and gracefully disconnect from other services before shutting down.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Streaming and Data Processing Applications"),": Graceful shutdowns are crucial for streaming applications or data processing pipelines. They provide a mechanism to complete in-flight data processing, flush buffers, and ensure data consistency before stopping the application."))),(0,a.kt)("p",null,"In summary, graceful shutdowns are relevant in a wide range of scenarios where we need to ensure the proper completion of ongoing operations, release resources, and maintain system integrity before terminating an application or service. They play a crucial role in ensuring data consistency, preventing resource leaks, and providing a smooth user experience during application shutdown."),(0,a.kt)("h2",{id:"releasing-resources-before-app-termination"},"Releasing Resources Before App Termination"),(0,a.kt)("p",null,"To ensure that all resources are released before our application terminates, we need to ensure that we have managed all resources using ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO.acquireRelease*")," operations. It ensures that resources are properly acquired when needed and released when they are no longer required. In their release action, we should perform any clean-up operation needed to make sure our termination process is graceful."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def acquireRelease[R, R1, E, A](\n      acquire: => ZIO[R, E, A]\n    )(\n      release: A => ZIO[R1, Nothing, Any]\n    ): ZIO[R with R1 with Scope, E, A]\n}\n")),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"acquireRelease")," method, involve another data type called ",(0,a.kt)("inlineCode",{parentName:"p"},"Scope"),". For further details, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/reference/resource/scope"},(0,a.kt)("inlineCode",{parentName:"a"},"Scope"))," page on the documentation project."),(0,a.kt)("h2",{id:"adding-finalizer-before-app-termination"},"Adding Finalizer Before App Termination"),(0,a.kt)("p",null,"By using ",(0,a.kt)("inlineCode",{parentName:"p"},"ensuring"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"onExit")," in our ZIO application, we are explicitly specifying the clean-up logic that needs to be executed regardless of the outcome (success, failure, or interruption) of the ZIO effect."),(0,a.kt)("p",null,"The overall process is like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject GracefulShutdownExample extends ZIOAppDefault {\n\n  def appLogic = {\n    // Your application logic goes here\n    ZIO.unit\n  }\n\n  def cleanup = {\n    // Perform cleanup operations here\n    ZIO.unit\n  }\n\n  override def run = appLogic.ensuring(cleanup)\n}\n")),(0,a.kt)("p",null,"We can categorize these finalizers into two categories:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If we don't require the exit status of effect, we can use ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO#ensuring"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  final def ensuring[R1 <: R](finalizer: => URIO[R1, Any]): ZIO[R1, E, A]\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"If we need the exit status of effect, we can use ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO#onExit"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  final def onExit[R1 <: R](cleanup: Exit[E, A] => URIO[R1, Any]): ZIO[R1, E, A]\n}\n")),(0,a.kt)("h2",{id:"graceful-shutdown-and-resource-management-in-zio-applications"},"Graceful Shutdown and Resource Management in ZIO Applications"),(0,a.kt)("p",null,"When building a ZIO application that integrates with external libraries such as ZIO HTTP, ZIO kafka, ZIO Redis, or any other resourceful ZIO libraries, it's common to rely on those libraries' built-in resource management utilities, often implemented using ZIO's ",(0,a.kt)("inlineCode",{parentName:"p"},"acquireRelease")," or similar mechanisms."),(0,a.kt)("p",null,"When we introduce an additional clean-up task using ZIO's ensuring operator within our ZIO application, we not only ensure that the clean-up task will be executed regardless of whether the entire app succeeds, fails, or is interrupted, but we also ensure that all the resources managed by those external libraries will be properly initialized and released. This ensures that our application can gracefully shut down while handling any in-flight incoming requests or ongoing operations with the integrated libraries."),(0,a.kt)("p",null,"This allows us to coordinate the release of resources, complete pending operations, and ensure the stability and consistency of our application during the shutdown process."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"The combination of ZIO's ensuring operator and the resource management utilities provided by the integrated libraries ensures that the resources acquired by those libraries will be released properly. This helps prevent resource leaks, maintain data integrity, and provide a graceful shutdown experience for our ZIO application, including handling ongoing requests and tasks."))}d.isMDXComponent=!0}}]);