module.exports = function (Parent, Child) {
  function Proxy () {
    this.constructor = Child.constructor;
  };

  Proxy.prototype = Parent.prototype;
  Child.prototype = new Proxy();
  return Child;
};
