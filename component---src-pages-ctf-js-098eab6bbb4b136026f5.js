(self.webpackChunk=self.webpackChunk||[]).push([[972],{5909:function(e,t,n){"use strict";var i=n(7294),l=n(5414);t.Z=function(e){var t=""+e.title;return i.createElement(l.q,null,i.createElement("html",{lang:"ja"}),i.createElement("title",null,t),i.createElement("meta",{name:"Description",content:"xryuseixのWebページです．ここからはTwitterのbioから引用 -> Rits Security Network(入学: &#39;19) / SecHack365&#39;20(研究駆動) / seccamp&#39;19 / RiPPro(&#39;20団体長) / RiST(&#39;20副団体長) / AtCoder(cyan) / CodeForces(blue) / paiza, Inc. 学習事業部アルバイト / 競技プログラミングやセキュリティの分野を勉強しています．"}),i.createElement("meta",{charset:"UTF-8"}))}},6179:function(e,t,n){"use strict";var i=n(7294),l=n(5414),a=n(5444),c=function(e){var t,n,c,r=e.description,s=e.lang,u=e.meta,o=e.title,m=(0,a.useStaticQuery)("2841359383").site,d=r||m.siteMetadata.description,p=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return i.createElement(l.q,{htmlAttributes:{lang:s},title:o,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(c=n.social)||void 0===c?void 0:c.twitter)||""},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(u)})};c.defaultProps={lang:"en",meta:[],description:""},t.Z=c},3080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(7294),l=n(8931),a=n(6179),c=n(5909);var r=n(3552),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={flagAcceptState:!0},n.isSubmit=!1,n.flag=t.flag,n.id=t.id,n.handleClick=n.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}(0,r.Z)(t,e);var n=t.prototype;return n.handleClick=function(e){var t=this;this.setState((function(n){return{flagAcceptState:e===t.flag}})),this.isSubmit=!0},n.render=function(){var e=this;return i.createElement("div",{class:"submitForm"},i.createElement("div",{class:"submit-column button"},i.createElement("button",{onClick:function(){return e.handleClick(document.getElementById(e.id).value)}},"Submit")),i.createElement("div",{class:this.isSubmit?this.state.flagAcceptState?"submit-column output submit-success":"submit-column output submit-failure":"submit-column output"},this.isSubmit?this.state.flagAcceptState?"SUCCESS":"FAILURE":""))},t}(i.Component),u=function(e){var t=e.location;return i.createElement(l.Z,{location:t},i.createElement(a.Z,{title:"CTF",description:"CTF問題をここにおきます．基本的に簡単です．"}),i.createElement(c.Z,{title:"CTF"}),i.createElement("h1",null,"CTF"),i.createElement("p",null,"CTF問題をここにおきます．基本的に簡単です．"),i.createElement("h3",null,"このページのソースはみないでね，フラグがそのまま載ってます．"),i.createElement("div",{class:"hidden_box"},i.createElement("label",{htmlFor:"label1"},"[Welcome](100) Welcome Problem"),i.createElement("input",{type:"checkbox",id:"label1"}),i.createElement("div",{class:"hidden_show"},i.createElement("p",null,"This Problems Answer is ",i.createElement("code",null,"xryuseixCTF{flag}")),i.createElement("div",{class:"submit-column input"},i.createElement("input",{type:"text",id:"textForm1"})),i.createElement(s,{flag:"xryuseixCTF{flag}",id:"textForm1"}))),i.createElement("div",{class:"hidden_box"},i.createElement("label",{htmlFor:"label2"},"[Web](100) Wandering"),i.createElement("input",{type:"checkbox",id:"label2"}),i.createElement("div",{class:"hidden_show"},i.createElement("p",null,"このサイトの内容が多すぎて困ってます．検索ページを付けようか迷ってます..."),i.createElement("div",{class:"submit-column input"},i.createElement("input",{type:"text",id:"textForm2"})),i.createElement(s,{flag:"xryuseixCTF{XSS_51y0ut051t3t3_ku54}",id:"textForm2"}))))}}}]);
//# sourceMappingURL=component---src-pages-ctf-js-098eab6bbb4b136026f5.js.map