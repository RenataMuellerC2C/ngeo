// The MIT License (MIT)
//
// Copyright (c) 2016-2020 Camptocamp SA
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import angular from 'angular';
import ngeoMiscFilters from 'ngeo/misc/filters.js';
import {getRowUid} from 'ngeo/grid/Config.js';
import {MAC} from 'ol/has.js';

import 'floatthead';
import 'angular-float-thead';
import 'ngeo/sass/font.scss';

/**
 * @type {angular.IModule}
 * @hidden
 */
const module = angular.module('ngeoGrid', [ngeoMiscFilters.name, 'floatThead']);

module.run(
  /**
   * @ngInject
   * @param {angular.ITemplateCacheService} $templateCache
   */
  ($templateCache) => {
    // @ts-ignore: webpack
    $templateCache.put('ngeo/grid', require('./component.html'));
  }
);

module.value(
  'ngeoGridTemplateUrl',
  /**
   * @param {angular.IAttributes} $attrs Attributes.
   * @return {string} Template URL.
   */
  ($attrs) => {
    const templateUrl = $attrs.ngeoGridTemplateurl;
    return templateUrl !== undefined ? templateUrl : 'ngeo/grid';
  }
);

/**
 * @param {angular.IAttributes} $attrs Attributes.
 * @param {function(angular.IAttributes): string} ngeoGridTemplateUrl Template function.
 * @return {string} Template URL.
 * @ngInject
 * @private
 * @hidden
 */
function ngeoGridTemplateUrl($attrs, ngeoGridTemplateUrl) {
  return ngeoGridTemplateUrl($attrs);
}

/**
 * A grid component for displaying tabular data. The columns of the grid
 * are sortable, rows can be selected with a single click (also in combination
 * with SHIFT and CTRL/Meta).
 *
 * Example:
 *
 *     <ngeo-grid
 *       ngeo-grid-configuration="::ctrl.gridConfiguration"
 *     </ngeo-grid>
 *
 * @htmlAttribute {import("ngeo/grid/Config.js").default} ngeo-grid-configuration The
 * configuration to use.
 *
 * @ngdoc component
 * @ngname ngeoGrid
 */
const gridComponent = {
  controller: GridController,
  bindings: {
    'configuration': '=ngeoGridConfiguration',
  },
  templateUrl: ngeoGridTemplateUrl,
};

module.component('ngeoGrid', gridComponent);

/**
 * @param {angular.IScope} $scope Angular scope.
 * @constructor
 * @private
 * @hidden
 * @ngInject
 * @ngdoc controller
 * @ngname ngeoGridController
 */
export function GridController($scope) {
  /**
   * @type {angular.IScope}
   * @private
   */
  this.scope_ = $scope;

  /**
   * @type {?import("ngeo/grid/Config.js").default}
   */
  this.configuration = null;

  /**
   * @type {Object<string, Object>}
   */
  this.selectedRows = {};

  /**
   * The name of the column used to sort the grid.
   * @type {string}
   */
  this.sortedBy = '';

  /**
   * @type {boolean}
   */
  this.sortAscending = true;

  /**
   * Configuration object for float-thead.
   * @type {Object}
   */
  this.floatTheadConfig = {
    /**
     * @param {JQuery} $table
     */
    scrollContainer: function ($table) {
      return $table.closest('.ngeo-grid-table-container');
    },
  };
}

/**
 * Init the controller
 */
GridController.prototype.$onInit = function () {
  if (!this.configuration) {
    throw new Error('Missing configuration');
  }
  this.selectedRows = this.configuration.selectedRows;
};

/**
 * Sort function that always puts undefined values to the bottom of the grid.
 * A new call will sort ascending. A next one will sort descending (and so
 * on).
 * @param {string} columnName The name of the column that should be used to
 *    sort the data.
 */
GridController.prototype.sort = function (columnName) {
  if (!this.configuration) {
    throw new Error('Missing configuration');
  }
  if (!this.configuration.data) {
    throw new Error('Missing configuration.data');
  }
  this.sortAscending = this.sortedBy === columnName ? !this.sortAscending : true;
  this.sortedBy = columnName;

  const asc = this.sortAscending ? 1 : -1;
  this.configuration.data.sort((attributes1, attributes2) => {
    if (!attributes1[columnName]) {
      return 1;
    }
    if (!attributes2[columnName]) {
      return -1;
    }
    return attributes1[columnName] > attributes2[columnName] ? asc : -asc;
  });
};

/**
 * Handler for clicks on a row.
 * @param {Object} attributes An entry/row.
 * @param {JQueryEventObject} event Event.
 */
GridController.prototype.clickRow = function (attributes, event) {
  const shiftKey = isShiftKeyOnly(event);
  const platformModifierKey = isPlatformModifierKeyOnly(event);

  this.clickRow_(attributes, shiftKey, platformModifierKey);
};

/**
 * @param {Object} attributes An entry/row.
 * @param {boolean} shiftKey Shift pressed?
 * @param {boolean} platformModifierKey CTRL/Meta pressed?
 * @private
 */
GridController.prototype.clickRow_ = function (attributes, shiftKey, platformModifierKey) {
  if (!this.configuration) {
    throw new Error('Missing configuration');
  }

  if (shiftKey && !platformModifierKey) {
    this.selectRange_(attributes);
  } else if (!shiftKey && platformModifierKey) {
    this.configuration.toggleRow(attributes);
  } else {
    const isSelected = this.configuration.isRowSelected(attributes);
    this.configuration.unselectAll();
    if (!isSelected) {
      this.configuration.selectRow(attributes);
    }
  }
};

/**
 * Selects all rows between the given row and the closest already selected row.
 * @param {Object} attributes An entry/row.
 * @private
 */
GridController.prototype.selectRange_ = function (attributes) {
  if (!this.configuration) {
    throw new Error('Missing configuration');
  }
  if (!this.configuration.data) {
    throw new Error('Missing configuration.data');
  }
  const targetUid = getRowUid(attributes);
  const data = this.configuration.data;

  if (this.configuration.isRowSelected(attributes)) {
    return;
  }

  // get the position of the clicked and all already selected rows
  /** @type {number} */
  let posClickedRow = 0;
  const posSelectedRows = [];
  for (let i = 0; i < data.length; i++) {
    const currentRow = data[i];
    const currentUid = getRowUid(currentRow);

    if (targetUid === currentUid) {
      posClickedRow = i;
    } else if (this.configuration.isRowSelected(currentRow)) {
      posSelectedRows.push(i);
    }
  }

  if (posSelectedRows.length == 0) {
    // if no other row is selected, select the clicked one and stop
    this.configuration.selectRow(attributes);
  }

  // find the selected row which is the closest to the clicked row
  let distance = Infinity;
  let posClosestRow = posSelectedRows[0];
  for (const posSelectedRow of posSelectedRows) {
    const currentPos = posSelectedRow;
    const currentDistance = Math.abs(currentPos - posClickedRow);
    if (distance > currentDistance) {
      distance = currentDistance;
      posClosestRow = currentPos;
    }
    // note: this could be optimized because `posSelectedRows` is ordered.
  }

  // then select all rows between the clicked one and the closest
  const rangeStart = posClickedRow < posClosestRow ? posClickedRow : posClosestRow;
  const rangeEnd = posClickedRow > posClosestRow ? posClickedRow : posClosestRow;

  for (let l = rangeStart; l <= rangeEnd; l++) {
    this.configuration.selectRow(data[l]);
  }
};

/**
 * Prevent the default browser behaviour of selecting text
 * when selecting multiple rows with SHIFT or CTRL/Meta.
 * @param {JQueryEventObject} event Event.
 */
GridController.prototype.preventTextSelection = function (event) {
  const shiftKey = isShiftKeyOnly(event);
  const platformModifierKey = isPlatformModifierKeyOnly(event);

  if (shiftKey || platformModifierKey) {
    event.preventDefault();
  }
};

/**
 * Same as `ol.events.condition.platformModifierKeyOnly`.
 * @param {JQueryEventObject} event Event.
 * @return {boolean} True if only the platform modifier key is pressed.
 * @private
 */
function isPlatformModifierKeyOnly(event) {
  return !event.altKey && (MAC ? event.metaKey : event.ctrlKey) && !event.shiftKey;
}

/**
 * Same as `ol.events.condition.shiftKeyOnly`.
 * @param {JQueryEventObject} event Event.
 * @return {boolean} True if only the shift key is pressed.
 * @private
 */
function isShiftKeyOnly(event) {
  return !event.altKey && !(event.metaKey || event.ctrlKey) && event.shiftKey;
}

module.controller('ngeoGridController', GridController);

export default module;
