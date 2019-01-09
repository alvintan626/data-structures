var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree,treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
    this.children.push(Tree(value))
};

treeMethods.contains = function(target) {
    var traverse = function(tree){
        if (tree.value === target){
            return true;
        }
        var found = false;
        for (var i=0; i < tree.children.length; i++){
            found = traverse(tree.children[i]);
            if (found) {
                return true;
            }
        }
        return found;
    }

    return traverse(this);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
