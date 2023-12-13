"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[25669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"index",title:"Metrics"},i=void 0,c={unversionedId:"zio-metrics-connectors/metrics/index",id:"zio-metrics-connectors/metrics/index",title:"Metrics",description:"ZIO Metrics enables the instrumentation of any ZIO based application with specialized aspects. The type of the original ZIO effect will not change by adding on or more aspects to it.",source:"@site/docs/zio-metrics-connectors/metrics/index.md",sourceDirName:"zio-metrics-connectors/metrics",slug:"/zio-metrics-connectors/metrics/",permalink:"/zio-metrics-connectors/metrics/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-metrics-connectors/metrics/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Metrics"},sidebar:"ecosystem-sidebar",previous:{title:"Getting Started",permalink:"/zio-metrics-connectors/getting-started"},next:{title:"ZIO Metric Reference",permalink:"/zio-metrics-connectors/metrics/metric-reference"}},s={},l=[{value:"Adding ZIO Metrics Connectors to your project",id:"adding-zio-metrics-connectors-to-your-project",level:3},{value:"General Metric architecture",id:"general-metric-architecture",level:2}],p={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ZIO Metrics enables the instrumentation of any ZIO based application with specialized aspects. The type of the original ZIO effect will not change by adding on or more aspects to it. "),(0,a.kt)("p",null,"Whenever an instrumented effect executes, all the aspects will be executed as well and each of the\naspects will capture some data of interest and update some Metric internal state. Which data will be captured and how it can be used later on is dependent on the metric type associated with the aspect. "),(0,a.kt)("p",null,"Metrics are normally captured to be displayed in an application like ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," or a cloud based platform like ",(0,a.kt)("a",{parentName:"p",href:"https://docs.datadoghq.com/"},"DatadogHQ"),"\nor ",(0,a.kt)("a",{parentName:"p",href:"https://newrelic.com"},"NewRelic"),".\nIn order to support such a range of different platforms, the metric state is kept in an internal data structure optimized to update the state as efficiently as possible\nand the data required by one or more of the platforms is generated only when it is required. "),(0,a.kt)("p",null,"ZIO Metrics Connectors also allows us to dump current metric states (in one of the next minor releases) out of the box to analyze the metrics in the development phase before the decision\nfor a metric platform has been made or in cases when the platform might not be feasible to use in development. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Changing the targeted reporting back end will have no impact on the application at all. Once instrumented properly, that reporting back end decision will happen ",(0,a.kt)("strong",{parentName:"p"},"at the end of the world"),"\nin the ZIO applications mainline by injecting one or more of the available reporting clients.")),(0,a.kt)("p",null,"Currently, ZIO Metrics Connectors provides integrations with the following backends:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.datadoghq.com/"},"Datadog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://newrelic.com"},"New Relic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/statsd/statsd"},"StatsD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://micrometer.io"},"Micrometer"))),(0,a.kt)("h3",{id:"adding-zio-metrics-connectors-to-your-project"},"Adding ZIO Metrics Connectors to your project"),(0,a.kt)("p",null,"Import the corresponding dependency based on your reporting infrastructure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sbt"},'libraryDependencies ++= {\n  Seq(\n    "dev.zio" %% "zio-metrics-connectors"             % "2.2.1", // core library\n    "dev.zio" %% "zio-metrics-connectors-prometheus"  % "2.2.1", // Prometheus client\n    "dev.zio" %% "zio-metrics-connectors-datadog"     % "2.2.1", // DataDog client\n    "dev.zio" %% "zio-metrics-connectors-newrelic"    % "2.2.1", // NewRelic client\n    "dev.zio" %% "zio-metrics-connectors-statsd"      % "2.2.1", // StatsD client\n    "dev.zio" %% "zio-metrics-connectors-micrometer"  % "2.2.1"  // Micrometer client\n  )\n}\n')),(0,a.kt)("h2",{id:"general-metric-architecture"},"General Metric architecture"),(0,a.kt)("p",null,"All metrics have a name of type ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," which may be augmented by zero or many ",(0,a.kt)("inlineCode",{parentName:"p"},"Label"),"s. A ",(0,a.kt)("inlineCode",{parentName:"p"},"Label")," is simply a key/value pair to further qualify the name.\nThe distinction is made, because some reporting platforms support tags as well and provide certain aggregation mechanisms for them. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For example, think of a counter that simply counts how often a particular service has been invoked. If the application\nis deployed across several hosts, we might model our counter with a name ",(0,a.kt)("inlineCode",{parentName:"p"},"myService"),"and an additional label\n",(0,a.kt)("inlineCode",{parentName:"p"},"(host, ${hostname})"),". With such a definition we would see the number of executions for each host, but we could also\ncreate a query in Grafana or DatadogHQ to visualize the aggregated value over all hosts. Using more than one label\nwould allow to create visualizations across any combination of the labels. ")),(0,a.kt)("p",null,"An important aspect of metric aspects is that they ",(0,a.kt)("em",{parentName:"p"},"understand")," values of a certain type. For example, a Gauge\nunderstands ",(0,a.kt)("inlineCode",{parentName:"p"},"Double")," values to manipulate the current value within the gauge. This implies, that for effects\n",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," can not be assigned to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Double")," we have to provide a mapping function ",(0,a.kt)("inlineCode",{parentName:"p"},"A => Double")," so that\nwe can derive the measured value from the effect\xb4s result. "),(0,a.kt)("p",null,"Finally, more complex metrics might require additional information to specify them completely. For example, within a\n",(0,a.kt)("a",{parentName:"p",href:"/zio-metrics-connectors/metrics/metric-reference#histograms"},"histogram")," we need to specify the buckets the observed values shall be counted in. "),(0,a.kt)("p",null,"Please refer to "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zio-metrics-connectors/metrics/metric-reference"},"Metrics Reference")," for more information on the metrics currently supported"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zio-metrics-connectors/metrics/prometheus-client"},"Prometheus Client")," to learn more about the mapping from ZIO Metrics to Prometheus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zio-metrics-connectors/metrics/statsd-client"},"StatsD Client")," to learn more about the mapping from ZIO Metrics to StatsD"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zio-metrics-connectors/metrics/datadog-client"},"DataDog Client")," to learn more about the mapping from ZIO Metrics to DataDog"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zio-metrics-connectors/metrics/micrometer-connector"},"Micrometer")," to learn more about the mapping from ZIO Metrics to Micrometer")))}u.isMDXComponent=!0}}]);