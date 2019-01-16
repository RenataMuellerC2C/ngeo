/**
 * @module ngeo.draw.rectangle
 */
import angular from 'angular';
import ngeoGeometryType from 'ngeo/GeometryType.js';
import * as olEvents from 'ol/events.js';
import olInteractionDraw from 'ol/interaction/Draw.js';
import olGeomPolygon from 'ol/geom/Polygon.js';

/**
 * @type {!angular.IModule}
 */
const exports = angular.module('ngeoDrawrectangle', []);


/**
 * @return {angular.IDirective} The directive specs.
 * @ngInject
 * @ngdoc directive
 * @ngname ngeoDrawrectangle
 */
function directive() {
  return {
    restrict: 'A',
    require: '^^ngeoDrawfeature',
    /**
     * @param {!angular.IScope} $scope Scope.
     * @param {angular.JQLite} element Element.
     * @param {angular.Attributes} attrs Attributes.
     * @param {ngeo.draw.Controller} drawFeatureCtrl Controller.
     */
    link: ($scope, element, attrs, drawFeatureCtrl) => {

      const drawRectangle = new olInteractionDraw({
        type: /** @type {ol.geom.GeometryType} */ ('LineString'),
        geometryFunction: (coordinates, geometry) => {
          if (!geometry) {
            geometry = new olGeomPolygon([]);
          }
          const start = coordinates[0];
          const end = coordinates[1];
          geometry.setCoordinates([
            [start, [start[0], end[1]], end, [end[0], start[1]], start]
          ]);
          return geometry;
        },
        maxPoints: 2
      });

      drawFeatureCtrl.registerInteraction(drawRectangle);
      drawFeatureCtrl.drawRectangle = drawRectangle;

      olEvents.listen(
        drawRectangle,
        'drawend',
        drawFeatureCtrl.handleDrawEnd.bind(
          drawFeatureCtrl, ngeoGeometryType.RECTANGLE),
        drawFeatureCtrl
      );
      olEvents.listen(
        drawRectangle,
        'change:active',
        drawFeatureCtrl.handleActiveChange,
        drawFeatureCtrl
      );
    }
  };
}


exports.directive('ngeoDrawrectangle', directive);


export default exports;
