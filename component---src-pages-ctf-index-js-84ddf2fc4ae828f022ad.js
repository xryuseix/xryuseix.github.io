(self.webpackChunk=self.webpackChunk||[]).push([[513],{6662:function(t,e,r){var n;!function(e,i){var a={};!function(t){"use strict";t.__esModule=!0,t.digestLength=32,t.blockSize=64;var e=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function r(t,r,n,i,a){for(var s,h,f,o,u,l,c,d,p,m,b,g,v;a>=64;){for(s=r[0],h=r[1],f=r[2],o=r[3],u=r[4],l=r[5],c=r[6],d=r[7],m=0;m<16;m++)b=i+4*m,t[m]=(255&n[b])<<24|(255&n[b+1])<<16|(255&n[b+2])<<8|255&n[b+3];for(m=16;m<64;m++)g=((p=t[m-2])>>>17|p<<15)^(p>>>19|p<<13)^p>>>10,v=((p=t[m-15])>>>7|p<<25)^(p>>>18|p<<14)^p>>>3,t[m]=(g+t[m-7]|0)+(v+t[m-16]|0);for(m=0;m<64;m++)g=(((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(u&l^~u&c)|0)+(d+(e[m]+t[m]|0)|0)|0,v=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&h^s&f^h&f)|0,d=c,c=l,l=u,u=o+g|0,o=f,f=h,h=s,s=g+v|0;r[0]+=s,r[1]+=h,r[2]+=f,r[3]+=o,r[4]+=u,r[5]+=l,r[6]+=c,r[7]+=d,i+=64,a-=64}return i}var n=function(){function e(){this.digestLength=t.digestLength,this.blockSize=t.blockSize,this.state=new Int32Array(8),this.temp=new Int32Array(64),this.buffer=new Uint8Array(128),this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this.reset()}return e.prototype.reset=function(){return this.state[0]=1779033703,this.state[1]=3144134277,this.state[2]=1013904242,this.state[3]=2773480762,this.state[4]=1359893119,this.state[5]=2600822924,this.state[6]=528734635,this.state[7]=1541459225,this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this},e.prototype.clean=function(){for(var t=0;t<this.buffer.length;t++)this.buffer[t]=0;for(t=0;t<this.temp.length;t++)this.temp[t]=0;this.reset()},e.prototype.update=function(t,e){if(void 0===e&&(e=t.length),this.finished)throw new Error("SHA256: can't update because hash was finished.");var n=0;if(this.bytesHashed+=e,this.bufferLength>0){for(;this.bufferLength<64&&e>0;)this.buffer[this.bufferLength++]=t[n++],e--;64===this.bufferLength&&(r(this.temp,this.state,this.buffer,0,64),this.bufferLength=0)}for(e>=64&&(n=r(this.temp,this.state,t,n,e),e%=64);e>0;)this.buffer[this.bufferLength++]=t[n++],e--;return this},e.prototype.finish=function(t){if(!this.finished){var e=this.bytesHashed,n=this.bufferLength,i=e/536870912|0,a=e<<3,s=e%64<56?64:128;this.buffer[n]=128;for(var h=n+1;h<s-8;h++)this.buffer[h]=0;this.buffer[s-8]=i>>>24&255,this.buffer[s-7]=i>>>16&255,this.buffer[s-6]=i>>>8&255,this.buffer[s-5]=i>>>0&255,this.buffer[s-4]=a>>>24&255,this.buffer[s-3]=a>>>16&255,this.buffer[s-2]=a>>>8&255,this.buffer[s-1]=a>>>0&255,r(this.temp,this.state,this.buffer,0,s),this.finished=!0}for(h=0;h<8;h++)t[4*h+0]=this.state[h]>>>24&255,t[4*h+1]=this.state[h]>>>16&255,t[4*h+2]=this.state[h]>>>8&255,t[4*h+3]=this.state[h]>>>0&255;return this},e.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},e.prototype._saveState=function(t){for(var e=0;e<this.state.length;e++)t[e]=this.state[e]},e.prototype._restoreState=function(t,e){for(var r=0;r<this.state.length;r++)this.state[r]=t[r];this.bytesHashed=e,this.finished=!1,this.bufferLength=0},e}();t.Hash=n;var i=function(){function t(t){this.inner=new n,this.outer=new n,this.blockSize=this.inner.blockSize,this.digestLength=this.inner.digestLength;var e=new Uint8Array(this.blockSize);if(t.length>this.blockSize)(new n).update(t).finish(e).clean();else for(var r=0;r<t.length;r++)e[r]=t[r];for(r=0;r<e.length;r++)e[r]^=54;this.inner.update(e);for(r=0;r<e.length;r++)e[r]^=106;this.outer.update(e),this.istate=new Uint32Array(8),this.ostate=new Uint32Array(8),this.inner._saveState(this.istate),this.outer._saveState(this.ostate);for(r=0;r<e.length;r++)e[r]=0}return t.prototype.reset=function(){return this.inner._restoreState(this.istate,this.inner.blockSize),this.outer._restoreState(this.ostate,this.outer.blockSize),this},t.prototype.clean=function(){for(var t=0;t<this.istate.length;t++)this.ostate[t]=this.istate[t]=0;this.inner.clean(),this.outer.clean()},t.prototype.update=function(t){return this.inner.update(t),this},t.prototype.finish=function(t){return this.outer.finished?this.outer.finish(t):(this.inner.finish(t),this.outer.update(t,this.digestLength).finish(t)),this},t.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},t}();function a(t){var e=(new n).update(t),r=e.digest();return e.clean(),r}function s(t,e){var r=new i(t).update(e),n=r.digest();return r.clean(),n}function h(t,e,r,n){var i=n[0];if(0===i)throw new Error("hkdf: cannot expand more");e.reset(),i>1&&e.update(t),r&&e.update(r),e.update(n),e.finish(t),n[0]++}t.HMAC=i,t.hash=a,t.default=a,t.hmac=s;var f=new Uint8Array(t.digestLength);function o(t,e,r,n){void 0===e&&(e=f),void 0===n&&(n=32);for(var a=new Uint8Array([1]),o=s(e,t),u=new i(o),l=new Uint8Array(u.digestLength),c=l.length,d=new Uint8Array(n),p=0;p<n;p++)c===l.length&&(h(l,u,r,a),c=0),d[p]=l[c++];return u.clean(),l.fill(0),a.fill(0),d}function u(t,e,r,n){for(var a=new i(t),s=a.digestLength,h=new Uint8Array(4),f=new Uint8Array(s),o=new Uint8Array(s),u=new Uint8Array(n),l=0;l*s<n;l++){var c=l+1;h[0]=c>>>24&255,h[1]=c>>>16&255,h[2]=c>>>8&255,h[3]=c>>>0&255,a.reset(),a.update(e),a.update(h),a.finish(o);for(var d=0;d<s;d++)f[d]=o[d];for(d=2;d<=r;d++){a.reset(),a.update(o).finish(o);for(var p=0;p<s;p++)f[p]^=o[p]}for(d=0;d<s&&l*s+d<n;d++)u[l*s+d]=f[d]}for(l=0;l<s;l++)f[l]=o[l]=0;for(l=0;l<4;l++)h[l]=0;return a.clean(),u}t.hkdf=o,t.pbkdf2=u}(a);var s=a.default;for(var h in a)s[h]=a[h];"object"==typeof t.exports?t.exports=s:void 0===(n=function(){return s}.call(a,r,a,t))||(t.exports=n)}()},8061:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return p}});var n=r(7294),i=r(537),a=r(7431),s=r(8057),h=r(1788),f=r(6662),o=r.n(f),u=function(t){function e(e){var r;return(r=t.call(this,e)||this).state={flagAcceptState:!1,isSubmit:!1},r.flag=e.flag,r.id=e.id,r}(0,h.Z)(e,t);var r=e.prototype;return r.handleClick=function(t){var e=o()((new TextEncoder).encode(t));this.setState({flagAcceptState:this.arraysEqual(e,this.flag)}),this.setState({isSubmit:!0})},r.arraysEqual=function(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!==e.length)return!1;for(var r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0},r.render=function(){var t=this;return n.createElement("div",{className:"ctf_submitForm"},n.createElement("div",{className:"ctf_submit-column ctf_button"},n.createElement("button",{onClick:function(){var e=document.getElementById(t.id);e?t.handleClick(e.value):t.handleClick("")}},"Submit")),n.createElement("div",{className:this.state.isSubmit?this.state.flagAcceptState?"ctf_submit-column ctf_output ctf_submit-success":"ctf_submit-column ctf_output ctf_submit-failure":"ctf_submit-column ctf_output"},this.state.isSubmit?this.state.flagAcceptState?"SUCCESS":"FAILURE":""))},e}(n.Component),l=r.p+"static/problem-ab00b7457e22d5d63fa095e9870ecf74.pdf",c=[{title:"[Welcome](100) Welcome Problem",statement:n.createElement(n.Fragment,null,"This Problems Answer is ",n.createElement("code",null,"xryuseixCTF{flag}")),flag:"xryuseixCTF{flag}",answer:"xryuseixCTF{flag}"},{title:"[misc](200) Time measurement",statement:n.createElement(n.Fragment,null,"実行時間を計測するサイトがあります．試してみてください！",n.createElement("br",null),n.createElement("a",{href:"https://redos-server.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},"https://redos-server.herokuapp.com/")),flag:"xryuseixCTF{Thi5_i5_ReD05_4tt4ck}",answer:n.createElement(n.Fragment,null,"ReDoS攻撃が成立します．",n.createElement("br",null),n.createElement("a",{href:"https://redos-server.herokuapp.com/aaaaaaaaaaaaaaaaaaaaaaaaa"},"https://redos-server.herokuapp.com/aaaaaaaaaaaaaaaaaaaaaaaaa"))},{title:"[misc](200) Test",statement:n.createElement(n.Fragment,null,"オンラインテストに向けてテスト用紙が配られました．あなたは試験開始前に問題を閲覧し，解きたいと思っています．頑張って解いてみてください！",n.createElement("br",null),n.createElement("a",{href:l,download:!0},"[PDFファイル]")),flag:"xryuseixCTF{onaka_suita}",answer:n.createElement(n.Fragment,null,n.createElement("code",null,'qpdf --decrypt --password="password" problem.pdf out2.pdf')," の後にWordで開く，または",n.createElement("code",null,'qpdf --decrypt --password="risec" problem.pdf out2.pdf')," の後に該当部分をコピーする．")}],d=function(t){var e=t.title,r=t.statement,i=t.flag,a=t.answer,s=e+"_label",h=e+"_id";return n.createElement("div",{className:"ctf_hidden-box"},n.createElement("label",{htmlFor:s},e),n.createElement("input",{type:"checkbox",id:s}),n.createElement("div",{className:"ctf_hidden-show"},n.createElement("p",null,r),n.createElement("div",{className:"ctf_submit-column input"},n.createElement("input",{type:"text",id:h})),n.createElement(u,{flag:o()((new TextEncoder).encode(i)),id:h}),n.createElement("details",{style:{display:"none"}},n.createElement("summary",null,"答え"),a)))},p=function(t){var e=t.location;return n.createElement(i.Z,{location:e},n.createElement(a.Z,{title:"CTF",description:"CTF問題をここにおきます．基本的に簡単です．"}),n.createElement(s.Z,{title:"CTF"}),n.createElement("h1",null,"CTF"),n.createElement("p",null,"CTF問題をここにおきます．基本的に簡単です．"),n.createElement("p",null,"このページのソースはみないでね，フラグがそのまま載ってます．"),c.map((function(t){return n.createElement(d,t)})))}}}]);
//# sourceMappingURL=component---src-pages-ctf-index-js-84ddf2fc4ae828f022ad.js.map