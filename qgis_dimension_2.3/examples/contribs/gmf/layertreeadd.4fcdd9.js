!function(e){function t(t){for(var r,i,s=t[0],u=t[1],l=t[2],h=0,m=[];h<s.length;h++)i=s[h],o[i]&&m.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);m.length;)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={16:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;a.push([431,0]),n()}({430:function(e,t,n){"use strict";n.r(t);n(558);var r=n(225),o=n(90),a=n(62),i=n(43),s=n(19),u=n(145),l=n(45),c=n(136),h=n(59),m=n(73),f=n(54),d=n(83),g={};g.module=angular.module("gmfapp",["gettext",o.a.name,a.a.module.name,i.a.name,u.a.module.name,s.a.module.name,c.a.module.name,r.a.name]),g.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background&interface=desktop"),g.module.constant("defaultTheme","Demo"),g.module.constant("gmfTreeManagerModeFlush",!1),g.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),g.MainController=function(e,t,n,r){var o=this;t.loadThemes(),this.map=new h.a({layers:[new f.a({source:new d.a})],view:new m.a({projection:l.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})});var a=r.getParam("modal");this.modal="true"===a,this.gmfTreeManager=e,this.gmfThemeManager=n,this.themes=[],this.groups=[],this.layers=[],this.getSetTheme=function(e){return e&&this.gmfThemeManager.addTheme(e),this.themes},this.getSetGroup=function(e){return void 0!==e&&this.gmfTreeManager.addFirstLevelGroups([e]),this.groups},this.getSetLayers=function(e){return void 0!==e&&this.gmfTreeManager.addGroupByLayerName(e.name),this.layers},this.getSetRemoveTree=function(e){return void 0!==e&&this.gmfTreeManager.removeGroup(e),this.gmfTreeManager.root.children},t.getThemesObject().then(function(e){if(e){o.themes=e;var t=[];o.themes.forEach(function(e){e.children.forEach(function(e){o.groups.push(e),o.getDistinctFlatNodes_(e,t)})}),t.forEach(function(e){void 0===e.children&&o.layers.push(e)})}}),this.getDistinctFlatNodes_=function(e,t){var n=void 0,r=e.children;if(void 0!==r)for(n=0;n<r.length;n++)this.getDistinctFlatNodes_(r[n],t);var o=!1;t.some(function(t){if(t.id===e.id)return o=!0}),o||t.push(e)}},g.MainController.$inject=["gmfTreeManager","gmfThemes","gmfThemeManager","ngeoLocation"],g.module.controller("MainController",g.MainController),t.default=g},431:function(e,t,n){n(61),n(60),e.exports=n(430)},558:function(e,t){}});
//# sourceMappingURL=layertreeadd.4fcdd9.js.map