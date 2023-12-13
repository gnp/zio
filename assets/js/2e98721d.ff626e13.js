"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[83100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=n,f=p["".concat(u,".").concat(g)]||p[g]||m[g]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},82024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={id:"gauge",title:"Gauge"},o=void 0,l={unversionedId:"reference/observability/metrics/gauge",id:"reference/observability/metrics/gauge",title:"Gauge",description:"A Gauge is a metric representing a single numerical value that may be set or adjusted. A typical use of this metric would be to track the current memory usage.",source:"@site/docs/reference/observability/metrics/gauge.md",sourceDirName:"reference/observability/metrics",slug:"/reference/observability/metrics/gauge",permalink:"/reference/observability/metrics/gauge",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/observability/metrics/gauge.md",tags:[],version:"current",frontMatter:{id:"gauge",title:"Gauge"},sidebar:"reference-sidebar",previous:{title:"Counter",permalink:"/reference/observability/metrics/counter"},next:{title:"Histogram",permalink:"/reference/observability/metrics/histogram"}},u={},s=[{value:"API",id:"api",level:2},{value:"Use Case",id:"use-case",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Gauge")," is a metric representing a single numerical value that may be ",(0,n.kt)("em",{parentName:"p"},"set")," or ",(0,n.kt)("em",{parentName:"p"},"adjusted"),". A typical use of this metric would be to track the current memory usage."),(0,n.kt)("p",null,"With a gauge, the quantity of interest is the current value, as opposed to a counter where the quantity of interest is the cumulative values over time."),(0,n.kt)("p",null,"A gauge is a named variable of type ",(0,n.kt)("em",{parentName:"p"},"Double")," that can change over time. It can either be set to an absolute value or relative to the current value."),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"object Metric {\n  def gauge(name: String): Gauge[Double] = ???\n}\n")),(0,n.kt)("h2",{id:"use-case"},"Use Case"),(0,n.kt)("p",null,"The gauge metric type is the best choice for things that their values can go down as well as up, such as queue size, and we don't want to query their rates. Thus, they are used to measuring things that have a particular value at a certain point in time:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Memory Usage"),(0,n.kt)("li",{parentName:"ul"},"Queue Size"),(0,n.kt)("li",{parentName:"ul"},"In-Progress Request Counts"),(0,n.kt)("li",{parentName:"ul"},"Temperature")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Create a gauge that can be set to absolute values, it can be applied to effects yielding a ",(0,n.kt)("inlineCode",{parentName:"p"},"Double"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.metrics._\nval absoluteGauge = Metric.gauge("setGauge")\n')),(0,n.kt)("p",null,"Now we can apply these gauges to effects having an output type ",(0,n.kt)("inlineCode",{parentName:"p"},"Double"),". Note that we can instrument an effect with any number of aspects if the type constraints are satisfied:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  _ <- Random.nextDoubleBetween(0.0d, 100.0d) @@ absoluteGauge @@ countAll\n} yield ()\n")))}m.isMDXComponent=!0}}]);