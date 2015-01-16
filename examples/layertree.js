/**
 * @fileoverview This example shows how to create a layer tree tree based
 * on ngeo's ngeoLayertree directive.
 */

goog.provide('layertree');

goog.require('ngeo.layertreeDirective');
goog.require('ngeo.layertreenodeDirective');
goog.require('ngeo.mapDirective');
goog.require('ol.Map');
goog.require('ol.View');
goog.require('ol.layer.Tile');
goog.require('ol.source.MapQuest');
goog.require('ol.source.OSM');
goog.require('ol.source.Stamen');


/** @const */
var app = {};


/** @type {!angular.Module} */
app.module = angular.module('app', ['ngeo']);


// Use the default "layer tree" template.
app.module.value('ngeoLayertreeTemplateUrl',
    '../src/directives/partials/layertree.html');

// Use an application-specific "layer tree node" template.
app.module.value('ngeoLayertreenodeTemplateUrl',
    'partials/layertreenode.html');


/**
 * An application-specific directive wrapping the ngeo tree layer directive.
 * The directive includes a controller defining the tree tree.
 * @return {angular.Directive} The Directive Definition Object.
 */
app.layertreeDirective = function() {
  return {
    restrict: 'E',
    scope: {
      'map': '=appLayertreeMap'
    },
    controller: 'AppLayertreeController',
    controllerAs: 'ctrl',
    bindToController: true,
    // use "::ctrl.tree" for the "tree" expression as we know the
    // layer tree won't change
    template: '<div ngeo-layertree="::ctrl.tree" ' +
        'ngeo-layertree-map="ctrl.map" ' +
        'ngeo-layertree-layer="ctrl.getLayer(node)">' +
        '</div>'
  };
};


app.module.directive('appLayertree', app.layertreeDirective);



/**
 * @constructor
 * @param {angular.$http} $http Angular http service.
 * @param {function(Object):ol.layer.Layer} appGetLayer Get layer service.
 * @ngInject
 * @export
 */
app.LayertreeController = function($http, appGetLayer) {
  $http.get('data/tree.json').then(angular.bind(this, function(resp) {
    this['tree'] = resp.data;
  }));

  /**
   * @private
   * @type {function(Object):ol.layer.Layer}
   */
  this.getLayer_ = appGetLayer;
};


/**
 * Function called by the ngeo-layertreenode directives to create a layer
 * from a tree node. The function should return `null` if no layer should
 * be associated to the node (because it's not a leaf).
 * @param {Object} node Node object.
 * @return {ol.layer.Layer} The layer for this node.
 * @export
 */
app.LayertreeController.prototype.getLayer = function(node) {
  return this.getLayer_(node);
};


/**
 * @param {Object} node Tree node.
 * @param {ol.layer.Layer} layer Layer.
 * @export
 */
app.LayertreeController.prototype.onButtonClick = function(node, layer) {
  window.alert(node['name'] + ', ' + layer.get('type'));
};


app.module.controller('AppLayertreeController', app.LayertreeController);


/**
 * A function that returns a layer for a node. A cache is used, so always the
 * same layer instance is returned for a given node. This function is called by
 * the ngeoLayertreenode directive for creating layers from tree nodes. The
 * function returns `null` when no layer should be created for the node.
 *
 * @param {Object} node Layer tree node.
 * @return {ol.layer.Layer} Layer.
 */
app.getLayer = (function() {
  /**
   * @type {Object.<string, ol.layer.Layer>}
   */
  var layerCache = {};
  return (
      /**
       * @param {Object} node Tree node.
       * @return {ol.layer.Layer} Layer.
       */
      function(node) {
        if (!('layerType' in node)) {
          return null;
        }
        var type = node['layerType'];
        if (type in layerCache) {
          return layerCache[type];
        }
        var source;
        if (type == 'stamenWatercolor') {
          source = new ol.source.Stamen({
            layer: 'watercolor'
          });
        } else if (type == 'stamenTerrain-labels') {
          source = new ol.source.Stamen({
            layer: 'terrain-labels'
          });
        } else if (type == 'mapquestOsm') {
          source = new ol.source.MapQuest({
            layer: 'osm'
          });
        } else if (type == 'mapquestSat') {
          source = new ol.source.MapQuest({
            layer: 'sat'
          });
        } else if (type == 'mapquestHyb') {
          source = new ol.source.MapQuest({
            layer: 'hyb'
          });
        } else {
          source = new ol.source.OSM();
        }
        var layer = new ol.layer.Tile({
          source: source
        });
        layer.set('type', type);
        layerCache[type] = layer;
        return layer;
      });
})();


app.module.value('appGetLayer', app.getLayer);



/**
 * The application's main directive.
 * @constructor
 */
app.MainController = function() {
  /** @type {ol.Map} */
  this['map'] = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: [-10983710.59086991, 4686507.078220731],
      zoom: 4
    })
  });
};


app.module.controller('MainController', app.MainController);
