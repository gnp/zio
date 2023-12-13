"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[17084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"quill-vs-slick",title:"Quill vs. Slick"},l=void 0,o={unversionedId:"zio-quill/quill-vs-slick",id:"zio-quill/quill-vs-slick",title:"Quill vs. Slick",description:"This document compares Quill to the Typesafe Slick library. This is an incomplete comparison, additions and corrections are welcome.",source:"@site/docs/zio-quill/quill-vs-slick.md",sourceDirName:"zio-quill",slug:"/zio-quill/quill-vs-slick",permalink:"/zio-quill/quill-vs-slick",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-quill/quill-vs-slick.md",tags:[],version:"current",frontMatter:{id:"quill-vs-slick",title:"Quill vs. Slick"},sidebar:"ecosystem-sidebar",previous:{title:"Quill vs. Cassandra",permalink:"/zio-quill/quill-vs-cassandra"},next:{title:"Quill Changelog",permalink:"/zio-quill/changelog"}},s={},c=[{value:"Abstraction level",id:"abstraction-level",level:2},{value:"QDSL versus EDSL",id:"qdsl-versus-edsl",level:2},{value:"Compile-time versus Runtime",id:"compile-time-versus-runtime",level:2},{value:"Non-blocking IO",id:"non-blocking-io",level:2},{value:"Extensibility",id:"extensibility",level:2},{value:"Normalization",id:"normalization",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document compares Quill to the ",(0,i.kt)("a",{parentName:"p",href:"https://scala-slick.org"},"Typesafe Slick")," library. This is an incomplete comparison, additions and corrections are welcome."),(0,i.kt)("h2",{id:"abstraction-level"},"Abstraction level"),(0,i.kt)("p",null,"Quill and Slick have similar abstraction levels. They represent database rows as flat immutable structures (case classes without nested data) and provide a type-safe composable query DSL."),(0,i.kt)("p",null,"Slick's documentation refers to this abstraction level as a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/slick/slick/blob/3b3bd36c93c6d9c63b0471ff4d8409f913954b2b/slick/src/sphinx/introduction.rst#functional-relational-mapping"},"new paradigm called functional-relational mapping (FRM)"),". In fact, the approach is not new and was introduced in the late '90s by ",(0,i.kt)("a",{parentName:"p",href:"https://www.comp.nus.edu.sg/~wongls/psZ/wls-jfp98-3.ps"},'"Kleisli\udbff\udc02, a Functional Query System"'),". It was also used by the ",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20120127183323/https://groups.inf.ed.ac.uk/links/papers/links-fmco06.pdf"},"Links programming language"),", and later on was popularized by ",(0,i.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/bb425822.aspx"},"Microsoft LINQ")," in a less functional manner."),(0,i.kt)("p",null,"Quill is referred as a Language Integrated Query library to match the available publications on the subject. The paper ",(0,i.kt)("a",{parentName:"p",href:"http://research.microsoft.com/en-us/events/dcp2014/cheney.pdf"},'"Language-integrated query using comprehension syntax: state of the art, open problems, and work in progress"')," has an overview with some of the available implementations of language integrated queries."),(0,i.kt)("h2",{id:"qdsl-versus-edsl"},"QDSL versus EDSL"),(0,i.kt)("p",null,"Quill's DSL is a macro-based quotation mechanism, allowing usage of Scala types and operators directly. Please refer to the paper ",(0,i.kt)("a",{parentName:"p",href:"https://homepages.inf.ed.ac.uk/wadler/papers/qdsl/qdsl.pdf"},'"Everything old is new again: Quoted Domain Specific Languages"')," for more details. On the other hand, Slick provides a DSL that requires lifting of types and operations to the DSL counterparts at runtime. Example:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"quill")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class Person(name: String, age: Int)\n\nval range = quote {\n  (a: Int, b: Int) =>\n    for {\n      u <- query[Person] if (a <= u.age && u.age < b)\n    } yield {\n      u\n    }\n}\nval ageFromName = quote {\n  (s: String) =>\n    for {\n      u <- query[Person] if (s == u.name)\n    } yield {\n      u.age\n    }\n}\nval q = quote {\n  (s: String, t: String) =>\n    for {\n      a <- ageFromName(s)\n      b <- ageFromName(t)\n      r <- range(a, b)\n    } yield {\n      r\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"slick")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'case class PersonRow(name: String, age: Int)\n\nclass Person(_tableTag: Tag) extends Table[PersonRow](_tableTag, "Person") {\n  def * = (name, age) <> (PersonRow.tupled, PersonRow.unapply)\n  def ? = (Rep.Some(name), Rep.Some(age)).shaped.<>({r=>import r._; _1.map(_=> PersonRow.tupled((_1.get, _2.get)))}, (_:Any) =>  throw new Exception("Inserting into ? projection not supported."))\n\n  val name: Rep[String] = column[String]("name", O.Length(255,varying=true))\n  val age: Rep[Int] = column[Int]("age")\n}\n\nlazy val Person = new TableQuery(tag => new Person(tag))\n\nval range =\n  (a: Rep[Int], b: Rep[Int]) =>\n    for {\n      u <- Person if (a <= u.age && u.age < b)\n    } yield {\n      u\n    }\nval ageFromName =\n  (s: Rep[String]) =>\n    for {\n      u <- Person if (s === u.name)\n    } yield {\n      u.age\n    }\nval q = \n  (s: String, t: String) =>\n    for {\n      a <- ageFromName(s)\n      b <- ageFromName(t)\n      r <- range(a, b)\n    } yield {\n      r\n    }\n')),(0,i.kt)("p",null,"Slick requires explicit type definition to map the database model to lifted values, which can be automatically generated and maintained by the ",(0,i.kt)("a",{parentName:"p",href:"https://scala-slick.org/doc/3.1.0/code-generation.html"},(0,i.kt)("inlineCode",{parentName:"a"},"slick-codegen"))," tool. The query definition also requires special equality operators and usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"Rep")," for composable queries."),(0,i.kt)("h2",{id:"compile-time-versus-runtime"},"Compile-time versus Runtime"),(0,i.kt)("p",null,"Quill's quoted DSL opens a new path to query generation. For the quotations that are known statically, the query normalization and translation to SQL happen at compile-time. The user receives feedback during compilation, knows the SQL string that will be used and if it will succeed when executed against the database."),(0,i.kt)("p",null,"The feedback cycle using Slick is typically longer. Some factors like normalization bugs and unsupported operations can make the query fail, but only at runtime it is possible to know whether they will affect the query or not."),(0,i.kt)("h2",{id:"non-blocking-io"},"Non-blocking IO"),(0,i.kt)("p",null,"Slick provides an asynchronous wrapper on top of jdbc's blocking interface, making it harder to scale applications using it. On the other hand, quill provides fully asynchronous non-blocking database access through quill-async and quill-finagle-mysql."),(0,i.kt)("h2",{id:"extensibility"},"Extensibility"),(0,i.kt)("p",null,"It is common to have to write plain SQL statements when a feature is not supported by Slick. Quill's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/getquill/quill#infix"},(0,i.kt)("inlineCode",{parentName:"a"},"infix")," mechanism")," solves this problem by allowing the user to insert arbitrary SQL within quotations at any position."),(0,i.kt)("h2",{id:"normalization"},"Normalization"),(0,i.kt)("p",null,"Quill's normalization engine is based on the rules introduced by the paper ",(0,i.kt)("a",{parentName:"p",href:"https://www.infoq.com/presentations/theory-language-integrated-query"},'"A practical theory of language-integrated query"'),". They ensure that, given some fulfilled requirements, the normalization will always succeed. Quill verifies these requirements at compile-time."),(0,i.kt)("p",null,"Unfortunately, the paper doesn't cover all SQL features supported by Quill. Some additional transformations were added to the normalization engine for this reason."),(0,i.kt)("p",null,"Slick's normalization is based on an multi-phase compilation engine. The code complexity is very high, probably due to the lack of principled normalization rules."),(0,i.kt)("p",null,"The last stable version (3.1) features a major rewrite of the query compiler. Before it, even simple compositions used to produce highly nested queries with bad performance characteristics when executed against MySQL."),(0,i.kt)("p",null,"The reader is invited to compare the libraries' normalization code:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/getquill/quill/tree/master/quill-core/src/main/scala/io/getquill/norm"},"https://github.com/getquill/quill/tree/master/quill-core/src/main/scala/io/getquill/norm"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/slick/slick/tree/master/slick/src/main/scala/slick/compiler"},"https://github.com/slick/slick/tree/master/slick/src/main/scala/slick/compiler")))}m.isMDXComponent=!0}}]);