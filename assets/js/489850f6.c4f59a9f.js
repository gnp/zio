"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[14656],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={id:"motivation",title:"The Motivation Behind ZIO Schema",sidebar_label:"Motivation"},l=void 0,o={unversionedId:"zio-schema/motivation",id:"zio-schema/motivation",title:"The Motivation Behind ZIO Schema",description:'ZIO Schema is a library used in many ZIO projects such as ZIO Flow, ZIO Redis, ZIO Web, ZIO SQL and ZIO DynamoDB. It is all about reification of our types. Reification means transforming something abstract (e.g. side effects, accessing fields, structure)  into something "real" (values).',source:"@site/docs/zio-schema/motivation.md",sourceDirName:"zio-schema",slug:"/zio-schema/motivation",permalink:"/zio-schema/motivation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/motivation.md",tags:[],version:"current",frontMatter:{id:"motivation",title:"The Motivation Behind ZIO Schema",sidebar_label:"Motivation"},sidebar:"ecosystem-sidebar",previous:{title:"Introduction",permalink:"/zio-schema/"},next:{title:"Use cases",permalink:"/zio-schema/use-cases"}},s={},c=[{value:"Reification: Functional Effects",id:"reification-functional-effects",level:2},{value:"Reification: Optics",id:"reification-optics",level:2},{value:"Reification: Schema",id:"reification-schema",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO Schema is a library used in many ZIO projects such as ",(0,i.kt)("em",{parentName:"p"},"ZIO Flow"),", ",(0,i.kt)("em",{parentName:"p"},"ZIO Redis"),", ",(0,i.kt)("em",{parentName:"p"},"ZIO Web"),", ",(0,i.kt)("em",{parentName:"p"},"ZIO SQL")," and ",(0,i.kt)("em",{parentName:"p"},"ZIO DynamoDB"),'. It is all about reification of our types. Reification means transforming something abstract (e.g. side effects, accessing fields, structure)  into something "real" (values).'),(0,i.kt)("h2",{id:"reification-functional-effects"},"Reification: Functional Effects"),(0,i.kt)("p",null,"In functional effects, we reify by turning side-effects into values. For example, we might have a simple statement like;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'println("Hello")\nprintln("World")\n')),(0,i.kt)("p",null,"In ZIO we reify this statement to a value like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val effect1 = Task(println("Hello"))\nval effect2 = Task(println("World"))\n')),(0,i.kt)("p",null,"And then we are able to do awesome things like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'(Task(println("Hello")) zipPar Task(println("World"))).retryN(100)\n')),(0,i.kt)("h2",{id:"reification-optics"},"Reification: Optics"),(0,i.kt)("p",null,"In Scala, we have product types like this case class of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Person(name: String, age: Int)\n")),(0,i.kt)("p",null,"This case class has two fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A field ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," of type ",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"A field ",(0,i.kt)("inlineCode",{parentName:"li"},"age")," of type ",(0,i.kt)("inlineCode",{parentName:"li"},"Int"))),(0,i.kt)("p",null,"The Scala language provides special support to access the fields inside case classes using the dot syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val person = Person("Michelle", 32)\nval name = person.name\nval age  = person.age\n')),(0,i.kt)("p",null,'However, this is a "special language feature", it\'s not "real" like the side effects we\'ve seen in the previous example (',(0,i.kt)("inlineCode",{parentName:"p"},"println(..) vs. Task(println(...))"),")."),(0,i.kt)("p",null,'Because these basic operations are not "real," we are unable to create an operator that we can use, for example, we cannot combine two fields that are inside a nested structure.'),(0,i.kt)("p",null,'The solution to this kind of problem is called an "Optic". Optics provide a way to access the fields of a case class and nested structures. There are three main types of optics:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Lens"),": A lens is a way to access a field of a case class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Prism"),": A prism is a way to access a field of a nested structure or a collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Traversal"),": A traversal is a way to access all fields of a case class, nested structures or collections.")),(0,i.kt)("p",null,"Optics allow us to take things which are not a first-class ",(0,i.kt)("strong",{parentName:"p"},"concept"),", and turn that into a first-class ",(0,i.kt)("strong",{parentName:"p"},"value"),", namely the concept of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"drilling down into a field inside a case class or"),(0,i.kt)("li",{parentName:"ul"},"drilling down into a nested structure.")),(0,i.kt)("p",null,"Once we have a value, we can compose these things together to solve hard problems in functional programming, e.g."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"handling nested case class copies,"),(0,i.kt)("li",{parentName:"ul"},"iterations down deep inside on elements of a nested structure or collections")),(0,i.kt)("p",null,"For more information on optics, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://zio.dev/zio-optics/"},"ZIO Optics")," documentation."),(0,i.kt)("h2",{id:"reification-schema"},"Reification: Schema"),(0,i.kt)("p",null,"So far we've looked at how to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reify side-effects into values (ZIO)"),(0,i.kt)("li",{parentName:"ul"},"how to reify accessing and modifying fields inside case classes or arbitrary structures by turning these operations into values as well (Optics)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ZIO Schema")," is now about how to ",(0,i.kt)("strong",{parentName:"p"},"describe entire data structures using values"),"."),(0,i.kt)("p",null,'The "built-in" way in scala on how to describe data structures are ',(0,i.kt)("inlineCode",{parentName:"p"},"case classes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"classes"),"."),(0,i.kt)("p",null,"For example, assume we have the ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," data type, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Person(name: String, age: Int)\n")),(0,i.kt)("p",null,"It has the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name of the structure: ",(0,i.kt)("inlineCode",{parentName:"li"},"Person")),(0,i.kt)("li",{parentName:"ul"},"Fields: ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"age")),(0,i.kt)("li",{parentName:"ul"},"Type of the fields: ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Int")),(0,i.kt)("li",{parentName:"ul"},"Type of the structure: ",(0,i.kt)("inlineCode",{parentName:"li"},"Person"))),(0,i.kt)("p",null,"ZIO Schema tries to reify the concept of structure for datatypes by turning the above information into values."),(0,i.kt)("p",null,"Not only for case classes, but also for other types like collections, tuples, enumerations etc."))}m.isMDXComponent=!0}}]);