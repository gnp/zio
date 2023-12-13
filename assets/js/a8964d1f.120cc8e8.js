"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[53077],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),k=o,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||a;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=k;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},72670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={id:"sockets",title:"Socket Channel"},c=void 0,s={unversionedId:"zio-nio/sockets",id:"zio-nio/sockets",title:"Socket Channel",description:"AsynchronousSocketChannel and AsynchronousServerSocketChannel provide methods for communicating with remote clients.",source:"@site/docs/zio-nio/sockets.md",sourceDirName:"zio-nio",slug:"/zio-nio/sockets",permalink:"/zio-nio/sockets",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-nio/sockets.md",tags:[],version:"current",frontMatter:{id:"sockets",title:"Socket Channel"},sidebar:"ecosystem-sidebar",previous:{title:"File Channel",permalink:"/zio-nio/files"},next:{title:"Resource Management",permalink:"/zio-nio/resources"}},i={},l=[{value:"Creating sockets",id:"creating-sockets",level:2}],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AsynchronousSocketChannel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AsynchronousServerSocketChannel")," provide methods for communicating with remote clients."),(0,o.kt)("p",null,"Required imports for snippets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.clock._\nimport zio.console._\nimport zio.nio.channels._\nimport zio.nio._\n")),(0,o.kt)("h2",{id:"creating-sockets"},"Creating sockets"),(0,o.kt)("p",null,"Creating a server socket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val server = AsynchronousServerSocketChannel.open\n  .mapM { socket =>\n    for {\n      address <- InetSocketAddress.hostName("127.0.0.1", 1337)\n      _ <- socket.bindTo(address)\n      _ <- socket.accept.preallocate.flatMap(_.use(channel => doWork(channel).catchAll(ex => putStrLn(ex.getMessage))).fork).forever.fork\n    } yield ()\n  }.useForever\n\ndef doWork(channel: AsynchronousSocketChannel): ZIO[Console with Clock, Throwable, Unit] = {\n  val process =\n    for {\n      chunk <- channel.readChunk(3)\n      str = chunk.toArray.map(_.toChar).mkString\n      _ <- putStrLn(s"received: [$str] [${chunk.length}]")\n    } yield ()\n\n  process.whenM(channel.isOpen).forever\n}\n')),(0,o.kt)("p",null,"Creating a client socket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val clientM: Managed[Exception, AsynchronousSocketChannel] = AsynchronousSocketChannel.open\n  .mapM { client =>\n    for {\n      host    <- InetAddress.localHost\n      address <- InetSocketAddress.inetAddress(host, 2552)\n      _       <- client.connect(address)\n    } yield client\n  }\n")),(0,o.kt)("p",null,"Reading and writing to a socket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  serverFiber <- server.fork\n  _ <- clientM.use(_.writeChunk(Chunk.fromArray(Array(1, 2, 3).map(_.toByte))))\n  _           <- serverFiber.join\n} yield ()\n")))}d.isMDXComponent=!0}}]);