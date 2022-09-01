"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8379],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return t?o.createElement(f,i(i({ref:n},m),{},{components:t})):o.createElement(f,i({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const r={id:"distage",title:"Distage"},i=void 0,l={unversionedId:"ecosystem/community/distage",id:"ecosystem/community/distage",title:"Distage",description:"Distage is a compile-time safe, transparent, and debuggable Dependency Injection framework for pure FP Scala.",source:"@site/docs/ecosystem/community/distage.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/distage",permalink:"/ecosystem/community/distage",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/distage.md",tags:[],version:"current",frontMatter:{id:"distage",title:"Distage"},sidebar:"ecosystem-sidebar",previous:{title:"Caliban",permalink:"/ecosystem/community/caliban"},next:{title:"LogStage",permalink:"/ecosystem/community/logstage"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://izumi.7mind.io/distage/"},"Distage")," is a compile-time safe, transparent, and debuggable Dependency Injection framework for pure FP Scala."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"By using ",(0,a.kt)("em",{parentName:"p"},"Distage")," we can auto-wire all components of our application."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We don't need to manually link components together"),(0,a.kt)("li",{parentName:"ul"},"We don't need to manually specify the order of allocation and allocation of dependencies. This will be derived automatically from the dependency order."),(0,a.kt)("li",{parentName:"ul"},"We can override any component within the dependency graph."),(0,a.kt)("li",{parentName:"ul"},"It helps us to create different configurations of our components for different use cases.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "io.7mind.izumi" %% "distage-core" % "1.0.8"\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example we create a ",(0,a.kt)("inlineCode",{parentName:"p"},"RandomApp")," comprising two ",(0,a.kt)("inlineCode",{parentName:"p"},"Random")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," services. By using ",(0,a.kt)("inlineCode",{parentName:"p"},"ModuleDef")," we ",(0,a.kt)("em",{parentName:"p"},"bind")," services to their implementations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import distage.{Activation, Injector, ModuleDef, Roots}\nimport izumi.distage.model.Locator\nimport izumi.distage.model.definition.Lifecycle\nimport zio.{ExitCode, Task, UIO, URIO, ZIO}\n\nimport java.time.LocalDateTime\n\ntrait Random {\n  def nextInteger: UIO[Int]\n}\n\nfinal class ScalaRandom extends Random {\n  override def nextInteger: UIO[Int] =\n    ZIO.effectTotal(scala.util.Random.nextInt())\n}\n\ntrait Logger {\n  def log(name: String): Task[Unit]\n}\n\nfinal class ConsoleLogger extends Logger {\n  override def log(line: String): Task[Unit] = {\n    val timeStamp = LocalDateTime.now()\n    ZIO.effect(println(s"$timeStamp: $line"))\n  }\n}\n\nfinal class RandomApp(random: Random, logger: Logger) {\n  def run: Task[Unit] = for {\n    random <- random.nextInteger\n    _ <- logger.log(s"random number generated: $random")\n  } yield ()\n}\n\nobject DistageExample extends zio.App {\n  def RandomAppModule: ModuleDef = new ModuleDef {\n    make[Random].from[ScalaRandom]\n    make[Logger].from[ConsoleLogger]\n    make[RandomApp] // `.from` is not required for concrete classes\n  }\n  \n  val resource: Lifecycle[Task, Locator] = Injector[Task]().produce(\n    plan = Injector[Task]().plan(\n      bindings = RandomAppModule,\n      activation = Activation.empty,\n      roots = Roots.target[RandomApp]\n    )\n  )\n\n  val myApp: Task[Unit] = resource.use(locator => locator.get[RandomApp].run)\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.exitCode\n}\n')))}p.isMDXComponent=!0}}]);