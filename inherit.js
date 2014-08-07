// @preserve inheritjs, copyright Matthew Parke 2014, license https://github.com/mparke/eventsjs/blob/master/LICENSE
(function (window) {
  
  function inherit () {
    function Proxy () {
      this.constructor = Child.constructor;
    };

    Proxy.prototype = Parent.prototype;
    Child.prototype = new Proxy();
    return Child;
  }

  if (typeof module === 'object') {
    define(function () { return inherit; });
  } else if (typeof define === 'function') {
    module.exports = inherit;
  } else {
    window.inherit = inherit;
  }
})(window);
