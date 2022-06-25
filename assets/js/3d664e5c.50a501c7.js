"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[4167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),f=n,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={id:"overview_handling_errors",title:"Handling Errors"},o=void 0,i={unversionedId:"overview/overview_handling_errors",id:"overview/overview_handling_errors",title:"Handling Errors",description:"This section looks at some common ways to detect and respond to failures.",source:"@site/docs/overview/handling_errors.md",sourceDirName:"overview",slug:"/overview/overview_handling_errors",permalink:"/overview/overview_handling_errors",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/overview/handling_errors.md",tags:[],version:"current",frontMatter:{id:"overview_handling_errors",title:"Handling Errors"},sidebar:"overview_sidebar",previous:{title:"Basic Operations",permalink:"/overview/overview_basic_operations"},next:{title:"Handling Resources",permalink:"/overview/overview_handling_resources"}},c={},s=[{value:"Either",id:"either",level:2},{value:"Catching All Errors",id:"catching-all-errors",level:2},{value:"Catching Some Errors",id:"catching-some-errors",level:2},{value:"Fallback",id:"fallback",level:2},{value:"Folding",id:"folding",level:2},{value:"Retrying",id:"retrying",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section looks at some common ways to detect and respond to failures."),(0,n.kt)("h2",{id:"either"},"Either"),(0,n.kt)("p",null,"You can surface failures with ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO#either"),", which takes a ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," and produces a ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO[R, Nothing, Either[E, A]]"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val zeither: UIO[Either[String, Int]] = \n  ZIO.fail("Uh oh!").either\n')),(0,n.kt)("p",null,"You can submerge failures with ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO.absolve"),", which is the opposite of ",(0,n.kt)("inlineCode",{parentName:"p"},"either")," and turns a ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO[R, Nothing, Either[E, A]]")," into a ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'def sqrt(io: UIO[Double]): IO[String, Double] =\n  ZIO.absolve(\n    io.map(value =>\n      if (value < 0.0) Left("Value must be >= 0.0")\n      else Right(Math.sqrt(value))\n    )\n  )\n')),(0,n.kt)("h2",{id:"catching-all-errors"},"Catching All Errors"),(0,n.kt)("p",null,"If you want to catch and recover from all types of errors and effectfully attempt recovery, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"catchAll")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val z: IO[IOException, Array[Byte]] = \n  openFile("primary.json").catchAll(_ => \n    openFile("backup.json"))\n')),(0,n.kt)("p",null,"In the callback passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"catchAll"),", you may return an effect with a different error type (or perhaps ",(0,n.kt)("inlineCode",{parentName:"p"},"Nothing"),"), which will be reflected in the type of effect returned by ",(0,n.kt)("inlineCode",{parentName:"p"},"catchAll"),"."),(0,n.kt)("h2",{id:"catching-some-errors"},"Catching Some Errors"),(0,n.kt)("p",null,"If you want to catch and recover from only some types of exceptions and effectfully attempt recovery, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"catchSome")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val data: IO[IOException, Array[Byte]] = \n  openFile("primary.data").catchSome {\n    case _ : FileNotFoundException => \n      openFile("backup.data")\n  }\n')),(0,n.kt)("p",null,"Unlike ",(0,n.kt)("inlineCode",{parentName:"p"},"catchAll"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"catchSome")," cannot reduce or eliminate the error type, although it can widen the error type to a broader class of errors."),(0,n.kt)("h2",{id:"fallback"},"Fallback"),(0,n.kt)("p",null,"You can try one effect or if it fails, try another effect with the ",(0,n.kt)("inlineCode",{parentName:"p"},"orElse")," combinator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val primaryOrBackupData: IO[IOException, Array[Byte]] = \n  openFile("primary.data").orElse(openFile("backup.data"))\n')),(0,n.kt)("h2",{id:"folding"},"Folding"),(0,n.kt)("p",null,"Scala's ",(0,n.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Either")," data types have a ",(0,n.kt)("inlineCode",{parentName:"p"},"fold")," method, which let you handle both the failure and the success at the same time. In a similar fashion, ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO")," effects also have several methods that allow you to handle both failures and successes."),(0,n.kt)("p",null,"The first fold method, ",(0,n.kt)("inlineCode",{parentName:"p"},"fold"),", lets you non-effectfully handle both a failure and a success by supplying a non-effectful handler for each case:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'lazy val DefaultData: Array[Byte] = Array(0, 0)\n\nval primaryOrDefaultData: UIO[Array[Byte]] = \n  openFile("primary.data").fold(\n    _    => DefaultData,\n    data => data)\n')),(0,n.kt)("p",null,"The second fold method, ",(0,n.kt)("inlineCode",{parentName:"p"},"foldZIO"),", lets you effectfully handle both a failure and a success by supplying an effectful (but still pure) handler for each case:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val primaryOrSecondaryData: IO[IOException, Array[Byte]] = \n  openFile("primary.data").foldZIO(\n    _    => openFile("secondary.data"),\n    data => ZIO.succeed(data))\n')),(0,n.kt)("p",null,"Nearly all error handling methods are defined in terms of ",(0,n.kt)("inlineCode",{parentName:"p"},"foldZIO")," because it is both powerful and fast."),(0,n.kt)("p",null,"In the following example, ",(0,n.kt)("inlineCode",{parentName:"p"},"foldZIO")," is used to handle both the failure and the success of the ",(0,n.kt)("inlineCode",{parentName:"p"},"readUrls")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val urls: UIO[Content] =\n  readUrls("urls.json").foldZIO(\n    error   => ZIO.succeed(Content.NoContent(error)), \n    success => fetchContent(success)\n  )\n')),(0,n.kt)("h2",{id:"retrying"},"Retrying"),(0,n.kt)("p",null,"There are a number of useful methods on the ZIO data type for retrying failed effects. "),(0,n.kt)("p",null,"The most basic of these is ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO#retry"),", which takes a ",(0,n.kt)("inlineCode",{parentName:"p"},"Schedule")," and returns a new effect that will retry the first effect if it fails, according to the specified policy:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val retriedOpenFile: ZIO[Clock, IOException, Array[Byte]] = \n  openFile("primary.data")\n      .retry(Schedule.recurs(5))\n')),(0,n.kt)("p",null,"The next most powerful function is ",(0,n.kt)("inlineCode",{parentName:"p"},"ZIO#retryOrElse"),", which allows specification of a fallback to use if the effect does not succeed with the specified policy:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val retryOpenFile: ZIO[Clock, IOException, DefaultData) = \n  openFile("primary.data")\n      .retryOrElse(Schedule.recurs(5), (_, _) => ZIO.succeed(DefaultData))\n')),(0,n.kt)("p",null,"For more information on how to build schedules, see the documentation on ",(0,n.kt)("a",{parentName:"p",href:"/datatypes/misc/schedule"},"Schedule"),"."),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"If you are comfortable with basic error handling, the next step is to learn about safe ",(0,n.kt)("a",{parentName:"p",href:"/overview/overview_handling_resources"},"resource handling"),"."))}d.isMDXComponent=!0}}]);