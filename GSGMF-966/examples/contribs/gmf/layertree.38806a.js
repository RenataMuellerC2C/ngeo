(function(e){function r(r){var n=r[0];var i=r[1];var u=r[2];var s,f,c=0,h=[];for(;c<n.length;c++){f=n[c];if(a[f]){h.push(a[f][0])}a[f]=0}for(s in i){if(Object.prototype.hasOwnProperty.call(i,s)){e[s]=i[s]}}if(l)l(r);while(h.length){h.shift()()}o.push.apply(o,u||[]);return t()}function t(){var e;for(var r=0;r<o.length;r++){var t=o[r];var n=true;for(var u=1;u<t.length;u++){var s=t[u];if(a[s]!==0)n=false}if(n){o.splice(r--,1);e=i(i.s=t[0])}}return e}var n={};var a={17:0};var o=[];function i(r){if(n[r]){return n[r].exports}var t=n[r]={i:r,l:false,exports:{}};e[r].call(t.exports,t,t.exports,i);t.l=true;return t.exports}i.m=e;i.c=n;i.d=function(e,r,t){if(!i.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:t})}};i.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};i.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};i.d(r,"a",r);return r};i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[];var s=u.push.bind(u);u.push=r;u=u.slice();for(var f=0;f<u.length;f++)r(u[f]);var l=s;o.push([434,0]);return t()})({433:function(e,r,t){"use strict";t.r(r);var n=t(554);var a=t.n(n);var o=t(253);var i=t(108);var u=t(74);var s=t(55);var f=t(174);var l=t(23);var c=t(58);var h=t(160);var m=t(316);var d=t(36);var g=t(46);var v=t(30);var p=t(52);var T={};T.module=angular.module("gmfapp",["gettext",i["a"].name,u["a"].module.name,s["a"].name,f["a"].module.name,l["a"].module.name,h["a"].module.name,m["a"].name,o["a"].name]);T.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background&interface=desktop");T.module.constant("defaultTheme","Demo");T.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");T.MainController=function(e,r,t,n){var a=this;r.loadThemes();this.map=new d["a"]({layers:[new v["a"]({source:new p["a"]})],view:new g["a"]({projection:c["a"],resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})});var o=n.getParam("modal");this.modal=o==="true";this.gmfTreeManager=e;this.gmfThemeManager=t;this.themes=[];this.groups=[];this.layers=[];this.getSetTheme=function(e){if(e){this.gmfThemeManager.addTheme(e)}return this.themes};this.getSetGroup=function(e){if(e!==undefined){this.gmfTreeManager.setFirstLevelGroups([e])}return this.groups};this.getSetLayers=function(e){if(e!==undefined){this.gmfTreeManager.addGroupByLayerName(e.name)}return this.layers};this.getSetRemoveTree=function(e){if(e!==undefined){this.gmfTreeManager.removeGroup(e)}return this.gmfTreeManager.root.children};r.getThemesObject().then(function(e){if(e){a.themes=e;var r=[];a.themes.forEach(function(e){e.children.forEach(function(e){a.groups.push(e);a.getDistinctFlatNodes_(e,r)})});r.forEach(function(e){if(e.children===undefined){a.layers.push(e)}})}});this.getDistinctFlatNodes_=function(e,r){var t=void 0;var n=e.children;if(n!==undefined){for(t=0;t<n.length;t++){this.getDistinctFlatNodes_(n[t],r)}}var a=false;r.some(function(r){if(r.id===e.id){return a=true}});if(!a){r.push(e)}}};T.MainController.$inject=["gmfTreeManager","gmfThemes","gmfThemeManager","ngeoLocation"];T.module.controller("MainController",T.MainController);r["default"]=T},434:function(e,r,t){t(73);t(72);e.exports=t(433)},554:function(e,r){}});
//# sourceMappingURL=layertree.38806a.js.map