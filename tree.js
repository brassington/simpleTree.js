// A simple tree data structure example

// How to use:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2); --> 'true'

// The point of the tree structure is to organize data related to other data through nodes and their sub-nodes.
// Each node can have any number of values associated with that node, though here, there is only one value on each node.
// The addChild method creates a new node on the tree, and the contains method searches through the tree to find values that match.

var treeMaker = function (value) {
  var product = Object.create(treeMaker.methods);
  product.children = [];
  product.value = value || null;
  return product;
};

// Methods to be inherited by the maker function start here!

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
