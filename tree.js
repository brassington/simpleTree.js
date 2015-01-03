// A simple tree data structure example

// How to use:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2); --> 'true'

var treeMaker = function (value) {
  var product = Object.create(treeMaker.methods);
  product.children = [];
  product.value = value || null;
  return product;
};

//methods go here!

treeMaker.methods = {};

treeMaker.methods.addChild = function(value) {
  var node = treeMaker(value);
  this.children.push(node);
  return node;
};

treeMaker.methods.contains = function(value) {
  var result = false;
  var subroutine = function(node) {
    node.children.forEach(function(element) {
      if (element.value === value) result = true;
      if (element.children.length > 0) subroutine(element);
    });
  };
  subroutine(this);
  return result;
};
