(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{FJi0:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("PJDU"),c=a("Bl7J"),o=a("vrFN");t.default=function(e){var t=e.data,a=e.location,n=t.allMarkdownRemark.nodes;return r.a.createElement(c.a,{location:a},r.a.createElement(o.a,{title:"All posts",description:"このホームページの最新情報や最近の活動について記述します．"}),r.a.createElement(i.a,{title:"news"}),r.a.createElement("h1",null,"News"),r.a.createElement("p",null,"このページの新機能やブログの投稿，ちょっとしたニュースを個々に記載します"),r.a.createElement("ol",{style:{listStyle:"none"}},n.map((function(e){var t=e.frontmatter.title||e.fields.slug;return r.a.createElement("li",{key:e.fields.slug},r.a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.a.createElement("header",null,r.a.createElement("h2",null,r.a.createElement(l.Link,{to:e.fields.slug,itemProp:"url"},r.a.createElement("span",{itemProp:"headline"},t))),r.a.createElement("small",null,e.frontmatter.date)),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},PJDU:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("qhky");t.a=function(e){var t=""+e.title;return r.a.createElement(l.a,null,r.a.createElement("html",{lang:"ja"}),r.a.createElement("title",null,t),r.a.createElement("meta",{name:"Description",content:"xryuseixのWebページです．ここからはTwitterのbioから引用 -> Rits Security Network(入学: &#39;19) / SecHack365&#39;20(研究駆動) / seccamp&#39;19 / RiPPro(&#39;20団体長) / RiST(&#39;20副団体長) / AtCoder(cyan) / CodeForces(blue) / paiza, Inc. 学習事業部アルバイト / 競技プログラミングやセキュリティの分野を勉強しています．"}),r.a.createElement("meta",{charset:"UTF-8"}))}},vrFN:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("qhky"),i=a("Wbzz"),c=function(e){var t,a,n,c=e.description,o=e.lang,s=e.meta,m=e.title,u=Object(i.useStaticQuery)("2841359383").site,p=c||u.siteMetadata.description,d=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return r.a.createElement(l.a,{htmlAttributes:{lang:o},title:m,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:p},{property:"og:title",content:m},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a||null===(n=a.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:p}].concat(s)})};c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=component---src-pages-news-js-95982f324d781a24312a.js.map