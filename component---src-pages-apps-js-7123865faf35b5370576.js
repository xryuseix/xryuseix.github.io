(self.webpackChunk=self.webpackChunk||[]).push([[77],{1715:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/438c17272c5f0e9f4a6da34d3e4bc5bd/1c9ce/GitHub.png","srcSet":"/static/438c17272c5f0e9f4a6da34d3e4bc5bd/fbc98/GitHub.png 16w,\\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/914ee/GitHub.png 32w,\\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/1c9ce/GitHub.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/438c17272c5f0e9f4a6da34d3e4bc5bd/e789a/GitHub.webp 16w,\\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/ef6ff/GitHub.webp 32w,\\n/static/438c17272c5f0e9f4a6da34d3e4bc5bd/8257c/GitHub.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')},2493:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8c8e8","images":{"fallback":{"src":"/static/f41af39d18e4046953e08a36fb9d8215/914ee/icon-32x32.png","srcSet":"/static/f41af39d18e4046953e08a36fb9d8215/22867/icon-32x32.png 8w,\\n/static/f41af39d18e4046953e08a36fb9d8215/fbc98/icon-32x32.png 16w,\\n/static/f41af39d18e4046953e08a36fb9d8215/914ee/icon-32x32.png 32w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/static/f41af39d18e4046953e08a36fb9d8215/5d252/icon-32x32.webp 8w,\\n/static/f41af39d18e4046953e08a36fb9d8215/e789a/icon-32x32.webp 16w,\\n/static/f41af39d18e4046953e08a36fb9d8215/ef6ff/icon-32x32.webp 32w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')},8163:function(e,t,o){var n;"undefined"!=typeof self&&self,n=function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=o(1),l=(n=r)&&n.__esModule?n:{default:n};t.default=l.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(2),a=(n=i)&&n.__esModule?n:{default:n},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var n=e.currentTarget.getAttribute("href").slice(1),r=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:r-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var o={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o}(e,["offset"]));return a.default.createElement("a",r({},t,{onClick:this.smoothScroll}))}}]),t}(i.Component);t.default=c},function(t,o){t.exports=e},function(e,t,o){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var o,n=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||a,scrollIntoView:n.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=u(this),n=o.getBoundingClientRect(),l=this.getBoundingClientRect();o!==t.body?(m.call(this,o,o.scrollLeft+l.left-n.left,o.scrollTop+l.top-n.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function p(t,o){var n=e.getComputedStyle(t,null)["overflow"+o];return"auto"===n||"scroll"===n}function f(e){var t=s(e,"Y")&&p(e,"Y"),o=s(e,"X")&&p(e,"X");return t||o}function u(e){var o;do{o=(e=e.parentNode)===t.body}while(!1===o&&!1===f(e));return o=null,e}function d(t){var o,n,r,i,a=(l()-t.startTime)/468;i=a=a>1?1:a,o=.5*(1-Math.cos(Math.PI*i)),n=t.startX+(t.x-t.startX)*o,r=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(d.bind(e,t))}function m(o,n,i){var c,s,p,f,u=l();o===t.body?(c=e,s=e.scrollX||e.pageXOffset,p=e.scrollY||e.pageYOffset,f=r.scroll):(c=o,s=o.scrollLeft,p=o.scrollTop,f=a),d({scrollable:c,method:f,startTime:u,startX:s,startY:p,x:n,y:i})}}}}()}])},e.exports=n(o(7294))},6179:function(e,t,o){"use strict";var n=o(7294),r=o(5414),l=o(5444),i=function(e){var t,o,i,a=e.description,c=e.lang,s=e.meta,p=e.title,f=(0,l.useStaticQuery)("2841359383").site,u=a||f.siteMetadata.description,d=null===(t=f.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(r.q,{htmlAttributes:{lang:c},title:p,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:u},{property:"og:title",content:p},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(o=f.siteMetadata)||void 0===o||null===(i=o.social)||void 0===i?void 0:i.twitter)||""},{name:"twitter:title",content:p},{name:"twitter:description",content:u}].concat(s)})};i.defaultProps={lang:"en",meta:[],description:""},t.Z=i},9381:function(e,t,o){"use strict";o.r(t);var n=o(7294),r=o(5444),l=o(8931),i=o(6179),a=o(5909),c=o(410),s=o(8163),p=o.n(s),f=function(e){for(var t=e.slice(0),o=t.length-1;o>=0;o--){var n=Math.floor(Math.random()*(o+1)),r=[t[n],t[o]];t[o]=r[0],t[n]=r[1]}return t}([{appId:"sa_plag",appLink:"/apps/sa-plag",imageSrc:"../images/saplag/sa-plag_demo.png",imageAlt:"SA-Plag Demo",appTitle:"SA-Plag",appDesc:"ソースコードの盗作を判定するWeb APIです．<br />AIが競技プログラミングのソースコードを学習しました．",webPageLink:"/apps/sa-plag",githubLink:"https://github.com/xryuseix/SA-Plag"},{appId:"xryuseix_judge",appLink:"/apps/contest_judge",imageSrc:"../images/xryuseix_judge.png",imageAlt:"xryuseix judge",appTitle:"xryuseix judge",appDesc:"簡易的なクイズの成績判定システムです． 立命館大学プロジェクト連合合同イベントなどで使用しました．",webPageLink:"/apps/contest_judge",githubLink:""}]),u=function(e){return""===e?n.createElement("td",{style:{width:"50%"}}):n.createElement("td",{style:{width:"50%"}},n.createElement("a",{href:Object.values(e).join("")},n.createElement(c.S,{src:"../../static/favicons/icon-32x32.png",alt:"favicon",style:{width:"1em",margin:"0px 0.3em 0px 0px"},__imageData:o(2493)}),"Webサイト"))},d=function(e){return""===Object.values(e).join("")?n.createElement("td",{style:{width:"50%"}}):n.createElement("td",{style:{width:"50%"}},n.createElement("a",{href:Object.values(e).join(""),target:"_blank",rel:"noopener noreferrer"},n.createElement(c.S,{src:"../../static/icons/GitHub.png",alt:"GitHub logo",style:{width:"1em",margin:"0px 0.3em 0px 0px"},__imageData:o(1715)}),"GitHub"))},m=function(e){var t=e.appId,o=e.appLink,l=e.imageSrc,i=e.imageAlt,a=e.appTitle,c=e.appDesc,s=e.webPageLink,p=e.githubLink;return n.createElement("div",{id:t},n.createElement("table",{style:{margin:"30px 0px"}},n.createElement("tr",null,n.createElement("td",{style:{width:"50%"}},n.createElement(r.Link,{to:o},n.createElement("img",{src:l,alt:i,style:{width:"100%",height:"auto"}})))," ",n.createElement("td",{valign:"top"},n.createElement("table",{style:{margin:"0px 0px 0px 10px"}},n.createElement("tr",{align:"center"},n.createElement("th",{colspan:"2",style:{"font-size":"2em"}},a)),n.createElement("tr",null,n.createElement("td",{colspan:"2"},c)),n.createElement("tr",{align:"center"},n.createElement(u,s),n.createElement(d,p)))))),n.createElement("hr",null))};t.default=function(e){var t=e.location;return n.createElement(l.Z,{location:t},n.createElement(i.Z,{title:"Applications",description:"過去に作ったアプリケーションのまとめです．"}),n.createElement(a.Z,{title:"Applications"}),n.createElement("h1",null,"Applications"),n.createElement("p",null,"過去に作ったアプリケーションを一部紹介します"),n.createElement("details",null,n.createElement("summary",null,"もくじ"),n.createElement("ul",null,n.createElement("li",null,n.createElement(p(),{href:"#sa_plag",offset:"50"},"SA-Plag")),n.createElement("li",null,n.createElement(p(),{href:"#xryuseix_judge",offset:"50"},"xryuseix judge")))),f.map((function(e){return n.createElement(m,e)})))}}}]);
//# sourceMappingURL=component---src-pages-apps-js-7123865faf35b5370576.js.map