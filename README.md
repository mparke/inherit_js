inheritjs
==========

Simple Inheritance Module

### Usage
<pre>
  <code>
  function Parent() {}
  Parent.prototype.parentMethod = function () { console.log('parent method!'); };
  
  function Child () {}
  Child.prototype.childMethod = function () { console.log('child method!'); };
  
  inherit(Parent, Child);
  
  var child = new Child();
  child.childMethod();  // child method!
  child.parentMethod(); // parent method!
  </code>
</pre>
