"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[930],{7107:function(e,t,n){n.r(t);var l=n(4578),o=n(7294),r=n(537),c=n(8057),i=n(7431),a=[{name:"黒",code:"black"},{name:"白",code:"white"},{name:"赤",code:"red"},{name:"黄",code:"yellow"}],u=function(e){function t(t){var n;return void 0===t&&(t={full:!1,display:"block"}),(n=e.call(this,t)||this).state={full:t.full,display:t.display},n}(0,l.Z)(t,e);var n=t.prototype;return n.exitFullscreen=function(){if(this.state.full){var e=window.document;e.exitFullscreen&&e.exitFullscreen(),this.setState({full:!1,display:"block"});var t=e.querySelector(".color_body");null!=t&&(t.style.backgroundColor="white")}},n.handleKeyDown=function(){this.exitFullscreen()},n.componentDidMount=function(){window.addEventListener("keydown",this.handleKeyDown.bind(this))},n.changeBackGrountColor=function(e){var t=window.document.querySelector(".color_body");null!=t&&(t.style.backgroundColor=e,t.requestFullscreen&&t.requestFullscreen()),this.setState({full:!0,display:"none"})},n.render=function(){var e=this;return o.createElement("div",{className:"color_body"},o.createElement("div",{style:{display:this.state.display}},a.map((function(t){return o.createElement("button",{style:{backgroundColor:t.code},onClick:function(){return e.changeBackGrountColor(t.code)}},t.name)}))))},t}(o.Component);t.default=function(e){return o.createElement(r.Z,{location:e.location},o.createElement(i.Z,{title:"Colors",description:"Colors"}),o.createElement(c.Z,{title:"Colors"}),o.createElement(u,null))}}}]);
//# sourceMappingURL=component---src-pages-apps-color-tsx-69f93940d1765ca5d37a.js.map