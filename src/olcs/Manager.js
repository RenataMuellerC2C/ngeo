import olcsContribManager from 'olcs/contrib/Manager.js';

class Manager extends olcsContribManager {
  /**
   * @param {string} url .
   * @param {angular.IScope} $rootScope .
   * @param {olcsx.contrib.ManagerOptions} options .
   */
  constructor(url, $rootScope, options) {
    super(url, options);
    /**
     * @type {angular.IScope}
     * @private
     */
    this.rootScope_ = $rootScope;
  }


  /**
   * @override
   * @export
   */
  toggle3d() {
    // The transition is asynchronous and at the end of it the state of OLCesium is changed.
    // In order to have all code dependent on OLCesium state updated, we kick an Angular digest cycle.
    const promise = super.toggle3d();
    return /** @type {Promise<undefined>} */(promise.then(() => {
      this.rootScope_.$apply();
    }));
  }
}


export default Manager;
