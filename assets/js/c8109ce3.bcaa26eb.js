"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[75274],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},h=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(o),d=i,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||r;return o?n.createElement(m,a(a({ref:t},h),{},{components:o})):n.createElement(m,a({ref:t},h))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},59245:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=o(87462),i=(o(67294),o(3905));const r={id:"about_contributing",title:"ZIO Contributor Guidelines"},a=void 0,s={unversionedId:"about/about_contributing",id:"version-1.0.18/about/about_contributing",title:"ZIO Contributor Guidelines",description:"Thank you for your interest in contributing to ZIO, which is a small, zero-dependency library for doing type-safe, composable concurrent and asynchronous programming!",source:"@site/versioned_docs/version-1.0.18/about/contributing.md",sourceDirName:"about",slug:"/about/about_contributing",permalink:"/1.0.18/about/about_contributing",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/about/contributing.md",tags:[],version:"1.0.18",frontMatter:{id:"about_contributing",title:"ZIO Contributor Guidelines"}},l={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Get The Project",id:"get-the-project",level:3},{value:"Build the Project",id:"build-the-project",level:3},{value:"Find an Issue",id:"find-an-issue",level:3},{value:"Fix an Issue",id:"fix-an-issue",level:3},{value:"Prepare Your Code",id:"prepare-your-code",level:3},{value:"Create a Pull Request",id:"create-a-pull-request",level:3},{value:"Get Your Pull Request Merged",id:"get-your-pull-request-merged",level:3},{value:"1. Definitions",id:"1-definitions",level:2},{value:"2. Grant of Rights",id:"2-grant-of-rights",level:2},{value:"2.1 Copyright License",id:"21-copyright-license",level:3},{value:"2.2 Patent License",id:"22-patent-license",level:3},{value:"2.3 Outbound License",id:"23-outbound-license",level:3},{value:"2.4 Moral Rights",id:"24-moral-rights",level:3},{value:"2.5 Our Rights",id:"25-our-rights",level:3},{value:"2.6 Reservation of Rights",id:"26-reservation-of-rights",level:3},{value:"3. Agreement",id:"3-agreement",level:2},{value:"4. Disclaimer",id:"4-disclaimer",level:2},{value:"5. Consequential Damage Waiver",id:"5-consequential-damage-waiver",level:2},{value:"6. Miscellaneous",id:"6-miscellaneous",level:2}],h={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Thank you for your interest in contributing to ZIO, which is a small, zero-dependency library for doing type-safe, composable concurrent and asynchronous programming!"),(0,i.kt)("p",null,"We welcome contributions from all people! You will learn about functional programming, and you will add your own unique touch to the ZIO project. We are happy to help you to get started and to hear your suggestions and answer your questions."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You too can contribute to ZIO, we believe in you!")),(0,i.kt)("h1",{id:"contributing"},"Contributing"),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"To begin contributing, please follow these steps:"),(0,i.kt)("h3",{id:"get-the-project"},"Get The Project"),(0,i.kt)("p",null,"If you do not already have one, sign up for a free ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/join?source=header-home"},"GitHub Account"),"."),(0,i.kt)("p",null,"After you ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/login"},"log into")," GitHub using your account, go to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio"},"ZIO Project Page"),", and click on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/fork"},"Fork")," to fork the ZIO repository into your own account."),(0,i.kt)("p",null,"You will make ",(0,i.kt)("em",{parentName:"p"},"all")," contributions from your own account. No one contributes ",(0,i.kt)("em",{parentName:"p"},"directly")," to the main repository. Contributors only ever merge code from other people's forks into the main repository."),(0,i.kt)("p",null,"Once you have forked the repository, you can now clone your forked repository to your own machine, so you have a complete copy of the project and can begin safely making your modifications (even without an Internet connection)."),(0,i.kt)("p",null,"To clone your forked repository, first make sure you have installed ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git"),", the version control system used by GitHub. Then open a Terminal and type the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir zio\ncd zio\ngit clone git@github.com:your-user-name/zio.git .\n")),(0,i.kt)("p",null,"If these steps were successful, then congratulations, you now have a complete copy of the ZIO project!"),(0,i.kt)("p",null,"The next step is to build the project on your machine, to ensure you know how to compile the project and run tests."),(0,i.kt)("h3",{id:"build-the-project"},"Build the Project"),(0,i.kt)("p",null,"The official way to build the project is with sbt. An sbt build file is included in the project, so if you choose to build the project this way, you won't have to do any additional configuration or setup (others choose to build the project using IntelliJ IDEA, Gradle, Maven, Mill, or Fury)."),(0,i.kt)("p",null,"We use a custom sbt script, which is included in the repository, in order to ensure settings are uniform across all development machines, and the continuous integration service (Circle CI)."),(0,i.kt)("p",null,"The sbt script is in the root of the repository. To launch this script from your Terminal window, simply type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./sbt\n")),(0,i.kt)("p",null,"Sbt will launch, read the project build file, and download dependencies as required."),(0,i.kt)("p",null,"You can now compile the production source code with the following sbt command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"compile\n")),(0,i.kt)("p",null,"You can compile the test source code with the following sbt command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Test/compile\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.scala-sbt.org"},"Learn more")," about sbt to understand how you can list projects, switch projects, and otherwise manage an sbt project."),(0,i.kt)("p",null,"The main project in ZIO is ",(0,i.kt)("inlineCode",{parentName:"p"},"coreJVM")," (the core project on the JVM; there is also ",(0,i.kt)("inlineCode",{parentName:"p"},"coreJS")," for the core project on Scala.js), which you can focus on using sbt by issuing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"project coreJVM\n")),(0,i.kt)("h3",{id:"find-an-issue"},"Find an Issue"),(0,i.kt)("p",null,"You may have your own idea about what contributions to make to ZIO, which is great! If you want to make sure the ZIO contributors are open to your idea, you can ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/issues/new"},"open an issue")," first on the ZIO project site."),(0,i.kt)("p",null,"Otherwise, if you have no ideas about what to contribute, you can find a large supply of feature requests and bugs on the project's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/issues"},"issue tracker"),"."),(0,i.kt)("p",null,"Issues are tagged with various labels, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"good first issue"),", which help you find issues that are a fit for you."),(0,i.kt)("p",null,"If some issue is confusing or you think you might need help, then just post a comment on the issue asking for help. Typically, the author of the issue will provide as much help as you need, and if the issue is critical, leading ZIO contributors will probably step in to mentor you and give you a hand, making sure you understand the issue thoroughly."),(0,i.kt)("p",null,"Once you've decided on an issue and understand what is necessary to complete the issue, then it's a good idea to post a comment on the issue saying that you intend to work on it. Otherwise, someone else might work on it too!"),(0,i.kt)("h3",{id:"fix-an-issue"},"Fix an Issue"),(0,i.kt)("p",null,"Once you have an issue, the next step is to fix the bug or implement the feature. Since ZIO is an open source project, there are no deadlines. Take your time!"),(0,i.kt)("p",null,"The only thing you have to worry about is if you take too long, especially for a critical issue, eventually someone else will come along and work on the issue."),(0,i.kt)("p",null,"If you shoot for 2-3 weeks for most issues, this should give you plenty of time without having to worry about having your issue stolen."),(0,i.kt)("p",null,"If you get stuck, please consider ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/compare"},"opening a pull request")," for your incomplete work, and asking for help (just prefix the pull request by ",(0,i.kt)("em",{parentName:"p"},"WIP"),"). In addition, you can comment on the original issue, pointing people to your own fork. Both of these are great ways to get outside help from people more familiar with the project."),(0,i.kt)("h3",{id:"prepare-your-code"},"Prepare Your Code"),(0,i.kt)("p",null,"If you've gotten this far, congratulations! You've implemented a new feature or fixed a bug. Now you're in the last mile, and the next step is submitting your code for review, so that other contributors can spot issues and help improve the quality of the code."),(0,i.kt)("p",null,"To do this, you need to commit your changes locally. A good way to find out what you did locally is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"git status")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git status\n")),(0,i.kt)("p",null,"If you see new files, you will have to tell ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," to add them to the repository using ",(0,i.kt)("inlineCode",{parentName:"p"},"git add"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add core/src/shared/zio/zio/NewFile.scala\n")),(0,i.kt)("p",null,"Then you can commit all your changes at once with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -am "Fixed #94211 - Optimized race for lists of effects"\n')),(0,i.kt)("p",null,"At this point, you have saved your work locally, to your machine, but you still need to push your changes to your fork of the repository. To do that, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"git push")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push\n")),(0,i.kt)("p",null,"Now while you were working on this great improvement, it's quite likely that other ZIO contributors were making their own improvements. You need to pull all those improvements into your own code base to resolve any conflicts and make sure the changes all work well together."),(0,i.kt)("p",null,"To do that, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git pull git@github.com:zio/zio.git master\n")),(0,i.kt)("p",null,"You may get a warning from Git that some files conflicted. Don't worry! That just means you and another contributor edited the same parts of the same files."),(0,i.kt)("p",null,"Using a text editor, open up the conflicted files, and try to merge them together, preserving your changes and the other changes (both are important!)."),(0,i.kt)("p",null,"Once you are done, you can commit again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -am "merged upstream changes"\n')),(0,i.kt)("p",null,"At this point, you should re-run all tests to make sure everything is passing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# If you are already in a SBT session you can type only 'test'\n\nsbt test\n")),(0,i.kt)("p",null,"If all the tests are passing, then you can format your code to be shipped:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# If you are already in a SBT session you can type only 'fmt'\n\nsbt fmt\n")),(0,i.kt)("p",null,"For simplicity, there is a command that does everything. Formats the code, compiles it and runs tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# If you are already in a SBT session you can type only 'build'\n\nsbt build\n")),(0,i.kt)("p",null,"If your changes altered an API, then you may need to rebuild the microsite to make sure none of the (compiled) documentation breaks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# If you are already in a SBT session you can type only 'docs/docusaurusCreateSite'\n\nsbt docs/docusaurusCreateSite\n")),(0,i.kt)("p",null,"(If you get an error about ",(0,i.kt)("em",{parentName:"p"},"Jekyll"),", that means all the code examples work and you can ignore the rest.)"),(0,i.kt)("p",null,"Finally, if you are up-to-date with master, all your tests are passing, you have properly formatted your code, and the microsite builds properly, then it's time to submit your work for review!"),(0,i.kt)("h3",{id:"create-a-pull-request"},"Create a Pull Request"),(0,i.kt)("p",null,"To create a pull request, first push all your changes to your fork of the project repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push\n")),(0,i.kt)("p",null,"Next, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/compare"},"open a new pull request")," on GitHub, and select ",(0,i.kt)("em",{parentName:"p"},"Compare Across Forks"),". On the right hand side, choose your own fork of the ZIO repository, in which you've been making your contribution."),(0,i.kt)("p",null,"Provide a description for the pull request, which details the issue it is fixing, and has other information that may be helpful to developers reviewing the pull request."),(0,i.kt)("p",null,"Finally, click ",(0,i.kt)("em",{parentName:"p"},"Create Pull Request"),"!"),(0,i.kt)("h3",{id:"get-your-pull-request-merged"},"Get Your Pull Request Merged"),(0,i.kt)("p",null,"Once you have a pull request open, it's still your job to get it merged! To get it merged, you need at least one core ZIO contributor to approve the code."),(0,i.kt)("p",null,"If you know someone who would be qualified to review your code, you can request that person, either in the comments of the pull request, or on the right-hand side, if you have appropriate permissions."),(0,i.kt)("p",null,"Code reviews can sometimes take a few days, because open source projects are largely done outside of work, in people's leisure time. Be patient, but don't wait forever. If you haven't gotten a review within a few days, then consider gently reminding people that you need a review."),(0,i.kt)("p",null,"Once you receive a review, you will probably have to go back and make minor changes that improve your contribution and make it follow existing conventions in the code base. This is normal, even for experienced contributors, and the rigorous reviews help ensure ZIO's code base stays high quality."),(0,i.kt)("p",null,"If iterating on a feature resulted in several commits, consider squashing them before pushing the final version of the code.\nOne of the ways to squash e.g. 5 last commits: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git reset --soft HEAD~5\ngit commit -am "add feature X"\ngit push --force\n')),(0,i.kt)("p",null,"After you make changes, you may need to remind reviewers to check out the code again. If they give a final approval, it means your code is ready for merge! Usually this will happen at the same time, though for controversial changes, a contributor may wait for someone more senior to merge."),(0,i.kt)("p",null,"If you don't get a merge in a day after your review is successful, then please gently remind folks that your code is ready to be merged."),(0,i.kt)("p",null,"Sit back, relax, and enjoy being a ZIO contributor!"),(0,i.kt)("h1",{id:"zio-contributor-license-agreement"},"ZIO Contributor License Agreement"),(0,i.kt)("p",null,"Thank you for your interest in contributing to the ZIO open source project."),(0,i.kt)("p",null,'This contributor agreement ("Agreement") describes the terms and conditions under which you may Submit a Contribution to Us. By Submitting a Contribution to Us, you accept the terms and conditions in the Agreement. If you do not accept the terms and conditions in the Agreement, you must not Submit any Contribution to Us.'),(0,i.kt)("p",null,"This is a legally binding document, so please read it carefully before accepting the terms and conditions. If you accept this Agreement, the then-current version of this Agreement shall apply each time you Submit a Contribution. The Agreement may cover more than one software project managed by Us."),(0,i.kt)("h2",{id:"1-definitions"},"1. Definitions"),(0,i.kt)("p",null,'"We" or "Us" means Ziverge, Inc., and its duly appointed and authorized representatives.'),(0,i.kt)("p",null,'"You" means the individual or entity who Submits a Contribution to Us.'),(0,i.kt)("p",null,'"Contribution" means any work of authorship that is Submitted by You to Us in which You own or assert ownership of the Copyright. You may not Submit a Contribution if you do not own the Copyright in the entire work of authorship.'),(0,i.kt)("p",null,'"Copyright" means all rights protecting works of authorship owned or controlled by You, including copyright, moral and neighboring rights, as appropriate, for the full term of their existence including any extensions by You.'),(0,i.kt)("p",null,'"Material" means the work of authorship which is made available by Us to third parties. When this Agreement covers more than one software project, the Material means the work of authorship to which the Contribution was Submitted. After You Submit the Contribution, it may be included in the Material.'),(0,i.kt)("p",null,'"Submit" means any form of electronic, verbal, or written communication sent to Us or our representatives, including but not limited to electronic mailing lists, electronic mail, source code control systems, pull requests, and issue tracking systems that are managed by, or on behalf of, Us for the purpose of discussing and improving the Material, but excluding communication that is conspicuously marked or otherwise designated in writing by You as "Not a Contribution."'),(0,i.kt)("p",null,'"Submission Date" means the date on which You Submit a Contribution to Us.'),(0,i.kt)("p",null,'"Effective Date" means the earliest date You execute this Agreement by Submitting a Contribution to Us.'),(0,i.kt)("h2",{id:"2-grant-of-rights"},"2. Grant of Rights"),(0,i.kt)("h3",{id:"21-copyright-license"},"2.1 Copyright License"),(0,i.kt)("p",null,"2.1.1. You retain ownership of the Copyright in Your Contribution and have the same rights to use or license the Contribution which You would have had without entering into the Agreement."),(0,i.kt)("p",null,"2.1.2. To the maximum extent permitted by the relevant law, You grant to Us a perpetual, worldwide, non-exclusive, transferable, royalty-free, irrevocable license under the Copyright covering the Contribution, with the right to sublicense such rights through multiple tiers of sublicensees, to reproduce, modify, display, perform and distribute the Contribution as part of the Material; provided that this license is conditioned upon compliance with Section 2.3."),(0,i.kt)("h3",{id:"22-patent-license"},"2.2 Patent License"),(0,i.kt)("p",null,"For patent claims including, without limitation, method, process, and apparatus claims which You own, control or have the right to grant, now or in the future, You grant to Us a perpetual, worldwide, non-exclusive, transferable, royalty-free, irrevocable patent license, with the right to sublicense these rights to multiple tiers of sublicensees, to make, have made, use, sell, offer for sale, import and otherwise transfer the Contribution and the Contribution in combination with the Material (and portions of such combination). This license is granted only to the extent that the exercise of the licensed rights infringes such patent claims; and provided that this license is conditioned upon compliance with Section 2.3."),(0,i.kt)("h3",{id:"23-outbound-license"},"2.3 Outbound License"),(0,i.kt)("p",null,"Based on the grant of rights in Sections 2.1 and 2.2, if We include Your Contribution in a Material, We may license the Contribution under any license, including copyleft, permissive, commercial, or proprietary licenses. As a condition on the exercise of this right, We agree to also license the Contribution under the terms of the license or licenses which We are using for the Material on the Submission Date."),(0,i.kt)("h3",{id:"24-moral-rights"},"2.4 Moral Rights"),(0,i.kt)("p",null,"If moral rights apply to the Contribution, to the maximum extent permitted by law, You waive and agree not to assert such moral rights against Us or our successors in interest, or any of our licensees, either direct or indirect."),(0,i.kt)("h3",{id:"25-our-rights"},"2.5 Our Rights"),(0,i.kt)("p",null,"You acknowledge that We are not obligated to use Your Contribution as part of the Material and may decide to include any Contribution We consider appropriate."),(0,i.kt)("h3",{id:"26-reservation-of-rights"},"2.6 Reservation of Rights"),(0,i.kt)("p",null,"Any rights not expressly licensed under this section are expressly reserved by You."),(0,i.kt)("h2",{id:"3-agreement"},"3. Agreement"),(0,i.kt)("p",null,"You confirm that:"),(0,i.kt)("p",null,"a. You have the legal authority to enter into this Agreement."),(0,i.kt)("p",null,"b. You own the Copyright and patent claims covering the Contribution which are required to grant the rights under Section 2."),(0,i.kt)("p",null,"c. The grant of rights under Section 2 does not violate any grant of rights which You have made to third parties, including Your employer. If You are an employee, You have had Your employer approve this Agreement or sign the Entity version of this document. If You are less than eighteen years old, please have Your parents or guardian sign the Agreement."),(0,i.kt)("p",null,"d. You have followed the instructions in, if You do not own the Copyright in the entire work of authorship Submitted."),(0,i.kt)("h2",{id:"4-disclaimer"},"4. Disclaimer"),(0,i.kt)("p",null,'EXCEPT FOR THE EXPRESS WARRANTIES IN SECTION 3, THE CONTRIBUTION IS PROVIDED "AS IS". MORE PARTICULARLY, ALL EXPRESS OR IMPLIED WARRANTIES INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE EXPRESSLY DISCLAIMED BY YOU TO US. TO THE EXTENT THAT ANY SUCH WARRANTIES CANNOT BE DISCLAIMED, SUCH WARRANTY IS LIMITED IN DURATION TO THE MINIMUM PERIOD PERMITTED BY LAW.'),(0,i.kt)("h2",{id:"5-consequential-damage-waiver"},"5. Consequential Damage Waiver"),(0,i.kt)("p",null,"TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL YOU BE LIABLE FOR ANY LOSS OF PROFITS, LOSS OF ANTICIPATED SAVINGS, LOSS OF DATA, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL AND EXEMPLARY DAMAGES ARISING OUT OF THIS AGREEMENT REGARDLESS OF THE LEGAL OR EQUITABLE THEORY (CONTRACT, TORT OR OTHERWISE) UPON WHICH THE CLAIM IS BASED."),(0,i.kt)("h2",{id:"6-miscellaneous"},"6. Miscellaneous"),(0,i.kt)("p",null,'6.1. This Agreement will be governed by and construed in accordance with the laws of the state of Maryland, in the United States of America, excluding its conflicts of law provisions. Under certain circumstances, the governing law in this section might be superseded by the United Nations Convention on Contracts for the International Sale of Goods ("UN Convention") and the parties intend to avoid the application of the UN Convention to this Agreement and, thus, exclude the application of the UN Convention in its entirety to this Agreement.'),(0,i.kt)("p",null,"6.2. This Agreement sets out the entire agreement between You and Us for Your Contributions to Us and overrides all other agreements or understandings."),(0,i.kt)("p",null,"6.3. If You or We assign the rights or obligations received through this Agreement to a third party, as a condition of the assignment, that third party must agree in writing to abide by all the rights and obligations in the Agreement."),(0,i.kt)("p",null,"6.4. The failure of either party to require performance by the other party of any provision of this Agreement in one situation shall not affect the right of a party to require such performance at any time in the future. A waiver of performance under a provision in one situation shall not be considered a waiver of the performance of the provision in the future or a waiver of the provision in its entirety."),(0,i.kt)("p",null,"6.5. If any provision of this Agreement is found void and unenforceable, such provision will be replaced to the extent possible with a provision that comes closest to the meaning of the original provision and which is enforceable. The terms and conditions set forth in this Agreement shall apply notwithstanding any failure of essential purpose of this Agreement or any limited remedy to the maximum extent possible under law."))}p.isMDXComponent=!0}}]);