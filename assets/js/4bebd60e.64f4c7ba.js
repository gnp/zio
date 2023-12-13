"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[70394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"routes",title:"Routes"},l=void 0,s={unversionedId:"zio-http/dsl/routes",id:"zio-http/dsl/routes",title:"Routes",description:"Routes models a collection of routes, each of which is defined by a pattern and a handler.",source:"@site/docs/zio-http/dsl/routes.md",sourceDirName:"zio-http/dsl",slug:"/zio-http/dsl/routes",permalink:"/zio-http/dsl/routes",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/dsl/routes.md",tags:[],version:"current",frontMatter:{id:"routes",title:"Routes"},sidebar:"ecosystem-sidebar",previous:{title:"Server",permalink:"/zio-http/dsl/server"},next:{title:"Request",permalink:"/zio-http/dsl/request"}},i={},p=[{value:"Building Routes",id:"building-routes",level:2},{value:"Combining Routes",id:"combining-routes",level:2},{value:"Transforming Routes",id:"transforming-routes",level:2},{value:"Special Constructors Handler",id:"special-constructors-handler",level:2},{value:"Handler.ok",id:"handlerok",level:3},{value:"Handler.text",id:"handlertext",level:3},{value:"Handler.status",id:"handlerstatus",level:3},{value:"Handler.error",id:"handlererror",level:3},{value:"Handler.response",id:"handlerresponse",level:3},{value:"Special operators on Handler",id:"special-operators-on-handler",level:2},{value:"method",id:"method",level:3},{value:"patch",id:"patch",level:3},{value:"Converting <code>Routes</code> to <code>HttpApp</code>",id:"converting-routes-to-httpapp",level:2},{value:"Running an App",id:"running-an-app",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Routes")," models a collection of routes, each of which is defined by a pattern and a handler.\nThis data type can be thought of as modeling a routing table,  which decides where to direct\nevery endpoint in an API based on both method and path of the request."),(0,a.kt)("p",null,"When you are done building a collection of routes, you typically convert the routes into an\nHTTP application, which you can then execute with the server."),(0,a.kt)("p",null,"Routes may have handled or unhandled errors. A route of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Route[Env, Throwable]"),", for example,\nhas not handled its errors by converting them into* responses. Such unfinished routes cannot yet\nbe converted into HTTP applications. First, you must handle errors with the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleError")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"handleErrorCause")," methods."),(0,a.kt)("h2",{id:"building-routes"},"Building Routes"),(0,a.kt)("p",null,"You can build routes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Routes.apply")," constructor, which takes varargs of individual ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," values, or you can build empty routes with ",(0,a.kt)("inlineCode",{parentName:"p"},"Routes.empty"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.http._ \n\nval routes1 = Routes.empty\n")),(0,a.kt)("p",null,"Although you can build ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," values by using the constructors of ",(0,a.kt)("inlineCode",{parentName:"p"},"Route"),", you may prefer to use the DSL for constructing routes which starts in ",(0,a.kt)("inlineCode",{parentName:"p"},"Method"),"."),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," operator of ",(0,a.kt)("inlineCode",{parentName:"p"},"Method"),", you can construct route patterns, which can then be bound to handlers, to create a fully formed route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val routes2 = \n  Routes(\n    Method.GET / "hello"   -> Handler.ok,\n    Method.GET / "goodbye" -> Handler.ok\n  )\n')),(0,a.kt)("h2",{id:"combining-routes"},"Combining Routes"),(0,a.kt)("p",null,"The only way to combine two routes collections is to concatenate them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"++")," operator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val routes3 = routes1 ++ routes2\n")),(0,a.kt)("p",null,"If the routes have any overlap in their route patterns, then those on the left-side will take\nprecedence over those on the right-hand side."),(0,a.kt)("h2",{id:"transforming-routes"},"Transforming Routes"),(0,a.kt)("p",null,"Since routes are just a collection of individual routes, you can transform them in all the same\nways that you can transform an individual route. You could do this manually, by building new\nroutes from the old collection of routes, but there are several convenient methods that do\nthis for you:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Routes#handleError")," - Handles the error of all routes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Routes#timeout")," - Times out all routes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Routes#@@")," -- Transforms all routes")),(0,a.kt)("h1",{id:"what-is-httpapp"},"What is HttpApp?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HttpApp[-R]")," represents a fully-specified HTTP application that can be executed by the server."),(0,a.kt)("h2",{id:"special-constructors-handler"},"Special Constructors Handler"),(0,a.kt)("p",null,"These are some special constructors for ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpApp")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler"),":"),(0,a.kt)("h3",{id:"handlerok"},"Handler.ok"),(0,a.kt)("p",null,"Creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," that always responds with a 200 status code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Handler.ok\n")),(0,a.kt)("h3",{id:"handlertext"},"Handler.text"),(0,a.kt)("p",null,"Creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," that always responds with the same plain text."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'Handler.text("Text Response")\n')),(0,a.kt)("h3",{id:"handlerstatus"},"Handler.status"),(0,a.kt)("p",null,"Creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," that always responds with the same status code and empty data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Handler.status(Status.Ok)\n")),(0,a.kt)("h3",{id:"handlererror"},"Handler.error"),(0,a.kt)("p",null,"Creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," that always fails with the given error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Handler.error(Status.Forbidden)\n")),(0,a.kt)("h3",{id:"handlerresponse"},"Handler.response"),(0,a.kt)("p",null,"Creates an ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," that always responds with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"Response"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"Handler.response(Response.ok)\n")),(0,a.kt)("h2",{id:"special-operators-on-handler"},"Special operators on Handler"),(0,a.kt)("p",null,"These are some special operators for ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler"),"s."),(0,a.kt)("h3",{id:"method"},"method"),(0,a.kt)("p",null,"Overwrites the method in the incoming request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val handler11 = Handler.fromFunction((request: Request) => Response.text(request.method.toString))\nhandler11.method(Method.POST)\n")),(0,a.kt)("h3",{id:"patch"},"patch"),(0,a.kt)("p",null,"Patches the response produced by the request handler using a ",(0,a.kt)("inlineCode",{parentName:"p"},"Patch"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val handler12 = Handler.response(Response.text("Hello World!"))\nval handler13 = handler12.patch(Response.Patch.status(Status.Accepted))\n')),(0,a.kt)("h2",{id:"converting-routes-to-httpapp"},"Converting ",(0,a.kt)("inlineCode",{parentName:"h2"},"Routes")," to ",(0,a.kt)("inlineCode",{parentName:"h2"},"HttpApp")),(0,a.kt)("p",null,"If you want to deploy your routes on the ZIO HTTP server, you first need to convert it to ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpApp[R]")," using\n",(0,a.kt)("inlineCode",{parentName:"p"},"Routes#toHttpApp"),"."),(0,a.kt)("p",null,"Before you do this, you must first handle any typed errors produced by your routes by using ",(0,a.kt)("inlineCode",{parentName:"p"},"Routes#handleError"),"."),(0,a.kt)("p",null,"Handling your errors ensures that the clients of your API will not encounter strange and unexpected responses, but will always be able to usefully interact with your web service, even in exceptional cases."),(0,a.kt)("p",null,"If you wish to convert your failures automatically into suitable responses, without leaking any details on the specific nature of the errors, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Routes#sandbox"),", and after dealing with your errors in this way, you can convert your routes into an HTTP application."),(0,a.kt)("h2",{id:"running-an-app"},"Running an App"),(0,a.kt)("p",null,"ZIO HTTP server needs an ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpApp[R]")," for running. We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"Server.serve()")," method to bootstrap the server with\nan ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpApp[R]"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"object HelloWorld extends ZIOAppDefault {\n  val app: HttpApp[Any] = Handler.ok.toHttpApp\n\n  override def run = Server.serve(app).provide(Server.default)\n} \n")))}c.isMDXComponent=!0}}]);