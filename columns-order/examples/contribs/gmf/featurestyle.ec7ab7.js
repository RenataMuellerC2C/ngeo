!function(i){function e(e){for(var t,a,n=e[0],r=e[1],o=e[2],l=0,u=[];l<n.length;l++)a=n[l],c[a]&&u.push(c[a][0]),c[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t]);for(f&&f(e);u.length;)u.shift()();return p.push.apply(p,o||[]),s()}function s(){for(var e,t=0;t<p.length;t++){for(var a=p[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==c[o]&&(n=!1)}n&&(p.splice(t--,1),e=l(l.s=a[0]))}return e}var a={},c={11:0},p=[];function l(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=i,l.c=a,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var f=n;p.push([555,0]),s()}({555:function(e,t,a){a(71),a(72),e.exports=a(556)},556:function(e,t,a){"use strict";a.r(t);a(557);var n=a(255),r=a(54),p=a(1),f=a(12),o=a(62),h=a(13),d=a(34),O=a(42),g=a(163),m=a(35),C=a(22),y=a(32),w=a(28),v=a(64),E=a(49),S=a(61),l={};l.module=angular.module("gmfapp",["gettext",n.a.name,r.a.name,o.a.module.name]),l.module.value("ngeoMeasureDecimals",2),l.module.constant("defaultTheme","Demo"),l.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),l.MainController=function(e,t){this.scope_=e,this.featureHelper_=t;var a=[],n={geometry:new C.a([-8458215,6672646])};n[f.a.COLOR]="#009D57",n[f.a.NAME]="Point1",n[f.a.SIZE]="6",a.push(new h.a(n));var r={geometry:new C.a([-8007848,6209744])};r[f.a.ANGLE]="0",r[f.a.COLOR]="#000000",r[f.a.IS_TEXT]=!0,r[f.a.NAME]="Text 1",r[f.a.SIZE]="16",r[f.a.STROKE]="2",a.push(new h.a(r));var o={geometry:new m.a([[-8321240,6523441],[-8103547,6726458],[-8091318,6408480],[-7973910,6631065]])};o[f.a.COLOR]="#0BA9CC",o[f.a.NAME]="LineString 1",o[f.a.STROKE]="4",a.push(new h.a(o));var l={geometry:new y.a([[[-8512027,6359560],[-8531595,6080718],[-8267428,6031798],[-8238077,6247045],[-8512027,6359560]]])};l[f.a.COLOR]="#4186F0",l[f.a.NAME]="Polygon 1",l[f.a.OPACITY]="0.5",l[f.a.SHOW_MEASURE]=!0,l[f.a.STROKE]="1",a.push(new h.a(l));var u={geometry:new y.a([[[-7952508,6096617],[-8051570,5959642],[-7848554,5926621],[-7754383,6025683],[-7952508,6096617]]])};u[f.a.COLOR]="#CCCCCC",u[f.a.NAME]="Polygon 2",u[f.a.OPACITY]="1",u[f.a.STROKE]="3",a.push(new h.a(u));var i={geometry:y.a.fromExtent([-7874848,6496535,-7730535,6384020])};i[f.a.COLOR]="#000000",i[f.a.IS_RECTANGLE]=!0,i[f.a.NAME]="Rectangle 1",i[f.a.OPACITY]="0.5",i[f.a.STROKE]="2",a.push(new h.a(i));var s={geometry:y.a.fromCircle(new g.a([-7691093,6166327],35e3),64)};s[f.a.COLOR]="#000000",s[f.a.IS_CIRCLE]=!0,s[f.a.NAME]="Circle 1",s[f.a.OPACITY]="0.5",s[f.a.STROKE]="2",a.push(new h.a(s));var c=new O.a({center:[-8174482,6288627],zoom:6});t.setProjection(p.a.assert(c.getProjection())),a.forEach(function(e){t.setStyle(e)}),this.map=new d.a({layers:[new w.a({source:new E.a}),new v.a({source:new S.b({wrapX:!1,features:a})})],view:c}),this.selectedFeature=null,this.map.on("singleclick",this.handleMapSingleClick_,this)},l.MainController.$inject=["$scope","ngeoFeatureHelper"],l.MainController.prototype.handleMapSingleClick_=function(e){var t=e.pixel,a=this.map.forEachFeatureAtPixel(t,function(e){return e});this.selectedFeature&&this.featureHelper_.setStyle(this.selectedFeature),a?this.selectedFeature!==a&&(this.selectedFeature=a,this.featureHelper_.setStyle(a,!0)):this.selectedFeature=null,this.scope_.$apply()},l.module.controller("MainController",l.MainController),t.default=l},557:function(e,t){}});
//# sourceMappingURL=featurestyle.ec7ab7.js.map