!function(u){function e(e){for(var t,o,r=e[0],n=e[1],a=e[2],l=0,i=[];l<r.length;l++)o=r[l],s[o]&&i.push(s[o][0]),s[o]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(u[t]=n[t]);for(p&&p(e);i.length;)i.shift()();return m.push.apply(m,a||[]),c()}function c(){for(var e,t=0;t<m.length;t++){for(var o=m[t],r=!0,n=1;n<o.length;n++){var a=o[n];0!==s[a]&&(r=!1)}r&&(m.splice(t--,1),e=l(l.s=o[0]))}return e}var o={},s={24:0},m=[];function l(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=u,l.c=o,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(o,r,function(e){return t[e]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var p=r;m.push([595,0]),c()}({595:function(e,t,o){o(71),o(72),e.exports=o(596)},596:function(e,t,o){"use strict";o.r(t);o(597);var r=o(54),n=o(348),a=o(24),l=o(205),i=o(83),u=o(55),c=o(122),s=o(34),m=o(42),p=o(28),f=o(49),d=o(65),h=o(31),g=o(30),y=o(10),b={};b.module=angular.module("gmfapp",["gettext",r.a.name,n.a.name,a.a.module.name,c.a.name,l.a.module.name]),b.module.value("gmfTreeUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/themes?version=2&background=background"),b.module.value("fulltextsearchUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/fulltextsearch?limit=30&partitionlimit=5&interface=desktop"),b.module.value("gmfLayersUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/layers/"),b.module.constant("defaultTheme","Demo"),b.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),b.MainController=function(e,t,o){e.loadThemes(),t.init(this.map),this.searchDatasources=[{groupValues:["osm","district"],groupActions:[],labelKey:"label",projection:u.a,bloodhoundOptions:{remote:{rateLimitWait:250}},url:"https://geomapfish-demo-dc.camptocamp.com/2.4/fulltextsearch"}];var r=new h.a({color:[255,255,255,.6]}),n=new g.a({color:[255,0,0,1],width:2});this.searchStyles={osm:new y.c({fill:r,image:new d.a({fill:r,radius:5,stroke:n}),stroke:n})},this.searchOptions={minLength:2},this.inputValue="",this.map=new s.a({layers:[new p.a({source:new f.a})],view:new m.a({center:[0,0],zoom:4})}),this.searchIsReady=function(){o.notify({msg:"gmf-search initialized",target:angular.element("#message"),type:i.a.Type.SUCCESS})}},b.MainController.$inject=["gmfThemes","ngeoFeatureOverlayMgr","ngeoNotification"],b.module.controller("MainController",b.MainController),t.default=b},597:function(e,t){}});
//# sourceMappingURL=search.db47f2.js.map