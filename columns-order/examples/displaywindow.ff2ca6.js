!function(r){function n(n){for(var e,t,i=n[0],l=n[1],o=n[2],s=0,a=[];s<i.length;s++)t=i[s],d[t]&&a.push(d[t][0]),d[t]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(r[e]=l[e]);for(u&&u(n);a.length;)a.shift()();return h.push.apply(h,o||[]),c()}function c(){for(var n,e=0;e<h.length;e++){for(var t=h[e],i=!0,l=1;l<t.length;l++){var o=t[l];0!==d[o]&&(i=!1)}i&&(h.splice(e--,1),n=s(s.s=t[0]))}return n}var t={},d={14:0},h=[];function s(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return r[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=r,s.c=t,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(t,i,function(n){return e[n]}.bind(null,i));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=n,e=e.slice();for(var l=0;l<e.length;l++)n(e[l]);var u=i;h.push([440,0]),c()}({440:function(n,e,t){t(52),t(53),n.exports=t(543)},441:function(n,e){},446:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div\n  class="ngeo-displaywindow"\n  ng-show="$ctrl.open"\n  ng-style="$ctrl.style"\n>\n\n  <div class="windowcontainer">\n\n    <button\n      type="button"\n      class="btn fa-times close"\n      ng-click="$ctrl.close()">\n    </button>\n\n    <div class="animation-container">\n      <div class="slide-animation ">\n        <div\n          class="header ui-draggable-handle"\n          ng-if="$ctrl.title !== null">\n          <p class="title">{{$ctrl.title | translate}}</p>\n        </div>\n        <div\n          class="details content"\n          ng-if="$ctrl.content"\n          ng-bind-html="$ctrl.content">\n        </div>\n        <div\n          class="details iframe"\n          ng-if="$ctrl.url !== null">\n          <iframe\n            frameborder="0"\n            type="text/html"\n            height="100%"\n            width="100%"\n            ng-src="{{ $ctrl.urlTrusted }}"></iframe>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n';return __p}},543:function(n,e,t){"use strict";t.r(e);t(441);var o=t(1);t(193),t(442),t(324),t(302);function s(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var i=angular.module("ngeoMessageDisplaywindowComponent",["ngSanitize"]);function l(n,e){return e(n)}i.run(["$templateCache",function(n){n.put("ngeo/message/displaywindowComponent",t(446))}]),i.value("ngeoMessageDisplaywindowTemplateUrl",function(n){var e=n.ngeoMessageDisplaywindowTemplateUrl;return void 0!==e?e:"ngeo/message/displaywindowComponent"}),l.$inject=["$attrs","ngeoMessageDisplaywindowTemplateUrl"],i.Controller_=function(){function n(n,e,t,i){this.clearOnClose,this.content=null,this.contentTemplate=null,this.contentScope=null,this.draggable,this.draggableContainment,this.desktop,this.height=null,this.open,this.resizable,this.title=null,this.url=null,this.width=null,this.element_=n,this.sce_=e,this.scope_=t,this.compile_=i}n.$inject=["$element","$sce","$scope","$compile"];var e,t,i,l=n.prototype;return l.$onInit=function(){if(this.clearOnClose=!1!==this.clearOnClose,this.content=this.content||null,this.contentTemplate=this.contentTemplate||null,this.contentScope=this.contentScope||null,this.desktop=!1!==this.desktop,this.draggableContainment=this.draggableContainment||"document",this.open=!0===this.open,this.height=this.height||"240px",this.width=this.width||"240px",this.draggable=void 0!==this.draggable?this.draggable:this.desktop,this.resizable=void 0!==this.resizable?this.resizable:this.desktop,this.draggable&&this.element_.find(".ngeo-displaywindow .windowcontainer").draggable({containment:this.draggableContainment,handle:"div.header"}),this.resizable&&this.element_.find(".ngeo-displaywindow .windowcontainer").resizable({minHeight:240,minWidth:240}),this.contentTemplate){var n=o.a.assert(this.contentScope||this.scope_),e=this.compile_(this.contentTemplate)(n);this.element_.find(".ngeo-displaywindow .windowcontainer .animation-container").append(e)}},l.close=function(){this.open=!1,this.clearOnClose&&this.clear_()},l.clear_=function(){this.content=null,this.title=null,this.url=null},e=n,(t=[{key:"style",get:function(){return{height:this.height,width:this.width}}},{key:"urlTrusted",get:function(){if(this.url)return this.sce_.trustAsResourceUrl(this.url)}}])&&s(e.prototype,t),i&&s(e,i),n}(),i.component("ngeoDisplaywindow",{bindings:{clearOnClose:"<?",content:"=?",contentTemplate:"<?",contentScope:"<?",desktop:"<?",draggable:"<?",draggableContainment:"<?",height:"=?",open:"=?",resizable:"<?",title:"=?",url:"=?",width:"=?"},controller:i.Controller_,templateUrl:l});var a=i,r={};r.module=angular.module("app",[a.name]),r.MainController=function(n){this.window1Content="https://www.camptocamp.com",this.window2Content="<p>A window: <ul>\n      <li>That have custom dimensions.</li>\n      <li>That is draggable</li>\n      <li>That is rezisable</li>\n      <li>That can be open and close</li>\n      </ul></p>",this.window2IsOpen=!1,this.window3IsOpen=!1,this.window3Template='\n    <div class="details">\n      <p>\n          <h3>Using AngularJS directives:</h3>\n          <span ng-if="!ctrl.window3FalseValue">This should appear</span>\n          <span ng-show="ctrl.window3FalseValue">This should not be visible</span>\n      </p>\n    </div>\n  ',this.window3FalseValue=!1,this.window4IsOpen=!1,this.window4Template=angular.element(document.getElementById("window4Template")).html(),this.window4TextBinding="This is an AngularJS binding.",this.windowScope=n},r.MainController.$inject=["$scope"],r.module.controller("MainController",r.MainController);e.default=r}});
//# sourceMappingURL=displaywindow.ff2ca6.js.map