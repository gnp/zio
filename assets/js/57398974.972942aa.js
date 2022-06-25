"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={id:"overview_testing_effects",title:"Testing Effects"},s=void 0,o={unversionedId:"overview/overview_testing_effects",id:"overview/overview_testing_effects",title:"Testing Effects",description:"There are many approaches to testing functional effects, including using free monads, tagless-final, and environmental effects. Although all of these approaches are compatible with ZIO, the simplest and most ergonomic is environmental effects.",source:"@site/docs/overview/testing_effects.md",sourceDirName:"overview",slug:"/overview/overview_testing_effects",permalink:"/overview/overview_testing_effects",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/overview/testing_effects.md",tags:[],version:"current",frontMatter:{id:"overview_testing_effects",title:"Testing Effects"},sidebar:"overview_sidebar",previous:{title:"Basic Concurrency",permalink:"/overview/overview_basic_concurrency"},next:{title:"Running Effects",permalink:"/overview/overview_running_effects"}},l={},c=[{value:"Environments",id:"environments",level:2},{value:"Providing Environments",id:"providing-environments",level:3},{value:"Environmental Effects",id:"environmental-effects",level:2},{value:"Define the Service",id:"define-the-service",level:3},{value:"Provide Helpers",id:"provide-helpers",level:3},{value:"Use the Service",id:"use-the-service",level:3},{value:"Implement Live Service",id:"implement-live-service",level:3},{value:"Run the Database Effect",id:"run-the-database-effect",level:3},{value:"Implement Test Service",id:"implement-test-service",level:3},{value:"Test Database Code",id:"test-database-code",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are many approaches to testing functional effects, including using free monads, tagless-final, and environmental effects. Although all of these approaches are compatible with ZIO, the simplest and most ergonomic is ",(0,i.kt)("em",{parentName:"p"},"environmental effects"),"."),(0,i.kt)("p",null,"This section introduces environmental effects and shows you how to write testable, functional code using them."),(0,i.kt)("h2",{id:"environments"},"Environments"),(0,i.kt)("p",null,"The ZIO data type has an ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," type parameter, which is used to describe the type of ",(0,i.kt)("em",{parentName:"p"},"environment")," required by the effect. "),(0,i.kt)("p",null,"ZIO effects can access the environment using ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.environment"),", which provides direct access to the environment as a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  env <- ZIO.environment[Int]\n  _   <- printLine(s"The value of the environment is: $env")\n} yield env\n')),(0,i.kt)("p",null,"The environment does not have to be a primitive value like an integer. It can be much more complex, for example, a ",(0,i.kt)("inlineCode",{parentName:"p"},"trait")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"case class"),"."),(0,i.kt)("p",null,"When the environment is a type with fields, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.service")," method can be used to access a given part of the environment in a single method call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'final case class Config(server: String, port: Int)\n\nval configString: URIO[Config, String] = \n  for {\n    server <- ZIO.service[Config].map(_.server)\n    port   <- ZIO.service[Config].map(_.port)\n  } yield s"Server: $server, port: $port"\n')),(0,i.kt)("p",null,"Even effects themselves can be stored in the environment! In this case, to access and execute an effect, you would use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.serviceWithZIO")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'trait DatabaseOps {\n  def getTableNames: Task[List[String]]\n  def getColumnNames(table: String): Task[List[String]]\n}\n\nval tablesAndColumns: ZIO[DatabaseOps, Throwable, (List[String], List[String])] = \n  for {\n    tables  <- ZIO.serviceWithZIO[DatabaseOps](_.getTableNames)\n    columns <- ZIO.serviceWithZIO[DatabaseOps](_.getColumnNames("user_table"))\n  } yield (tables, columns)\n')),(0,i.kt)("p",null,"When an effect is accessed from the environment, as in the preceding example, the effect is called an ",(0,i.kt)("em",{parentName:"p"},"environmental effect"),"."),(0,i.kt)("p",null,"Later, we'll see how environmental effects provide an easy way to test ZIO applications."),(0,i.kt)("h3",{id:"providing-environments"},"Providing Environments"),(0,i.kt)("p",null,"Effects that require an environment cannot be run without first ",(0,i.kt)("em",{parentName:"p"},"providing")," said environment."),(0,i.kt)("p",null,"The simplest way to provide a required environment to an effect is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#provide")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val square: URIO[Int, Int] = \n  for {\n    env <- ZIO.service[Int]\n  } yield env * env\n\nval result: UIO[Int] = square.provideEnvironment(ZEnvironment(42))\n")),(0,i.kt)("p",null,"Once you provide an effect with the environment it requires, you get back an effect whose environment type is ",(0,i.kt)("inlineCode",{parentName:"p"},"Any"),", indicating its requirements have been fully satisfied."),(0,i.kt)("p",null,"The combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.environmentWithZIO")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#provide")," are all that is necessary to fully use environmental effects for easy testability."),(0,i.kt)("h2",{id:"environmental-effects"},"Environmental Effects"),(0,i.kt)("p",null,"The fundamental idea behind environmental effects is to ",(0,i.kt)("em",{parentName:"p"},"program to an interface, not an implementation"),". In the case of functional Scala, interfaces do not contain any methods that perform side-effects, although they may contain methods that return ",(0,i.kt)("em",{parentName:"p"},"functional effects"),"."),(0,i.kt)("p",null,"Rather than passing interfaces throughout our codebase manually using dependency injection or threading them using incoherent implicits, we use ",(0,i.kt)("em",{parentName:"p"},"ZIO Environment")," to do the heavy lifting, which results in elegant, inferrable, and painless code."),(0,i.kt)("p",null,"In this section, we'll explore how to use environmental effects by developing a testable database service."),(0,i.kt)("h3",{id:"define-the-service"},"Define the Service"),(0,i.kt)("p",null,"We will define the database service with the help of a module, which is an interface that contains only a single field and provides access to the service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object Database {\n  trait Service {\n    def lookup(id: UserID): Task[UserProfile]\n    def update(id: UserID, profile: UserProfile): Task[Unit]\n  }\n}\ntrait Database {\n  def database: Database.Service\n}\n")),(0,i.kt)("p",null,"In this example,  ",(0,i.kt)("inlineCode",{parentName:"p"},"Database")," is the ",(0,i.kt)("em",{parentName:"p"},"module"),", which contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"Database.Service")," ",(0,i.kt)("em",{parentName:"p"},"service"),". The ",(0,i.kt)("em",{parentName:"p"},"service")," is just an ordinary interface, placed inside the companion object of the module, which contains functions that provide the ",(0,i.kt)("em",{parentName:"p"},"capabilities")," of the service."),(0,i.kt)("h3",{id:"provide-helpers"},"Provide Helpers"),(0,i.kt)("p",null,"In order to make it easier to access the database service as an environmental effect, we will define helper functions that use ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.serviceWithZIO"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object db {\n  def lookup(id: UserID): RIO[Database, UserProfile] =\n    ZIO.serviceWithZIO(_.database.lookup(id))\n\n  def update(id: UserID, profile: UserProfile): RIO[Database, Unit] =\n    ZIO.serviceWithZIO(_.database.update(id, profile))\n}\n")),(0,i.kt)("p",null,"While these helpers are not required, because we can access the database module directly through ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.serviceWithZIO"),", they are easy to write and make use-site code simpler."),(0,i.kt)("h3",{id:"use-the-service"},"Use the Service"),(0,i.kt)("p",null,"Now that we have defined a module and helper functions, we are ready to build an example that uses the database service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val lookedupProfile: RIO[Database, UserProfile] = \n  for {\n    profile <- db.lookup(userId)\n  } yield profile\n")),(0,i.kt)("p",null,"The effect in this example interacts with the database solely through the environment. In this case, the environment is a module that provides access to the database service."),(0,i.kt)("p",null,"To actually run such an effect, we need to provide an implementation of the database module."),(0,i.kt)("h3",{id:"implement-live-service"},"Implement Live Service"),(0,i.kt)("p",null,"Now we will implement a live database module to interact with our production database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait DatabaseLive extends Database {\n  def database: Database.Service = \n    new Database.Service {\n      def lookup(id: UserID): Task[UserProfile] = ???\n      def update(id: UserID, profile: UserProfile): Task[Unit] = ???\n    }\n}\nobject DatabaseLive extends DatabaseLive\n")),(0,i.kt)("p",null,"In the preceding snippet, the implementation of the two database methods is not provided because doing so would introduce details beyond the scope of this tutorial."),(0,i.kt)("h3",{id:"run-the-database-effect"},"Run the Database Effect"),(0,i.kt)("p",null,"Now we have a database module, helpers to interact with it, and a live implementation of the database module. "),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.provide"),", we can now provide the live database module to our application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def main: RIO[Database, Unit] = ???\n\ndef main2: Task[Unit] = \n  main.provideEnvironment(ZEnvironment(DatabaseLive))\n")),(0,i.kt)("p",null,"The resulting effect has no requirements, which means it can be executed with a ZIO runtime."),(0,i.kt)("h3",{id:"implement-test-service"},"Implement Test Service"),(0,i.kt)("p",null,"Consider that when we test code that interacts with a database, there are many reasons we might not want to run these tests on a real database. For example, doing so may make our tests slow and brittle, it may cause failures for reasons that are outside the scope of our test, or our test might actually alter the data stored in the database."),(0,i.kt)("p",null,"Though there are existing mocking libraries for creating test modules, to remove the mystery, we will create a test module directly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"class TestService extends Database.Service {\n  private var map: Map[UserID, UserProfile] = Map()\n\n  def setTestData(map0: Map[UserID, UserProfile]): Task[Unit] = \n    ZIO.attempt { map = map0 }\n\n  def getTestData: Task[Map[UserID, UserProfile]] = \n    ZIO.attempt(map)\n\n  def lookup(id: UserID): Task[UserProfile] = \n    ZIO.attempt(map(id))\n\n  def update(id: UserID, profile: UserProfile): Task[Unit] = \n    ZIO.attempt { map = map + (id -> profile) }\n}\ntrait TestDatabase extends Database {\n  val database: TestService = new TestService\n}\nobject TestDatabase extends TestDatabase\n")),(0,i.kt)("p",null,"Because this module will only be used in tests, it simulates interaction with a database by extracting and updating data in a hard-coded map. To make this module fiber-safe, you could instead use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Ref")," and not a ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," to hold the map."),(0,i.kt)("h3",{id:"test-database-code"},"Test Database Code"),(0,i.kt)("p",null,"To test code that requires a database, we need only provide it with our test database module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def code: RIO[Database, Unit] = ???\n\ndef code2: Task[Unit] = \n  code.provideEnvironment(ZEnvironment(TestDatabase))\n")),(0,i.kt)("p",null,"Our application code can work with either our production database module, or the test database module."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"If you are comfortable with testing effects, the next step is to learn about ",(0,i.kt)("a",{parentName:"p",href:"/overview/overview_running_effects"},"running effects"),"."))}d.isMDXComponent=!0}}]);