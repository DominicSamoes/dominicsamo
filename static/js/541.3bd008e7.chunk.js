"use strict";(self.webpackChunkreact_tutorial=self.webpackChunkreact_tutorial||[]).push([[541],{7148:function(e,n,t){t.r(n),t.d(n,{Banner:function(){return g}});var a=t(885),r=t(2791),c=t(7022),i=t(9743),o=t(2677),s=t(2007),l=t.n(s),u=["color","size","title"];function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},f.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=(0,r.forwardRef)((function(e,n){var t=e.color,a=e.size,c=e.title,i=d(e,u);return r.createElement("svg",f({ref:n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:t},i),c?r.createElement("title",null,c):null,r.createElement("path",{fillRule:"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}))}));p.propTypes={color:l().string,size:l().oneOfType([l().string,l().number]),title:l().string},p.defaultProps={color:"currentColor",size:"1em",title:null};var h=p,m=t.p+"static/media/me_result.58ae74a6c9f271b89809.webp",v=t(184),g=function(){var e=(0,r.useState)(0),n=(0,a.Z)(e,2),t=n[0],s=n[1],l=(0,r.useState)(!1),u=(0,a.Z)(l,2),f=u[0],d=u[1],p=["BSc Majoring in Computer Science and Physics","Software Engineer","Data Scientist","Swati-Mozambican","Eswatini Citizen"],g=(0,r.useState)(""),b=(0,a.Z)(g,2),x=b[0],y=b[1],w=(0,r.useState)(300-100*Math.random()),j=(0,a.Z)(w,2),Z=j[0],S=j[1];(0,r.useEffect)((function(){var e=setInterval((function(){E()}),Z);return function(){clearInterval(e)}}),[x]);var E=function(){var e=p[t%p.length],n=f?e.substring(0,x.length-1):e.substring(0,x.length+1);y(n),f&&S((function(e){return e/2})),f||n!==e?f&&""===n&&(d(!1),s(t+1),S(500)):(d(!0),S(2e3))};return(0,v.jsx)("section",{className:"banner",id:"home",children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(i.Z,{className:"align-items-center",children:[(0,v.jsxs)(o.Z,{xs:12,md:6,xl:7,children:[(0,v.jsx)("h1",{children:"Hi I'm Dominic Samo "}),(0,v.jsx)("h2",{children:(0,v.jsx)("span",{className:"wrap",children:x})}),(0,v.jsx)("p",{children:"My interests are in Financial Technology (FinTech), Software Engineering (Android and Web App Development), Computational Physics and Data Science (Machine Learning and Deep Learning). Completed my undegraduate degree at the University of Eswatini in the year 2021."}),(0,v.jsx)("p",{children:"I am a swimmer, cyclist, comic and graphic book artist, History, Political Science, World Geography, International Relations and Philosophy enthusiast."}),(0,v.jsxs)("button",{onClick:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},children:["Let's Connect ",(0,v.jsx)(h,{size:25})]})]}),(0,v.jsx)(o.Z,{xs:12,md:6,xl:5,children:(0,v.jsx)("img",{src:m,alt:"Header Img"})})]})})})}},2677:function(e,n,t){var a=t(885),r=t(1413),c=t(5987),i=t(1694),o=t.n(i),s=t(2791),l=t(162),u=t(184),f=["as","bsPrefix","className"],d=["className"];var p=s.forwardRef((function(e,n){var t=function(e){var n=e.as,t=e.bsPrefix,a=e.className,i=(0,c.Z)(e,f);t=(0,l.vE)(t,"col");var s=(0,l.pi)(),u=(0,l.zG)(),d=[],p=[];return s.forEach((function(e){var n,a,r,c=i[e];delete i[e],"object"===typeof c&&null!=c?(n=c.span,a=c.offset,r=c.order):n=c;var o=e!==u?"-".concat(e):"";n&&d.push(!0===n?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(n)),null!=r&&p.push("order".concat(o,"-").concat(r)),null!=a&&p.push("offset".concat(o,"-").concat(a))})),[(0,r.Z)((0,r.Z)({},i),{},{className:o().apply(void 0,[a].concat(d,p))}),{as:n,bsPrefix:t,spans:d}]}(e),i=(0,a.Z)(t,2),s=i[0],p=s.className,h=(0,c.Z)(s,d),m=i[1],v=m.as,g=void 0===v?"div":v,b=m.bsPrefix,x=m.spans;return(0,u.jsx)(g,(0,r.Z)((0,r.Z)({},h),{},{ref:n,className:o()(p,!x.length&&b)}))}));p.displayName="Col",n.Z=p},9743:function(e,n,t){var a=t(1413),r=t(5987),c=t(1694),i=t.n(c),o=t(2791),s=t(162),l=t(184),u=["bsPrefix","className","as"],f=o.forwardRef((function(e,n){var t=e.bsPrefix,c=e.className,o=e.as,f=void 0===o?"div":o,d=(0,r.Z)(e,u),p=(0,s.vE)(t,"row"),h=(0,s.pi)(),m=(0,s.zG)(),v="".concat(p,"-cols"),g=[];return h.forEach((function(e){var n,t=d[e];delete d[e],n=null!=t&&"object"===typeof t?t.cols:t;var a=e!==m?"-".concat(e):"";null!=n&&g.push("".concat(v).concat(a,"-").concat(n))})),(0,l.jsx)(f,(0,a.Z)((0,a.Z)({ref:n},d),{},{className:i().apply(void 0,[c,p].concat(g))}))}));f.displayName="Row",n.Z=f}}]);
//# sourceMappingURL=541.3bd008e7.chunk.js.map