// @preserve inheritjs, copyright Matthew Parke 2014, license https://github.com/mparke/eventsjs/blob/master/LICENSE
(function (window) {
  /**
  *  Chains prototypes between the given parent and child constructors
  *  @param {function} the parent constructor
  *  @param {function} the child constructor
  *  @return {function} the child constructor
  */
  function inherit (Parent, Child) {
    function Proxy () {
      this.constructor = Child;
    };

    Proxy.prototype = Parent.prototype;
    Child.prototype = new Proxy();
    return Child;
  }

  if (typeof module === 'object') {
    module.exports = inherit;
  } else if (typeof define === 'function') {
    define(function () { return inherit; });
  } else {
    window.inherit = inherit;
  }
})(window);
