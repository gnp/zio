"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[41558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"charsets",title:"Character Sets"},i=void 0,s={unversionedId:"zio-nio/charsets",id:"zio-nio/charsets",title:"Character Sets",description:"The zio.nio.charset package offers an API for ZIO programs to work with character sets, using the Java NIO support for character sets. Any character set supported by your JVM can be used.",source:"@site/docs/zio-nio/charsets.md",sourceDirName:"zio-nio",slug:"/zio-nio/charsets",permalink:"/zio-nio/charsets",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-nio/charsets.md",tags:[],version:"current",frontMatter:{id:"charsets",title:"Character Sets"},sidebar:"ecosystem-sidebar",previous:{title:"Resource Management",permalink:"/zio-nio/resources"},next:{title:"Use Cases",permalink:"/zio-nio/use-cases"}},c={},l=[{value:"<code>Charset</code>",id:"charset",level:2},{value:"Standard Charsets",id:"standard-charsets",level:3},{value:"Example",id:"example",level:3},{value:"Stream Encoding and Decoding",id:"stream-encoding-and-decoding",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"zio.nio.charset")," package offers an API for ZIO programs to work with character sets, using the Java NIO support for character sets. Any character set supported by your JVM can be used."),(0,a.kt)("h2",{id:"charset"},(0,a.kt)("inlineCode",{parentName:"h2"},"Charset")),(0,a.kt)("p",null,"This class wraps the ",(0,a.kt)("inlineCode",{parentName:"p"},"java.nio.charset.Charset")," class with a ZIO-friendly API. There are convenience methods for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"encoding/decoding buffers"),(0,a.kt)("li",{parentName:"ul"},"encoding/decoding single chunks"),(0,a.kt)("li",{parentName:"ul"},"encoding/decoding strings")),(0,a.kt)("p",null,"For more sophisticated encoding/decoding needs, a ",(0,a.kt)("inlineCode",{parentName:"p"},"CharsetEncoder")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"CharsetDecoder")," can be obtained from a ",(0,a.kt)("inlineCode",{parentName:"p"},"Charset"),"."),(0,a.kt)("h3",{id:"standard-charsets"},"Standard Charsets"),(0,a.kt)("p",null,"The standard set of charsets provided by Java are available in ",(0,a.kt)("inlineCode",{parentName:"p"},"Charset.Standard"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"utf8"),(0,a.kt)("li",{parentName:"ul"},"utf16"),(0,a.kt)("li",{parentName:"ul"},"utf16Be"),(0,a.kt)("li",{parentName:"ul"},"utf16Le"),(0,a.kt)("li",{parentName:"ul"},"usAscii"),(0,a.kt)("li",{parentName:"ul"},"iso8859_1")),(0,a.kt)("p",null,"JVMs typically support many more charsets than these; use ",(0,a.kt)("inlineCode",{parentName:"p"},"Charset.availableCharsets")," to retrieve the complete list."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.nio.charset._\nimport zio.nio.file.Files\nimport zio.nio.file.Path\n\nval s = "Hello, world!"\nfor {\n  utf16Bytes <- Charset.Standard.utf16.encodeString(s)\n  _          <- Files.writeBytes(Path("utf16.txt"), utf16Bytes)\n} yield ()\n')),(0,a.kt)("h2",{id:"stream-encoding-and-decoding"},"Stream Encoding and Decoding"),(0,a.kt)("p",null,"Using streams instead of buffers or chunks is great for bigger jobs. ZIO Streams comes with a UTF-8 decoder built in, but if you need other character sets, or you need encoding, then ZIO-NIO can help\u2014as long as you're running on the JVM."),(0,a.kt)("p",null,"Stream-based encoding and decoding are provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"transducer")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"CharsetEncoder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CharsetDecoder")," classes respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.nio.charset._\nimport zio.nio.channels.FileChannel\nimport zio.nio.channels._\nimport zio.nio.file.Path\nimport zio.stream.ZStream\nimport zio.blocking.Blocking\nimport zio.console\nimport zio.ZIO\n\n// dump a file encoded in ISO8859 to the console\n\nFileChannel.open(Path("iso8859.txt")).useNioBlockingOps { fileOps =>\n  val inStream: ZStream[Blocking, Exception, Byte] = ZStream.repeatEffectChunkOption {\n    fileOps.readChunk(1000).asSomeError.flatMap { chunk =>\n      if (chunk.isEmpty) ZIO.fail(None) else ZIO.succeed(chunk)\n    }\n  }\n\n  // apply decoding transducer\n  val charStream: ZStream[Blocking, Exception, Char] =\n    inStream.transduce(Charset.Standard.iso8859_1.newDecoder.transducer())\n\n  console.putStrLn("ISO8859 file contents:") *>\n    charStream.foreachChunk(chars => console.putStr(chars.mkString))\n}\n')))}u.isMDXComponent=!0}}]);