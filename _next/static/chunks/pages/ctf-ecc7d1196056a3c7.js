(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{89133:function(t,e,n){var r;!function(e,i){var s={};!function(t){"use strict";t.__esModule=!0,t.digestLength=32,t.blockSize=64;var e=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function n(t,n,r,i,s){for(var a,o,c,h,u,l,f,d,p,m,b,x,g;s>=64;){for(a=n[0],o=n[1],c=n[2],h=n[3],u=n[4],l=n[5],f=n[6],d=n[7],m=0;m<16;m++)b=i+4*m,t[m]=(255&r[b])<<24|(255&r[b+1])<<16|(255&r[b+2])<<8|255&r[b+3];for(m=16;m<64;m++)x=((p=t[m-2])>>>17|p<<15)^(p>>>19|p<<13)^p>>>10,g=((p=t[m-15])>>>7|p<<25)^(p>>>18|p<<14)^p>>>3,t[m]=(x+t[m-7]|0)+(g+t[m-16]|0);for(m=0;m<64;m++)x=(((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(u&l^~u&f)|0)+(d+(e[m]+t[m]|0)|0)|0,g=((a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10))+(a&o^a&c^o&c)|0,d=f,f=l,l=u,u=h+x|0,h=c,c=o,o=a,a=x+g|0;n[0]+=a,n[1]+=o,n[2]+=c,n[3]+=h,n[4]+=u,n[5]+=l,n[6]+=f,n[7]+=d,i+=64,s-=64}return i}var r=function(){function e(){this.digestLength=t.digestLength,this.blockSize=t.blockSize,this.state=new Int32Array(8),this.temp=new Int32Array(64),this.buffer=new Uint8Array(128),this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this.reset()}return e.prototype.reset=function(){return this.state[0]=1779033703,this.state[1]=3144134277,this.state[2]=1013904242,this.state[3]=2773480762,this.state[4]=1359893119,this.state[5]=2600822924,this.state[6]=528734635,this.state[7]=1541459225,this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this},e.prototype.clean=function(){for(var t=0;t<this.buffer.length;t++)this.buffer[t]=0;for(t=0;t<this.temp.length;t++)this.temp[t]=0;this.reset()},e.prototype.update=function(t,e){if(void 0===e&&(e=t.length),this.finished)throw new Error("SHA256: can't update because hash was finished.");var r=0;if(this.bytesHashed+=e,this.bufferLength>0){for(;this.bufferLength<64&&e>0;)this.buffer[this.bufferLength++]=t[r++],e--;64===this.bufferLength&&(n(this.temp,this.state,this.buffer,0,64),this.bufferLength=0)}for(e>=64&&(r=n(this.temp,this.state,t,r,e),e%=64);e>0;)this.buffer[this.bufferLength++]=t[r++],e--;return this},e.prototype.finish=function(t){if(!this.finished){var e=this.bytesHashed,r=this.bufferLength,i=e/536870912|0,s=e<<3,a=e%64<56?64:128;this.buffer[r]=128;for(var o=r+1;o<a-8;o++)this.buffer[o]=0;this.buffer[a-8]=i>>>24&255,this.buffer[a-7]=i>>>16&255,this.buffer[a-6]=i>>>8&255,this.buffer[a-5]=i>>>0&255,this.buffer[a-4]=s>>>24&255,this.buffer[a-3]=s>>>16&255,this.buffer[a-2]=s>>>8&255,this.buffer[a-1]=s>>>0&255,n(this.temp,this.state,this.buffer,0,a),this.finished=!0}for(o=0;o<8;o++)t[4*o+0]=this.state[o]>>>24&255,t[4*o+1]=this.state[o]>>>16&255,t[4*o+2]=this.state[o]>>>8&255,t[4*o+3]=this.state[o]>>>0&255;return this},e.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},e.prototype._saveState=function(t){for(var e=0;e<this.state.length;e++)t[e]=this.state[e]},e.prototype._restoreState=function(t,e){for(var n=0;n<this.state.length;n++)this.state[n]=t[n];this.bytesHashed=e,this.finished=!1,this.bufferLength=0},e}();t.Hash=r;var i=function(){function t(t){this.inner=new r,this.outer=new r,this.blockSize=this.inner.blockSize,this.digestLength=this.inner.digestLength;var e=new Uint8Array(this.blockSize);if(t.length>this.blockSize)(new r).update(t).finish(e).clean();else for(var n=0;n<t.length;n++)e[n]=t[n];for(n=0;n<e.length;n++)e[n]^=54;this.inner.update(e);for(n=0;n<e.length;n++)e[n]^=106;this.outer.update(e),this.istate=new Uint32Array(8),this.ostate=new Uint32Array(8),this.inner._saveState(this.istate),this.outer._saveState(this.ostate);for(n=0;n<e.length;n++)e[n]=0}return t.prototype.reset=function(){return this.inner._restoreState(this.istate,this.inner.blockSize),this.outer._restoreState(this.ostate,this.outer.blockSize),this},t.prototype.clean=function(){for(var t=0;t<this.istate.length;t++)this.ostate[t]=this.istate[t]=0;this.inner.clean(),this.outer.clean()},t.prototype.update=function(t){return this.inner.update(t),this},t.prototype.finish=function(t){return this.outer.finished?this.outer.finish(t):(this.inner.finish(t),this.outer.update(t,this.digestLength).finish(t)),this},t.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},t}();function s(t){var e=(new r).update(t),n=e.digest();return e.clean(),n}function a(t,e){var n=new i(t).update(e),r=n.digest();return n.clean(),r}function o(t,e,n,r){var i=r[0];if(0===i)throw new Error("hkdf: cannot expand more");e.reset(),i>1&&e.update(t),n&&e.update(n),e.update(r),e.finish(t),r[0]++}t.HMAC=i,t.hash=s,t.default=s,t.hmac=a;var c=new Uint8Array(t.digestLength);function h(t,e,n,r){void 0===e&&(e=c),void 0===r&&(r=32);for(var s=new Uint8Array([1]),h=a(e,t),u=new i(h),l=new Uint8Array(u.digestLength),f=l.length,d=new Uint8Array(r),p=0;p<r;p++)f===l.length&&(o(l,u,n,s),f=0),d[p]=l[f++];return u.clean(),l.fill(0),s.fill(0),d}function u(t,e,n,r){for(var s=new i(t),a=s.digestLength,o=new Uint8Array(4),c=new Uint8Array(a),h=new Uint8Array(a),u=new Uint8Array(r),l=0;l*a<r;l++){var f=l+1;o[0]=f>>>24&255,o[1]=f>>>16&255,o[2]=f>>>8&255,o[3]=f>>>0&255,s.reset(),s.update(e),s.update(o),s.finish(h);for(var d=0;d<a;d++)c[d]=h[d];for(d=2;d<=n;d++){s.reset(),s.update(h).finish(h);for(var p=0;p<a;p++)c[p]^=h[p]}for(d=0;d<a&&l*a+d<r;d++)u[l*a+d]=c[d]}for(l=0;l<a;l++)c[l]=h[l]=0;for(l=0;l<4;l++)o[l]=0;return s.clean(),u}t.hkdf=h,t.pbkdf2=u}(s);var a=s.default;for(var o in s)a[o]=s[o];"object"===typeof t.exports?t.exports=a:void 0===(r=function(){return a}.call(s,n,s,t))||(t.exports=r)}()},37137:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ctf",function(){return n(95534)}])},60097:function(t,e,n){"use strict";n.d(e,{A:function(){return x}});var r=n(85893),i=n(41664),s=(n(48210),n(10682)),a=n(60788),o=n(9368),c=n(47593),h=n(5434),u=function(t){return(0,r.jsx)("div",{className:"bg-dark",children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(a.Z,{expand:"md",bg:"dark",variant:"dark",children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{className:"navbar-brand",children:"Home"})}),(0,r.jsx)(a.Z.Toggle,{"aria-controls":"navbarResponsive"}),(0,r.jsx)(a.Z.Collapse,{id:"navbarResponsive",className:"mr-auto",children:(0,r.jsxs)(o.Z,{as:"ul",className:"mr-auto",children:[(0,r.jsx)(o.Z.Item,{as:"li",children:(0,r.jsx)(i.default,{href:"/apps",children:(0,r.jsx)("a",{className:"nav-link",children:"Applications"})})}),(0,r.jsx)(o.Z.Item,{as:"li",children:(0,r.jsx)(i.default,{href:"/achievement",children:(0,r.jsx)("a",{className:"nav-link",children:"Achievement"})})}),(0,r.jsx)(o.Z.Item,{as:"li",children:(0,r.jsx)(i.default,{href:"/account",children:(0,r.jsx)("a",{className:"nav-link",children:"Account"})})}),(0,r.jsx)(o.Z.Item,{as:"li",children:(0,r.jsx)(i.default,{href:"/ctf",children:(0,r.jsx)("a",{className:"nav-link",children:"CTF"})})}),(0,r.jsx)(o.Z.Item,{as:"li",children:(0,r.jsx)(i.default,{href:"/news",children:(0,r.jsx)("a",{className:"nav-link",children:"News"})})}),(0,r.jsxs)(c.Z,{title:"Slides",id:"basic-nav-dropdown",renderMenuOnMount:!0,children:[(0,r.jsx)(c.Z.Item,{href:"/slides",children:"PDF Viewer"}),(0,r.jsx)(c.Z.Item,{href:"/lt",children:"Single-Page App"})]}),(0,r.jsx)(o.Z.Item,{as:"li",children:(0,r.jsx)(i.default,{href:"/research",children:(0,r.jsx)("a",{className:"nav-link",children:"Research"})})}),(0,r.jsx)(o.Z.Item,{as:"li",children:(0,r.jsx)(i.default,{href:"/api",children:(0,r.jsx)("a",{className:"nav-link disabled",children:"API"})})}),(0,r.jsx)(o.Z.Item,{as:"li",children:(0,r.jsxs)("a",{className:"nav-link",href:"https://github.com/xryuseix/xryuseix.github.io",target:"_blank",rel:"noopener noreferrer",children:["Repository",(0,r.jsx)(h.jhj,{})]})})]})})]})})})},l=n(9008),f=function(t){var e=t.title||"xryuseix's HomePage",n=t.description||"xryuseix\u306eWeb\u30da\u30fc\u30b8\u3067\u3059.",i=t.ogImage||"https://avatars.githubusercontent.com/u/51394682";return(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{charSet:"UTF-8"}),(0,r.jsx)("meta",{httpEquiv:"content-language",content:"ja"}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{property:"og:image",content:i})]})},d={display:"none"},p=function(t){return(0,r.jsxs)("footer",{children:[(0,r.jsx)("img",{src:"https://www.f-counter.net/j/45/1613887388/",alt:"\u30a2\u30af\u30bb\u30b9\u30ab\u30a6\u30f3\u30bf\u30fc",style:d}),"\xa9 ",(new Date).getFullYear(),", Ryusei Ishikawa All Right Reserved."]})},m=n(53853),b=n.n(m),x=function(t){var e=t.children,n=t.title,i=t.description;return(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{title:n,description:i}),(0,r.jsx)("div",{className:b().header,children:(0,r.jsx)(u,{})}),(0,r.jsx)("br",{}),(0,r.jsx)("main",{className:b().main,children:e}),(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(p,{})})]})}},95534:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _}});var r=n(85893),i=n(67294),s=n(60097),a=n(89133),o=n.n(a),c=n(53996),h=n.n(c);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function f(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}var p=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}var b=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var e,n,i,s=m(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=s.call(this,t)).state={flagAcceptState:!1,isSubmit:!1},e.flag=t.flag,e.id=t.id,e}return e=a,(n=[{key:"handleClick",value:function(t){var e=o()((new TextEncoder).encode(t));this.setState({flagAcceptState:this.arraysEqual(e,this.flag),isSubmit:!0})}},{key:"arraysEqual",value:function(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}},{key:"render",value:function(){var t,e,n=this;return(0,r.jsxs)("div",{className:h().submitForm,children:[(0,r.jsx)("div",{className:"".concat(h().ctf_submitColumn," ").concat(h().ctfButton),children:(0,r.jsx)("button",{onClick:function(){var t=document.getElementById(n.id);t?n.handleClick(t.value):n.handleClick("")},children:"Submit"})}),(0,r.jsx)("div",{className:(t=this.state.isSubmit,e=this.state.flagAcceptState,t?e?"".concat(h().submitColumn," ").concat(h().output," ").concat(h().submitSuccess):"".concat(h().submitColumn," ").concat(h().output," ").concat(h().submitFailure):"".concat(h().submitColumn," ").concat(h().output)),children:this.state.isSubmit?this.state.flagAcceptState?"SUCCESS":"FAILURE":""})]})}}])&&u(e.prototype,n),i&&u(e,i),a}(i.Component),x=[{title:"[Welcome](100) Welcome Problem",statement:(0,r.jsxs)(r.Fragment,{children:["This Problems Answer is ",(0,r.jsx)("code",{children:"xryuseixCTF{flag}"})]}),flag:"xryuseixCTF{flag}",answer:"xryuseixCTF{flag}"},{title:"[misc](200) Time measurement",statement:(0,r.jsxs)(r.Fragment,{children:["\u5b9f\u884c\u6642\u9593\u3092\u8a08\u6e2c\u3059\u308b\u30b5\u30a4\u30c8\u304c\u3042\u308a\u307e\u3059.\u8a66\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\uff01",(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://redos-server.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",children:"https://redos-server.herokuapp.com/"})]}),flag:"xryuseixCTF{Thi5_i5_ReD05_4tt4ck}",answer:(0,r.jsxs)(r.Fragment,{children:["ReDoS\u653b\u6483\u304c\u6210\u7acb\u3057\u307e\u3059.",(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://redos-server.herokuapp.com/aaaaaaaaaaaaaaaaaaaaaaaaa",children:"https://redos-server.herokuapp.com/aaaaaaaaaaaaaaaaaaaaaaaaa"})]})},{title:"[misc](200) Test",statement:(0,r.jsxs)(r.Fragment,{children:["\u30aa\u30f3\u30e9\u30a4\u30f3\u30c6\u30b9\u30c8\u306b\u5411\u3051\u3066\u30c6\u30b9\u30c8\u7528\u7d19\u304c\u914d\u3089\u308c\u307e\u3057\u305f.\u3042\u306a\u305f\u306f\u8a66\u9a13\u958b\u59cb\u524d\u306b\u554f\u984c\u3092\u95b2\u89a7\u3057,\u89e3\u304d\u305f\u3044\u3068\u601d\u3063\u3066\u3044\u307e\u3059.\u9811\u5f35\u3063\u3066\u89e3\u3044\u3066\u307f\u3066\u304f\u3060\u3055\u3044\uff01",(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"/ctf/miscTest.pdf",download:!0,children:"[PDF\u30d5\u30a1\u30a4\u30eb]"})]}),flag:"xryuseixCTF{onaka_suita}",answer:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("code",{children:'qpdf --decrypt --password="password" problem.pdf out2.pdf'})," ","\u306e\u5f8c\u306bWord\u3067\u958b\u304f,\u307e\u305f\u306f",(0,r.jsx)("code",{children:'qpdf --decrypt --password="risec" problem.pdf out2.pdf'})," ","\u306e\u5f8c\u306b\u8a72\u5f53\u90e8\u5206\u3092\u30b3\u30d4\u30fc\u3059\u308b."]})}],g=n(4004),j=n.n(g);function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){var e="".concat(t.title,"_label"),n="".concat(t.title,"_id");return(0,r.jsxs)("div",{className:j().hiddenBox,children:[(0,r.jsx)("label",{htmlFor:e,children:t.title}),(0,r.jsx)("input",{type:"checkbox",id:e}),(0,r.jsxs)("div",{className:j().hiddenShow,children:[(0,r.jsx)("p",{children:t.statement}),(0,r.jsxs)("div",{className:j().submitForm,children:[(0,r.jsx)("div",{className:j().submitColumn,children:(0,r.jsx)("input",{type:"text",id:n,placeholder:"xryuseixCTF{flag}"})}),(0,r.jsx)(b,{flag:o()((new TextEncoder).encode(t.flag)),id:n})]}),(0,r.jsxs)("details",{style:{display:"none"},children:[(0,r.jsx)("summary",{children:"\u7b54\u3048"}),t.answer]})]})]})},_=function(){return(0,r.jsxs)(s.A,{title:"CTF",description:"CTF\u554f\u984c\u3092\u3053\u3053\u306b\u304a\u304d\u307e\u3059. \u57fa\u672c\u7684\u306b\u7c21\u5358\u3067\u3059.",children:[(0,r.jsx)("h1",{children:"CTF"}),(0,r.jsx)("p",{children:"CTF\u554f\u984c\u3092\u3053\u3053\u306b\u304a\u304d\u307e\u3059. \u57fa\u672c\u7684\u306b\u7c21\u5358\u3067\u3059."}),(0,r.jsx)("p",{children:"\u3053\u306e\u30da\u30fc\u30b8\u306e\u30bd\u30fc\u30b9\u306f\u307f\u306a\u3044\u3067\u306d, \u30d5\u30e9\u30b0\u304c\u305d\u306e\u307e\u307e\u8f09\u3063\u3066\u307e\u3059."}),x.map((function(t){return(0,i.createElement)(v,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){y(t,e,n[e])}))}return t}({},t,{key:t.title}))}))]})}},53996:function(t){t.exports={submitForm:"FlagSubmit_submitForm__93Ccd",submitColumn:"FlagSubmit_submitColumn__En1jF",submitSuccess:"FlagSubmit_submitSuccess__FeacL",submitFailure:"FlagSubmit_submitFailure__8f9B8",output:"FlagSubmit_output__IyW2d",ctfButton:"FlagSubmit_ctfButton__WiC2W"}},53853:function(t){t.exports={header:"Layout_header__cNGhf",headerButton:"Layout_headerButton__h_akj",imageMask:"Layout_imageMask___BGmp",main:"Layout_main__c1pHS"}},4004:function(t){t.exports={hiddenBox:"ctf_hiddenBox__6Mdam",hiddenShow:"ctf_hiddenShow__02Vg0",submitForm:"ctf_submitForm__EVdVe",submitColumn:"ctf_submitColumn__LT3_8"}}},function(t){t.O(0,[228,293,421,774,888,179],(function(){return e=37137,t(t.s=e);var e}));var e=t.O();_N_E=e}]);