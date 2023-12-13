"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[93403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(r,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={id:"index",title:"ZIO SBT"},s=void 0,o={unversionedId:"zio-sbt/index",id:"zio-sbt/index",title:"ZIO SBT",description:"ZIO SBT contains multiple sbt plugins that are useful for ZIO projects. It provides high-level SBT utilities that simplify the development of ZIO applications.",source:"@site/docs/zio-sbt/index.md",sourceDirName:"zio-sbt",slug:"/zio-sbt/",permalink:"/zio-sbt/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-sbt/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"ZIO SBT"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO S3",permalink:"/zio-s3/"},next:{title:"ZIO SQL",permalink:"/zio-sql/"}},r={},p=[{value:"Installation",id:"installation",level:2},{value:"ZIO SBT Ecosystem",id:"zio-sbt-ecosystem",level:2},{value:"ZIO SBT Website",id:"zio-sbt-website",level:2},{value:"ZIO SBT CI Plugin",id:"zio-sbt-ci-plugin",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"Testing Strategies",id:"testing-strategies",level:2},{value:"Default Testing Strategy",id:"default-testing-strategy",level:3},{value:"Concurrent Testing Strategy",id:"concurrent-testing-strategy",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ZIO SBT")," contains multiple sbt plugins that are useful for ZIO projects. It provides high-level SBT utilities that simplify the development of ZIO applications."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Production%20Ready-brightgreen.svg",alt:"Production Ready"}))," ",(0,i.kt)("img",{parentName:"p",src:"https://github.com/zio/zio-sbt/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,i.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-sbt-website_2.12/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-sbt-website_2.12.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-sbt-website_2.12/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-sbt-website_2.12.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-sbt-docs_2.12"},(0,i.kt)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-sbt-docs_2.12/javadoc.svg",alt:"javadoc"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-sbt"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-sbt?style=social",alt:"ZIO SBT"}))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Add the following lines to your ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("dev.zio" % "zio-sbt-ecosystem" % "0.4.0-alpha.21")\naddSbtPlugin("dev.zio" % "zio-sbt-ci"        % "0.4.0-alpha.21")\naddSbtPlugin("dev.zio" % "zio-sbt-website"   % "0.4.0-alpha.21")\n')),(0,i.kt)("p",null,"Then you can enable them by using the following code in your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"enablePlugins(\n  ZioSbtWebsitePlugin,\n  ZioSbtEcosystemPlugin,\n  ZioSbtCiPlugin\n)\n")),(0,i.kt)("h2",{id:"zio-sbt-ecosystem"},"ZIO SBT Ecosystem"),(0,i.kt)("p",null,"ZIO SBT Ecosystem plugin is an sbt plugin that provides a set of sbt settings and tasks that are very common and useful for configuring and managing ZIO projects. It is designed help developers to quickly set up a new ZIO project with a minimal amount of effort."),(0,i.kt)("p",null,"This pluging provides the following settings with default values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"scala212"),(0,i.kt)("li",{parentName:"ul"},"scala213"),(0,i.kt)("li",{parentName:"ul"},"scala3")),(0,i.kt)("p",null,"The default values are the latest stable versions of Scala 2.12, 2.13, and Scala 3. All of these settings are of type ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," and can be overridden by the user."),(0,i.kt)("p",null,"By having these settings, then we can use them in other sbt settings. For example, we can use them to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"crossScalaVersions")," setting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"crossScalaVersions := Seq(scala212.value, scala213.value, scala3.value)\n")),(0,i.kt)("p",null,"There are also some other settings that are useful for configuring the projects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stdSettings"),"\u2014 a set of standard settings which are common for every ZIO project, which includes configuring:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"silencer plugin"),(0,i.kt)("li",{parentName:"ul"},"kind projector plugin"),(0,i.kt)("li",{parentName:"ul"},"cross project plugin"),(0,i.kt)("li",{parentName:"ul"},"scalafix plugin"),(0,i.kt)("li",{parentName:"ul"},"java target platform"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enableZIO"),"- a set of ZIO related settings such as enabling zio streams and ZIO test framework."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jsSettings"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"nativeSettings"),"- common platform specific settings for Scala.js and Scala Native.")),(0,i.kt)("p",null,"It also provides some helper methods that are useful for configuring a compiler option for a specific Scala version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"optionsOn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"optionsOnExcept")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"optionsOnOrElse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addOptionsOn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addOptionsOnOrElse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addOptionsOnExcept"))),(0,i.kt)("p",null,"And the same for adding a dependency for a specific Scala version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependenciesOn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependenciesOnExcept")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependenciesOnOrElse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addDependenciesOn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addDependenciesOnExcept")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addDependenciesOnOrElse"))),(0,i.kt)("h2",{id:"zio-sbt-website"},"ZIO SBT Website"),(0,i.kt)("p",null,"ZIO SBT Website is an SBT plugin that has the following tasks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sbt compileDocs"),"\u2014 compile documentation inside ",(0,i.kt)("inlineCode",{parentName:"li"},"docs")," directory. The compilation result will be inside ",(0,i.kt)("inlineCode",{parentName:"li"},"website/docs")," directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sbt installWebsite"),"\u2014 creates a website for the project inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"website")," directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sbt previewWebsite"),"\u2014 runs a local webserver that serves documentation locally on http://localhost:3000. By changing the documentation inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"docs")," directory, the website will be reloaded with new content."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sbt publishToNpm"),"\u2014 publishes documentation inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"docs")," directory to the npm registry."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sbt generateReadme"),"\u2014 generate README.md file from ",(0,i.kt)("inlineCode",{parentName:"li"},"docs/index.md")," and sbt setting keys.")),(0,i.kt)("h2",{id:"zio-sbt-ci-plugin"},"ZIO SBT CI Plugin"),(0,i.kt)("p",null,"ZIO SBT CI is an sbt plugin which generates a GitHub workflow for a project, making it easier to set up continuous integration (CI) pipelines for Scala projects. With this plugin, developers can streamline their development workflow by automating the testing and deployment process, reducing manual effort and errors. The plugin is designed to work seamlessly with sbt, the popular build tool for Scala projects, and integrates smoothly with GitHub Actions, the CI/CD platform provided by GitHub."),(0,i.kt)("p",null,"ZIO SBT CI provides a simple and efficient way to configure, manage, and run CI pipelines, helping teams to deliver high-quality software faster and with greater confidence."),(0,i.kt)("p",null,"ZIO SBT CI plugin generates a default GitHub workflow that includes common CI tasks such as building, testing, and publishing artifacts. However, users can also manually customize the workflow. This plugin is designed to be flexible and extensible, making it easy for users to tailor the workflow to their specific needs. Additionally, the plugin also provides tons of optional sbt settings that users can modify to change various aspects of the generated workflow. Overall, ZIO SBT CI plugin strikes a balance between automation and flexibility, allowing users to automate their CI process while still giving them control over how the workflow is generated."),(0,i.kt)("h3",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"To use ZIO SBT CI plugin, add the following lines to your ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("dev.zio" % "zio-sbt-ci" % "0.4.0-alpha.21")\n\nresolvers ++= Resolver.sonatypeOssRepos("public")\n')),(0,i.kt)("p",null,"Then in your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file, enable the plugin by adding the following line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"enablePlugins(ZioSbtCiPlugin)\n")),(0,i.kt)("p",null,"Now you can generate a Github workflow by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sbt ciGenerateGithubWorkflow\n")),(0,i.kt)("p",null,"This will generate a GitHub workflow file inside the ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows")," directory, named ",(0,i.kt)("inlineCode",{parentName:"p"},"ci.yml"),". The workflow file contains following default Jobs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build"),(0,i.kt)("li",{parentName:"ul"},"Lint"),(0,i.kt)("li",{parentName:"ul"},"Test"),(0,i.kt)("li",{parentName:"ul"},"Update Readme")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("p",{parentName:"blockquote"},"To use this plugin, we also need to install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apps/zio-assistant"},"ZIO Assistant")," bot.")),(0,i.kt)("h2",{id:"testing-strategies"},"Testing Strategies"),(0,i.kt)("h3",{id:"default-testing-strategy"},"Default Testing Strategy"),(0,i.kt)("p",null,"The default testing strategy for ZIO SBT CI plugin is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt +test")," on java 8, 11 and 17. So this will generate the following job:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"test:\n  name: Test\n  runs-on: ubuntu-latest\n  continue-on-error: false\n  strategy:\n    fail-fast: false\n    matrix:\n      java: ['11', '17', '21']\n  steps:\n  - name: Install libuv\n    run: sudo apt-get update && sudo apt-get install -y libuv1-dev\n  - name: Setup Scala\n    uses: actions/setup-java@v3.12.0\n    with:\n      distribution: corretto\n      java-version: ${{ matrix.java }}\n      check-latest: true\n  - name: Cache Dependencies\n    uses: coursier/cache-action@v6\n  - name: Git Checkout\n    uses: actions/checkout@v4.1.0\n    with:\n      fetch-depth: '0'\n  - name: Test\n    run: sbt +test\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sbt +test")," command will run the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," task for all submodules in the project against all Scala versions defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"crossScalaVersions")," setting."),(0,i.kt)("h3",{id:"concurrent-testing-strategy"},"Concurrent Testing Strategy"),(0,i.kt)("p",null,"In some cases, we may have multiple submodules in our project and we want to test them concurrently using GitHub Actions matrix strategy."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ciTargetScalaVersions")," setting key is used to define a mapping of project names to the Scala versions that should be used for testing phase of continuous integration (CI)."),(0,i.kt)("p",null,'For example, suppose we have a project with the name "submoduleA" and we want to test it against Scala ',(0,i.kt)("inlineCode",{parentName:"p"},"2.12.18"),', and for the "submoduleB" we want to test it against Scala ',(0,i.kt)("inlineCode",{parentName:"p"},"2.12.18")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"2.13.12")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"3.3.1"),", We can define the ",(0,i.kt)("inlineCode",{parentName:"p"},"ciTargetScalaVersions")," setting as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'ThisBuild / ciTargetScalaVersions := Map(\n    "submoduleA" -> Seq("2.12.18"),\n    "submoduleB" -> Seq("2.12.18", "2.13.12", "3.3.1")\n  )\n')),(0,i.kt)("p",null,"In the example provided, ",(0,i.kt)("inlineCode",{parentName:"p"},"ciTargetScalaVersions")," is defined at the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThisBuild")," level, meaning that the setting will apply to all projects within the build. The setting defines a Map where the key is the name of the current project, obtained by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," method on the ",(0,i.kt)("inlineCode",{parentName:"p"},"thisProject")," setting, and the value is a sequence of Scala versions obtained from the ",(0,i.kt)("inlineCode",{parentName:"p"},"crossScalaVersions")," of each submodule setting."),(0,i.kt)("p",null,"To simplify this process, we can populate the versions using each submodule's crossScalaVersions setting as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"ThisBuild / ciTargetScalaVersions := Map(\n  (submoduleA / thisProject).value.id -> (submoduleA / crossScalaVersions).value,\n  (submoduleB / thisProject).value.id -> (submoduleB / crossScalaVersions).value\n)\n")),(0,i.kt)("p",null,"The above code can be simplified further by using ",(0,i.kt)("inlineCode",{parentName:"p"},"targetScalaVersionsFor")," helper method, it takes a list of submodules and returns a Map of project names to their ",(0,i.kt)("inlineCode",{parentName:"p"},"crossScalaVersions"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"ThisBuild / ciTargetScalaVersions := targetScalaVersionsFor(submoduleA, submoduleB).value\n")),(0,i.kt)("p",null,"This will generate the following job:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"test:\n  name: Test\n  runs-on: ubuntu-latest\n  continue-on-error: false\n  strategy:\n    fail-fast: false\n    matrix:\n      java: ['11', '17', '21']\n      scala-project:\n      - ++2.12.18 submoduleA\n      - ++2.12.18 submoduleB\n      - ++2.13.12 submoduleB\n      - ++3.3.1 submoduleB\n  steps:\n  - name: Install libuv\n    run: sudo apt-get update && sudo apt-get install -y libuv1-dev\n  - name: Setup Scala\n    uses: actions/setup-java@v3.10.0\n    with:\n      distribution: corretto\n      java-version: ${{ matrix.java }}\n      check-latest: true\n  - name: Cache Dependencies\n    uses: coursier/cache-action@v6\n  - name: Git Checkout\n    uses: actions/checkout@v4.1.0\n    with:\n      fetch-depth: '0'\n  - name: Test\n    run: sbt ${{ matrix.scala-project }}/test\n")))}d.isMDXComponent=!0}}]);