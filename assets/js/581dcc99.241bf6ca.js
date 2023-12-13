"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[31495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),y=i,m=c["".concat(p,".").concat(y)]||c[y]||u[y]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},47802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"identityflatten",title:"IdentityFlatten"},r=void 0,l={unversionedId:"zio-prelude/functional-abstractions/parameterized-types/identityflatten",id:"zio-prelude/functional-abstractions/parameterized-types/identityflatten",title:"IdentityFlatten",description:"IdentityFlatten[F] describes a way of combining two layers of a value of type F[F[A]] into a F[A] in a way that is associative and has an identity value any of type F[Any].",source:"@site/docs/zio-prelude/functional-abstractions/parameterized-types/identityflatten.md",sourceDirName:"zio-prelude/functional-abstractions/parameterized-types",slug:"/zio-prelude/functional-abstractions/parameterized-types/identityflatten",permalink:"/zio-prelude/functional-abstractions/parameterized-types/identityflatten",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functional-abstractions/parameterized-types/identityflatten.md",tags:[],version:"current",frontMatter:{id:"identityflatten",title:"IdentityFlatten"},sidebar:"ecosystem-sidebar",previous:{title:"IdentityEither",permalink:"/zio-prelude/functional-abstractions/parameterized-types/identityeither"},next:{title:"Invariant",permalink:"/zio-prelude/functional-abstractions/parameterized-types/invariant"}},p={},s=[],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten[F]")," describes a way of combining two layers of a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[F[A]]")," into a ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," in a way that is associative and has an identity value ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Any]"),"."),(0,i.kt)("p",null,"Its signature is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait AssociativeFlatten[F[+_]] {\n  def flatten[A](f: F[F[A]]): F[A]\n}\n\ntrait IdentityFlatten[F[+_]] extends AssociativeFlatten[F] {\n  def any: F[Any]\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," value must be an identity with respect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"flatten")," operator. So if we add a new layer of nesting by mapping a value into the ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," value and then remove that layer with ",(0,i.kt)("inlineCode",{parentName:"p"},"flatten")," we should get the original value back unchanged."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"fa.map(a => any.map(_ => a)).flatten === fa\nany.map(_ => fa).flatten === fa\n\n")),(0,i.kt)("p",null,"This may look slightly different than the normal identity law because we have to map over the value but it is the same as the identity laws for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," abstractions. Note how the two laws say whether we add the additional layer on the inside or the outside doesn't matter."),(0,i.kt)("p",null,"To be an identity element, the ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," value must not do anything when run other than return a value with no information content. This way we can always add a layer and remove it by using ",(0,i.kt)("inlineCode",{parentName:"p"},"flatten")," to get back to the original value."),(0,i.kt)("p",null,"For example the ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," value for ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"unit"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"unit")," workflow doesn't do anything and always succeeds."),(0,i.kt)("p",null,"So we can always ",(0,i.kt)("inlineCode",{parentName:"p"},"flatten")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," workflow constructed by mapping over the ",(0,i.kt)("inlineCode",{parentName:"p"},"unit")," value to the original workflow back."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nval helloIdentity: ZIO[Console, IOException, Unit] =\n  ZIO.unit.map { _ =>\n    Console.printLine("Hello from an identity!")\n  }.flatten\n// helloIdentity: ZIO[Console, IOException, Unit] = OnSuccess(\n//   trace = "repl.MdocSession.MdocApp0.helloIdentity(identityflatten.md:33)",\n//   first = OnSuccess(\n//     trace = "repl.MdocSession.MdocApp0.helloIdentity(identityflatten.md:31)",\n//     first = Sync(\n//       trace = "",\n//       eval = zio.ZIO$$$Lambda$17712/0x00007f359e72bc68@2d68c30a\n//     ),\n//     successK = zio.ZIO$$Lambda$17789/0x00007f359e2243d0@56a1d85f\n//   ),\n//   successK = zio.ZIO$$Lambda$17790/0x00007f359e225520@16c982e7\n// )\n')),(0,i.kt)("p",null,"Recall from our discussion of ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeFlatten")," that the ",(0,i.kt)("inlineCode",{parentName:"p"},"flatten")," operator corresponds to running a workflow, which returns a new workflow, and then running the workflow. Here the ",(0,i.kt)("inlineCode",{parentName:"p"},"unit")," workflow doesn't do anything and always succeeds so we can simply eliminate it."),(0,i.kt)("p",null,"Just like the ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," value that is an identity with respect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"both")," operator of a ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," value represents a successful value that contains no information. So other examples of the ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," value would include:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val anyOption: Option[Any] =\n  Some(())\n// anyOption: Option[Any] = Some(value = ())\n\nval anyEither: Either[Nothing, Any] =\n  Right(())\n// anyEither: Either[Nothing, Any] = Right(value = ())\n\nval anyList: List[Any] =\n  List(())\n// anyList: List[Any] = List(())\n")),(0,i.kt)("p",null,"By combining the structure described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten")," abstraction and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," abstraction we can also define the ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed")," operator we saw from ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude._\n\ndef succeed[F[+_]: IdentityFlatten : Covariant, A](a: => A): F[A] =\n  IdentityFlatten[F].any.map(_ => a)\n")),(0,i.kt)("p",null,"As discussed in the section on ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed"),' operator is helpful because it lets us "lift" any normal value into the context of the parameterized type.'),(0,i.kt)("p",null,"For example, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," we can import an arbitrary block of Scala code into a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," workflow."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def helloScala: ZIO[Any, Nothing, Unit] =\n  ZIO.succeed(println("Hello Scala!"))\n')),(0,i.kt)("p",null,"For this operator to be well defined we have to be able to construct a value ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," that doesn't do anything and has no information content. If all values of the parameterized type required some additional information, for example, we would not be able to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten")," abstraction or ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed")," for it."),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed")," operator being generally useful, there are some other operators that require an ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten")," instance so that they can use it in their own implementations."),(0,i.kt)("p",null,"In particular, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," abstraction defines a set of operators that allow us to fold over a collection in the context of a parameterized type. These require that we have an ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten")," instance so that if the collection is empty we can simply succeed with an empty collection in the context of the parameterized type."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten")," abstraction is quite powerful, combining the flexibility of the ",(0,i.kt)("inlineCode",{parentName:"p"},"AssociativeFlatten")," abstraction to run one value and then use its result to run another value with the ability to lift arbitrary values into the context of the parameterized type."),(0,i.kt)("p",null,"If you are using data types from ZIO or the standard library there are some operators defined on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," abstraction that can be helpful but otherwise the operators defined in terms of ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten")," are likely already implemented directly on the data types you are using."),(0,i.kt)("p",null,"If you are implementing your own data type you should certainly consider whether your data type can implement ",(0,i.kt)("inlineCode",{parentName:"p"},"flatMap"),", or whether you explicitly don't want to. Either way being able to lift a value into the parameterized type with ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed")," using either the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten")," abstraction is extremely useful so you should either implement one of those abstractions or have very specific reasons why that is not possible."),(0,i.kt)("p",null,"Finally, for writing generic code the combination of the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityFlatten")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," abstractions is also quite powerful, allowing modeling imperative code in a functional context."))}u.isMDXComponent=!0}}]);