inheritjs
==========

Simple Inheritance Module

### Usage
<pre>
  <code>
  function Parent() {}
  Parent.prototype.parentMethod = function () { console.log('parent method!'); };
  
  function Child () {
    Parent.prototype.constructor.call(this);
  }
  // setup inheritance before adding child prototype methods
  inherit(Parent, Child);
  
  Child.prototype.childMethod = function () { console.log('child method!'); };
  
  var child = new Child();
  child.childMethod();  // child method!
  child.parentMethod(); // parent method!
  </code>
</pre>
