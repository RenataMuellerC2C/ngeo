(function(e){function a(a){var t=a[0];var l=a[1];var u=a[2];var i,s,p=0,f=[];for(;p<t.length;p++){s=t[p];if(n[s]){f.push(n[s][0])}n[s]=0}for(i in l){if(Object.prototype.hasOwnProperty.call(l,i)){e[i]=l[i]}}if(c)c(a);while(f.length){f.shift()()}o.push.apply(o,u||[]);return r()}function r(){var e;for(var a=0;a<o.length;a++){var r=o[a];var t=true;for(var u=1;u<r.length;u++){var i=r[u];if(n[i]!==0)t=false}if(t){o.splice(a--,1);e=l(l.s=r[0])}}return e}var t={};var n={20:0};var o=[];function l(a){if(t[a]){return t[a].exports}var r=t[a]={i:a,l:false,exports:{}};e[a].call(r.exports,r,r.exports,l);r.l=true;return r.exports}l.m=e;l.c=t;l.d=function(e,a,r){if(!l.o(e,a)){Object.defineProperty(e,a,{configurable:false,enumerable:true,get:r})}};l.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};l.n=function(e){var a=e&&e.__esModule?function a(){return e["default"]}:function a(){return e};l.d(a,"a",a);return a};l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)};l.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[];var i=u.push.bind(u);u.push=a;u=u.slice();for(var s=0;s<u.length;s++)a(u[s]);var c=i;o.push([440,0]);return r()})({439:function(e,a,r){"use strict";r.r(a);var t=r(561);var n=r.n(t);var o=r(265);var l=r(56);var u=r(2);var i=r(13);var s=r(64);var c=r(14);var p=r(37);var f=r(46);var v=r(165);var h=r(36);var C=r(21);var O=r(32);var w=r(31);var g=r(60);var m=r(52);var d=r(57);var E={};E.module=angular.module("gmfapp",["gettext",o["a"].name,l["a"].name,s["a"].module.name]);E.module.value("ngeoMeasureDecimals",2);E.module.constant("defaultTheme","Demo");E.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");E.MainController=function(e,a){this.scope_=e;this.featureHelper_=a;var r=[];var t={geometry:new C["a"]([-8458215,6672646])};t[i["a"].COLOR]="#009D57";t[i["a"].NAME]="Point1";t[i["a"].SIZE]="6";r.push(new c["a"](t));var n={geometry:new C["a"]([-8007848,6209744])};n[i["a"].ANGLE]="0";n[i["a"].COLOR]="#000000";n[i["a"].IS_TEXT]=true;n[i["a"].NAME]="Text 1";n[i["a"].SIZE]="16";n[i["a"].STROKE]="2";r.push(new c["a"](n));var o={geometry:new h["a"]([[-8321240,6523441],[-8103547,6726458],[-8091318,6408480],[-7973910,6631065]])};o[i["a"].COLOR]="#0BA9CC";o[i["a"].NAME]="LineString 1";o[i["a"].STROKE]="4";r.push(new c["a"](o));var l={geometry:new O["a"]([[[-8512027,6359560],[-8531595,6080718],[-8267428,6031798],[-8238077,6247045],[-8512027,6359560]]])};l[i["a"].COLOR]="#4186F0";l[i["a"].NAME]="Polygon 1";l[i["a"].OPACITY]="0.5";l[i["a"].SHOW_MEASURE]=true;l[i["a"].STROKE]="1";r.push(new c["a"](l));var s={geometry:new O["a"]([[[-7952508,6096617],[-8051570,5959642],[-7848554,5926621],[-7754383,6025683],[-7952508,6096617]]])};s[i["a"].COLOR]="#CCCCCC";s[i["a"].NAME]="Polygon 2";s[i["a"].OPACITY]="1";s[i["a"].STROKE]="3";r.push(new c["a"](s));var E={geometry:O["a"].fromExtent([-7874848,6496535,-7730535,6384020])};E[i["a"].COLOR]="#000000";E[i["a"].IS_RECTANGLE]=true;E[i["a"].NAME]="Rectangle 1";E[i["a"].OPACITY]="0.5";E[i["a"].STROKE]="2";r.push(new c["a"](E));var y={geometry:O["a"].fromCircle(new v["a"]([-7691093,6166327],35e3),64)};y[i["a"].COLOR]="#000000";y[i["a"].IS_CIRCLE]=true;y[i["a"].NAME]="Circle 1";y[i["a"].OPACITY]="0.5";y[i["a"].STROKE]="2";r.push(new c["a"](y));var S=new f["a"]({center:[-8174482,6288627],zoom:6});a.setProjection(u["a"].assert(S.getProjection()));r.forEach(function(e){a.setStyle(e)});this.map=new p["a"]({layers:[new w["a"]({source:new m["a"]}),new g["a"]({source:new d["b"]({wrapX:false,features:r})})],view:S});this.selectedFeature=null;this.map.on("singleclick",this.handleMapSingleClick_,this)};E.MainController.$inject=["$scope","ngeoFeatureHelper"];E.MainController.prototype.handleMapSingleClick_=function(e){var a=e.pixel;var r=this.map.forEachFeatureAtPixel(a,function(e){return e});if(this.selectedFeature){this.featureHelper_.setStyle(this.selectedFeature)}if(r){if(this.selectedFeature!==r){this.selectedFeature=r;this.featureHelper_.setStyle(r,true)}}else{this.selectedFeature=null}this.scope_.$apply()};E.module.controller("MainController",E.MainController);a["default"]=E},440:function(e,a,r){r(73);r(72);e.exports=r(439)},561:function(e,a){}});
//# sourceMappingURL=featurestyle.8ebb36.js.map