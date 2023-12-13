"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[72365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,m=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"identityeither",title:"IdentityEither"},r=void 0,l={unversionedId:"zio-prelude/functional-abstractions/parameterized-types/identityeither",id:"zio-prelude/functional-abstractions/parameterized-types/identityeither",title:"IdentityEither",description:"IdentityEither[F] describes an associative way to combine two values F[A] and F[B] into a value F[Either[A, B]] with an identity value none of type F[Nothing].",source:"@site/docs/zio-prelude/functional-abstractions/parameterized-types/identityeither.md",sourceDirName:"zio-prelude/functional-abstractions/parameterized-types",slug:"/zio-prelude/functional-abstractions/parameterized-types/identityeither",permalink:"/zio-prelude/functional-abstractions/parameterized-types/identityeither",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functional-abstractions/parameterized-types/identityeither.md",tags:[],version:"current",frontMatter:{id:"identityeither",title:"IdentityEither"},sidebar:"ecosystem-sidebar",previous:{title:"IdentityBoth",permalink:"/zio-prelude/functional-abstractions/parameterized-types/identityboth"},next:{title:"IdentityFlatten",permalink:"/zio-prelude/functional-abstractions/parameterized-types/identityflatten"}},p={},s=[],h={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither[F]")," describes an associative way to combine two values ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," into a value ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Either[A, B]]")," with an identity value ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Nothing]"),"."),(0,i.kt)("p",null,"Its signature is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait AssociativeEither[F[_]] {\n  def either[A, B](fa: => F[A], fb: => F[B]): F[Either[A, B]]\n}\n\ntrait IdentityEither[F[_]] extends AssociativeEither[F] {\n  def none: F[Nothing]\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," value must be an identity element with respect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"either")," operator so that, after eliminating cases of ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," that can never contain values, the following property holds:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"fa <+> none === fa\nnone <+> fa === fa\n")),(0,i.kt)("p",null,"This is the same as the law for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity")," abstraction for concrete types but lifted into the context of parameterized types."),(0,i.kt)("p",null,"To satisfy these properties, rhe ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," value  must must be a value that fails with no useful information."),(0,i.kt)("p",null,"To see what this means, let's look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," instance for ",(0,i.kt)("inlineCode",{parentName:"p"},"Option"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude._\n\nimplicit val OptionIdentityEither: IdentityEither[Option] =\n  new IdentityEither[Option] {\n    def either[A, B](fa: => Option[A], fb: => Option[B]): Option[Either[A, B]] =\n      fa match {\n        case None =>\n          fb match {\n            case None    => None\n            case Some(b) => Some(Right(b))\n          }\n        case Some(a) => Some(Left(a))\n      }\n    val none: Option[Nothing] =\n      None\n  }\n// OptionIdentityEither: IdentityEither[Option] = repl.MdocSession$MdocApp0$$anon$1@5021cc80\n")),(0,i.kt)("p",null,"If we think of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Option[A]")," as representing either a success with a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," or a failure with no useful information, then the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),". Combining any ",(0,i.kt)("inlineCode",{parentName:"p"},"Option[A]")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"orElseEither")," won't change its result."),(0,i.kt)("p",null,"Now let's compare that to ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," to see why we can't define a ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," instance for ",(0,i.kt)("inlineCode",{parentName:"p"},"Either"),"."),(0,i.kt)("p",null,"We said that the identity value must be a value that fails with no useful information but ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," is polymorphic in its error type so we can't define what a value that contains no information would be for an arbitrary type. We don't even know how to construct an value of that type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def none[E]: Either[E, Nothing] =\n  Left(???)\n")),(0,i.kt)("p",null,"To define an identity value we would have to have the concept of an empty error. For example, if we created a data type that could fail without any error then the empty failure would be the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\n\nval noneOption: Either[Option[Nothing], Nothing] =\n  Left(None)\n// noneOption: Either[Option[Nothing], Nothing] = Left(value = None)\n\nval noneChunk: Either[Chunk[Nothing], Nothing] =\n  Left(Chunk.empty)\n// noneChunk: Either[Chunk[Nothing], Nothing] = Left(value = IndexedSeq())\n")),(0,i.kt)("p",null,"Having this ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," value can be useful in certain situations. For example, it can help us to define a ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," operator on a data type in combination with some of the other functional abstractions in ZIO Prelude."),(0,i.kt)("p",null,"However, supporting a ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," value requires allowing the possibility of that a value can fail without containing any errors, which is unattractive in many cases."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," and most effect types such as ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream")," do not have an ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," instance defined for them because is they fail they always fail with a failure ",(0,i.kt)("inlineCode",{parentName:"p"},"E"),". Otherwise when we used an error handling operator we would have to deal with the error as well as the possibility that there is a failure but no error at all."),(0,i.kt)("p",null,"Note that in the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," a workflow can also die with a cause that can potentially be ",(0,i.kt)("inlineCode",{parentName:"p"},"Cause.empty"),", but since the associative operator ",(0,i.kt)("inlineCode",{parentName:"p"},"orElseEither")," does not recover from ",(0,i.kt)("inlineCode",{parentName:"p"},"Die")," failures that doesn't help us with our problem here."),(0,i.kt)("p",null,"The other data types that do tend to have ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," instances are collection types that can be empty. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," instance for ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk")," looks like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"implicit val ChunkIdentityEither: IdentityEither[Chunk] =\n  new IdentityEither[Chunk] {\n    def either[A, B](as: => Chunk[A], bs: => Chunk[B]): Chunk[Either[A, B]] =\n      as.map(Left(_)) ++ bs.map(Right(_))\n    val none: Chunk[Nothing] =\n      Chunk.empty\n  }\n// ChunkIdentityEither: IdentityEither[Chunk] = repl.MdocSession$MdocApp0$$anon$2@4a68be4a\n")),(0,i.kt)("p",null,"Here the identity element is just the empty chunk. If we think of running a collection as producing a set of values and then failing when the collection is empty, ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," is the collection that doesn't produce any values and fails immediately."),(0,i.kt)("p",null,"Another more mathematical way to think about it is that if concatenation corresponds to addition then the empty collection corresponds to zero. or this reason, we can also see that collections that cannot be empty, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"NonEmptyChunk")," from ZIO or ",(0,i.kt)("inlineCode",{parentName:"p"},"NonEmptyList")," from ZIO Prelude, cannot have ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," instances defined for them."),(0,i.kt)("p",null,"We can also define ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," values for contravariant types, though these tend to be less interesting."),(0,i.kt)("p",null,"For contravariant types, the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," value corresponds to a value that can never be run because it has ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing")," as its input type and there are no values of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing"),". There the existence of the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," value and our ability to compose it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"orElseEither")," operator in implies that values can be run independently of each other."),(0,i.kt)("p",null,"For example, let's look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," instance for ",(0,i.kt)("inlineCode",{parentName:"p"},"Predicate"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Predicate[-A] {\n  def run(a: A): Boolean\n}\n\nobject Predicate {\n  implicit val PredicateIdentityEither: IdentityEither[Predicate] =\n    new IdentityEither[Predicate] {\n      def either[A, B](left: => Predicate[A], right: => Predicate[B]): Predicate[Either[A, B]] =\n        new Predicate[Either[A, B]] {\n          def run(either: Either[A, B]): Boolean =\n            either match {\n              case Left(a) => left.run(a)\n              case Right(b) => right.run(b)\n            }\n        }\n      val none: Predicate[Nothing] =\n        new Predicate[Nothing] {\n          def run(a: Nothing): Boolean =\n            a\n    }\n  }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," predicate can never be run, but we can still safely compose it with other predicates with the ",(0,i.kt)("inlineCode",{parentName:"p"},"either")," operator because since there can never be a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing"),", there can also never be a case where the ",(0,i.kt)("inlineCode",{parentName:"p"},"either")," operator tries to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," predicate."),(0,i.kt)("p",null,"Overall the ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," abstraction is a useful one to generalize over the concept of a value of a parameterized type that always fails with no information, complementing the concept of a value that always succeeds with no information from ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth"),"."),(0,i.kt)("p",null,"For concrete types that have such a ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," value there tend to be existing operators defined on the data type that already take advantage of this this functionality, so ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," tends to be less helpful when working with concrete data types."),(0,i.kt)("p",null,"For defining your own data types thinking about whether there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," value can be helpful for API design. As discussed above, there is often a trade off between having an identity element, which is generally a good thing, and providing the guarantee that all failures contain some useful information."),(0,i.kt)("p",null,"Defining an ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither")," instance for your own data type will also let you work with generic code in ZIO Prelude that uses this abstraction."),(0,i.kt)("p",null,"Finally ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityEither"),' can be useful when you are writing generic code to describe the concept that a data type must have this failure element with no information to provide a "default" failure value.'))}c.isMDXComponent=!0}}]);