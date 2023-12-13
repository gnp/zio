"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[38195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"foreach",title:"ForEach"},r=void 0,l={unversionedId:"zio-prelude/functional-abstractions/parameterized-types/foreach",id:"zio-prelude/functional-abstractions/parameterized-types/foreach",title:"ForEach",description:"ForEach[F] describes a parameterized type F[A] that contains zero or more values of type A.",source:"@site/docs/zio-prelude/functional-abstractions/parameterized-types/foreach.md",sourceDirName:"zio-prelude/functional-abstractions/parameterized-types",slug:"/zio-prelude/functional-abstractions/parameterized-types/foreach",permalink:"/zio-prelude/functional-abstractions/parameterized-types/foreach",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functional-abstractions/parameterized-types/foreach.md",tags:[],version:"current",frontMatter:{id:"foreach",title:"ForEach"},sidebar:"ecosystem-sidebar",previous:{title:"Covariant",permalink:"/zio-prelude/functional-abstractions/parameterized-types/covariant"},next:{title:"IdentityBoth",permalink:"/zio-prelude/functional-abstractions/parameterized-types/identityboth"}},p={},s=[],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ForEach[F]")," describes a parameterized type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," that contains zero or more values of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,i.kt)("p",null,"Its signature is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Covariant[F[+_]] {\n  def map[A, B](f: A => B): F[A] => F[B]\n}\n\ntrait ForEach[F[+_]] extends Covariant[F] {\n  def forEach[G[+_]: IdentityBoth: Covariant, A, B](fa: F[A])(f: A => G[B]): G[F[B]]\n  final def map[A, B](f: A => B): F[A] => F[B] =\n    ???\n}\n\ntrait IdentityBoth[F[_]] {\n  def any: F[Any]\n  def both[A, B](fa: => F[A], b: => F[B]): F[(A, B)]\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," functional abstraction builds on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," abstraction to describe a type that contains zero or more ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values rather than merely potentially producing ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values at some point in the future."),(0,i.kt)("p",null,"For example ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," instance because it contains zero or more ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," values. In contrast ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," instance but not a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," instance because it is only a description of a workflow that may produce an ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value and does not output any actual ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value until it is run."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," generalizes over collection types like ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk"),". It also describes data types like ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," that contain zero or one value, which can be thought of as a special case of containing zero or more values."),(0,i.kt)("p",null,"The defining operator of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," abstraction is ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach"),". It lets us take a collection of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and run a function ",(0,i.kt)("inlineCode",{parentName:"p"},"A => G[B]")," for each element in the collection, returning a new collection ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," in the context of ",(0,i.kt)("inlineCode",{parentName:"p"},"G"),"."),(0,i.kt)("p",null,"This is somewhat abstract so let's look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),", which is a variant of this, to get a sense of what it means."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A]\n\nobject ZIO {\n  def foreach[R, E, A, B](as: List[A])(f: A => ZIO[R, E, B]): ZIO[R, E, List[B]] =\n    ???\n}\n")),(0,i.kt)("p",null,"Here we have specialized the collection type ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," and the effect type ",(0,i.kt)("inlineCode",{parentName:"p"},"G")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),". The interpretation of this is now much more clear."),(0,i.kt)("p",null,"For each element in the list we construct a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, B]")," by applying ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," to the element. Then we combine all of those ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," effects into a single effect that will run each of the individual effects and collect their results in a ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),"."),(0,i.kt)("p",null,"This pattern of doing something for each element in the collection and then collecting the results back into the original collection is common to all implementations of ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach"),". We can get a better sense for it by looking at a simple implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] { self =>\n  def zipWith[R1 <: R, E1 >: E, B, C](that: ZIO[R1, E1, B])(f: (A, B) => C): ZIO[R, E, C] =\n    ???\n}\n\nobject ZIO {\n  def foreach[R, E, A, B](as: List[A])(f: A => ZIO[R, E, B]): ZIO[R, E, List[B]] =\n    as.foldRight[ZIO[R, E, List[B]]](ZIO.succeed(List.empty)) { (a, zio) =>\n      f(a).zipWith(zio)(_ :: _)\n    }\n  def succeed[A](a: => A): ZIO[Any, Nothing, A] =\n    ???\n}\n")),(0,i.kt)("p",null,"In the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"foldRight")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," tears down the original list into each of its elements, using the function ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," to produce a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," value for each element. Then we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"zipWith")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," to combine the resulting ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," values into a single ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," value, putting the values back together into a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"::")," constructor."),(0,i.kt)("p",null,"The fact that the implementation of such a complex operator can be so simple should have us thinking about how we can make this work for collection types other than ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," and types other than ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," functional abstraction does just that."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," abstraction is parameterized on the collection type ",(0,i.kt)("inlineCode",{parentName:"p"},"F"),", so in the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," for a collection we will know how to tear down that collection and build it back up. For example, in the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," we will know that we can tear down a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"foldRight")," and build it back up using ",(0,i.kt)("inlineCode",{parentName:"p"},"List.empty")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"::"),"."),(0,i.kt)("p",null,"The other piece of information we need is how to put a value into the type ",(0,i.kt)("inlineCode",{parentName:"p"},"G"),", described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed")," operator, and how to combine two ",(0,i.kt)("inlineCode",{parentName:"p"},"G")," values into a single ",(0,i.kt)("inlineCode",{parentName:"p"},"G")," value, described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"zipWith")," operator. Fortunately, that is exactly the functionality that the combination of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth")," abstractions provide."),(0,i.kt)("p",null,"Recall that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," functional abstraction defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," operator that allows us to transform a ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," into an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," with a function ",(0,i.kt)("inlineCode",{parentName:"p"},"A => B"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Covariant[F[+_]] {\n  def map[A, B](f: A => B): F[A] => F[B]\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth")," abstraction defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"both")," operator that allows us to combine an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[B]")," into an ",(0,i.kt)("inlineCode",{parentName:"p"},"F[(A, B)]")," as well as an ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[Any]")," that is an identity element for that operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait AssociativeBoth[F[_]] {\n  def both[A, B](fa: => F[A], b: => F[B]): F[(A, B)]\n}\n\ntrait IdentityBoth[F[_]] extends AssociativeBoth[F] {\n  def any: F[Any]\n\n}\n")),(0,i.kt)("p",null,"If instances of these two abstractions exist for a data type we can define the ",(0,i.kt)("inlineCode",{parentName:"p"},"zipWith")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed")," operators that we used in our implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def succeed[F[+_], A](a: => A)(implicit covariant: Covariant[F], both: IdentityBoth[F]): F[A] =\n  covariant.map[Any, A](_ => a)(both.any)\n\ndef zipWith[F[+_], A, B, C](\n  fa: F[A],\n  fb: F[B]\n)(f: (A, B) => C)(implicit covariant: Covariant[F], both: AssociativeBoth[F]): F[C] =\n  covariant.map(f.tupled)(both.both(fa, fb))\n")),(0,i.kt)("p",null,"We are now in a position to complete our generalization of the ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),". Here is what the implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," instance for ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," would look like."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ForEach[F[+_]]{\n  def forEach[G[+_]: IdentityBoth: Covariant, A, B](fa: F[A])(f: A => G[B]): G[F[B]]\n}\n\nimplicit val ListForEach: ForEach[List] =\n  new ForEach[List] {\n    def forEach[G[+_]: IdentityBoth: Covariant, A, B](fa: List[A])(f: A => G[B]): G[List[B]] =\n      fa.foldRight(succeed[G, List[B]](List.empty)) { (a, gbs) =>\n        zipWith(f(a), gbs)(_ :: _)\n      }\n  }\n// ListForEach: ForEach[List] = repl.MdocSession$MdocApp$$anon$1@6bd75ace\n")),(0,i.kt)("p",null,"Notice how similar our implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," abstraction looks to our initial implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),". Other than using operators defined on ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityBoth")," instead of operators on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," they are identical."),(0,i.kt)("p",null,"We have already come a long way with our implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach"),". We have a much better understanding now of what the ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach")," operator does and how its signature reflects the minimum possible set of constraints necessary to implement it."),(0,i.kt)("p",null,"We can now implement instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," for all collection types, like ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),", as well as types that are like collections, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Either"),". In each case we can perform an effect like a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," for each element in the collection, returning a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," that collects the results back into the original collection type."),(0,i.kt)("p",null,"This is already quite powerful, but the other aspect of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," abstraction that is important is our ability to use other parameterized types for the ",(0,i.kt)("inlineCode",{parentName:"p"},"G")," in the signature of ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach"),". We have focused so far on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," because it is the prototypical functional effect and provides a very clear intuition of what it means to do something for each element of a collection, but we can use many other data types as well."),(0,i.kt)("p",null,"For example, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach")," operator with a function that returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," value from ZIO Prelude."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," is a data type that can either succeed with a value or fail with one or more errors. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," corresponds to validating all the values in a collection, returning either a new collection of fully validated data or an accumulation of all validation errors that occurred."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.prelude._\n\ncase class Person(name: String, age: Int)\n\ndef validateName(name: String): Validation[String, String] =\n  Validation.fromPredicateWith("Name was empty")(name)(_.nonEmpty)\n\ndef validateAge(age: Int): Validation[String, Int] =\n  Validation.fromPredicateWith(s"Age $age was less than zero")(age)(_ >= 0)\n\ndef validatePerson(name: String, age: Int): Validation[String, Person] =\n  Validation.validateWith(validateName(name), validateAge(age))(Person)\n\nval validData: List[(String, Int)] =\n  List(("John", 35), ("Jane", 25))\n// validData: List[(String, Int)] = List(("John", 35), ("Jane", 25))\n\nval invalidData: List[(String, Int)] =\n  List(("", 35), ("John", -1))\n// invalidData: List[(String, Int)] = List(("", 35), ("John", -1))\n\nval success: Validation[String, List[Person]] =\n  validData.forEach { case (name, age) => validatePerson(name, age) }\n// success: Validation[String, List[Person]] = Success(\n//   log = IndexedSeq(),\n//   value = List(Person(name = "John", age = 35), Person(name = "Jane", age = 25))\n// )\n\nval failure: Validation[String, List[Person]] =\n  invalidData.forEach { case (name, age) => validatePerson(name, age) }\n// failure: Validation[String, List[Person]] = Failure(\n//   log = IndexedSeq(),\n//   errors = NonEmptyChunk(Name was empty, Age -1 was less than zero)\n// )\n')),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach")," with the valid data will return a validation success containing the fully validated list of ",(0,i.kt)("inlineCode",{parentName:"p"},'Person("John", 35)')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'Person("Jane", 25")'),". In contrast, using ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach")," with the invalid data will return a validation failure with the failures ",(0,i.kt)("inlineCode",{parentName:"p"},'"Name was empty"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"Age -1 was less than zero"'),"."),(0,i.kt)("p",null,"We can return other data types from the function we provide to ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," to obtain other functionality. For example, if we use ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," we will get either a collection of all the successful results or the first failure to occur, rather than the accumulation of all failures as with ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation"),"."),(0,i.kt)("p",null,"There are also a couple of specialized data types we can use in the return type of ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," that turn out to be particularly important for implementing other operators."),(0,i.kt)("p",null,"One of these you may have noticed from the very beginning of this section was the ",(0,i.kt)("inlineCode",{parentName:"p"},"Id")," type."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Id")," is the parameterized type ",(0,i.kt)("inlineCode",{parentName:"p"},"F[A]")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"F")," doesn't have any structure itself and just contains exactly one ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," value. This seems quite trivial but it is useful to adapt a function ",(0,i.kt)("inlineCode",{parentName:"p"},"A => B")," to the type ",(0,i.kt)("inlineCode",{parentName:"p"},"A => G[B]")," that ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," is expecting."),(0,i.kt)("p",null,"This allows us to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," operator in terms of ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach")," and proves that the ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," abstraction is an extension of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Covariant")," abstraction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def map[F[+_]: ForEach, A, B](fa: F[A])(f: A => B): F[B] =\n  Id.unwrap(fa.forEach(a => Id.wrap(f(a))))\n")),(0,i.kt)("p",null,"Another data type that is important for implementing other operators is ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," data type from ZIO Prelude describes a state transition function ",(0,i.kt)("inlineCode",{parentName:"p"},"S => (A, S)")," that takes an initial state and returns a value and an updated state. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," corresponds to composing all of those state transition functions into a single state transition function."),(0,i.kt)("p",null,"ZIO Prelude provides a specialized operator for using ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"mapAccum"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def mapAccum[F[+_]: ForEach, S, A, B](fa: F[A])(s: S)(f: (S, A) => (S, B)): (S, F[B]) =\n  ???\n")),(0,i.kt)("p",null,"This lets us specify an initial state ",(0,i.kt)("inlineCode",{parentName:"p"},"S")," and then in our function ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," instead of just providing a function ",(0,i.kt)("inlineCode",{parentName:"p"},"A => B")," like in ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," we can update the state as well. The implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"mapAccum")," takes care of putting each of these functions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," data type for us and then runs the final computation for us with the initial state to produce both the final state and the final value."),(0,i.kt)("p",null,"This is very useful for implementing other operators because it lets us get information out of the collection type ",(0,i.kt)("inlineCode",{parentName:"p"},"S"),", so now we can implement collection operators that don't just transform the collection but reduce it to a summary value."),(0,i.kt)("p",null,"To see this, let's implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"foldLeft")," operator from the Scala collection library in terms of ",(0,i.kt)("inlineCode",{parentName:"p"},"mapAccum"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def foldLeft[F[+_]: ForEach, A, S](fa: F[A])(s: S)(f: (S, A) => S): S =\n  mapAccum(fa)(s)((s, a) => (f(s, a), ()))._1\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"foldLeft")," operator simply accumulates the fold state and discards the collection."),(0,i.kt)("p",null,"This is very powerful because it means that we can implement almost every collection operator in terms of ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach"),"."),(0,i.kt)("p",null,"This includes any collection operator that reduces a collection to some other value, like ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"exists"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"find"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"foldLeft"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"foldRight"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"forall"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"groupBy"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isEmpty"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"product"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"size"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sum"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"toList"),"."),(0,i.kt)("p",null,'It also includes any operator that modifies the values of a collection while maintaining the "shape" of the collection such as ',(0,i.kt)("inlineCode",{parentName:"p"},"zipWithIndex"),"."),(0,i.kt)("p",null,"The only collection operators we can't implement in terms of ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," are those that change the shape of the collection like appending a new element to the collection. We don't know enough about the structure of the data type to know what that would mean or even if it would be well defined."),(0,i.kt)("p",null,"For example, the data type might be a tree that does not have a well defined notion of adding an element without specifying where it should be added. Or it might be a data type like ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," that doesn't support appending at all."),(0,i.kt)("p",null,"In addition to the standard Scala collection operators, ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," allows us to define additional operators that take advantage of the functional abstractions and data structure in ZIO Prelude."),(0,i.kt)("p",null,"One variant of ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach")," that you may be familiar with is ",(0,i.kt)("inlineCode",{parentName:"p"},"flip"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def flip[F[+_]: ForEach, G[+_]: IdentityBoth : Covariant, S, A, B](fga: F[G[A]]): G[F[A]] =\n  fga.forEach(identity)\n")),(0,i.kt)("p",null,"This is the generalized version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"collectAll")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef collectAll[R, E, A](as: List[ZIO[R, E, A]]): ZIO[R, E, List[A]] =\n  ZIO.foreach(as)(identity)\n")),(0,i.kt)("p",null,"This operator already takes a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," values so all it has to do is combine them into a single ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," value and put the results back together into a list."),(0,i.kt)("p",null,"Another particularly useful operator is ",(0,i.kt)("inlineCode",{parentName:"p"},"foldMap"),", which lets us reduce a collection to a summary value by mapping each value to a value for which an ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity")," instance is defined and combining those values with the ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def foldMap[F[+_]: ForEach, A, B: Identity](as: F[A])(f: A => B): B =\n  foldLeft(as)(Identity[B].identity)((b, a) => b <> f(a))\n")),(0,i.kt)("p",null,"This is a very nice operator that lets us express a variety of ways of reducing a collection to a summary value in a very concise way."),(0,i.kt)("p",null,"For example we could implement ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," in terms of ",(0,i.kt)("inlineCode",{parentName:"p"},"foldMap")," like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.newtypes._\n\ndef sum[F[+_]: ForEach, A](as: F[A])(implicit identity: Identity[Sum[A]]): A =\n  foldMap(as)(a => Sum[A](a))\n")),(0,i.kt)("p",null,"Here is how we could implement a fold that computes the sum and product of the values of a collection in a single pass:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def sumProd[F[+_]: ForEach, A](as: F[A])(implicit sum: Identity[Sum[A]], product: Identity[Prod[A]]): (A, A) =\n  foldMap(as)(a => (Sum[A](a), Prod[A](a)))\n")),(0,i.kt)("p",null,"As you can see by using ",(0,i.kt)("inlineCode",{parentName:"p"},"foldMap")," with the functional abstractions in ZIO Prelude for describing ways of combining concrete types we can implement folds like this in an extremely high level and compositional way."),(0,i.kt)("p",null,"One common variant of a fold that can be particularly useful is ",(0,i.kt)("inlineCode",{parentName:"p"},"concatenate"),", which allows us to combine all the elements of a collection into one using an ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity")," instance already defined for the element type. For example, here is how we could use it to combine a list of strings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val strings = List("Hello", ", ", "World", "!")\n\nstrings.concatenate\n')),(0,i.kt)("p",null,"Note that as with other extension methods in ZIO Prelude we need to do ",(0,i.kt)("inlineCode",{parentName:"p"},"import zio.prelude._")," to bring these extension methods into scope."),(0,i.kt)("p",null,"In summary, ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach")," is one of the most useful abstractions in ZIO Prelude in terms of providing a very large number of practically useful operators for implementing a single method. So if you are implementing your own parameterized type that contains zero or more values of the type it is parameterized on then defining a ",(0,i.kt)("inlineCode",{parentName:"p"},"ForEach"),' instance is a great "quick win" to immediately add a lot of functionality to your data type.'))}m.isMDXComponent=!0}}]);