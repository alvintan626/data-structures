var BinarySearchTree = function(value) {
    var tree = {};

    tree.value = value;

    tree.current = null;
    tree.left = null;
    tree.right = null;

    _.extend(tree,binary)
    return tree;
};

var binary = {};


binary.insert = function(value) {
    if (typeof value !== 'number') {        // for my own test
        console.log('only numbers dude'); 
        return 'lollipop';
    }
    var traverse = function(tree){
        if (value > tree.value){
            if (tree.right === null){
                tree.right = BinarySearchTree(value);
                return;
            }
            else {return traverse(tree.right);}
        }
        if (value < tree.value){
            if (tree.left === null){
                tree.left = BinarySearchTree(value);
                return;
            }
            else {return traverse(tree.left);}
        }
    }

    return traverse(this);
};

binary.contains = function(value) {
    
// insert value
// want to return true or false if tree node contains the tree value node
    
    var traverse = function(tree){
        if (tree.value === value) return true;
        else if (value > tree.value){
            if (tree.right === null) return false;
            else if (tree.right.value === value) return true;
            else if (value > tree.right.value) return traverse(tree.right);
            else if (value < tree.right.value) return traverse(tree.left);
        }
        else if (value < tree.value){
            if (tree.left === null) return false;
            else if (tree.left.value === value) return true;
            else if (value > tree.left.value) return traverse(tree.right);
            else if (value < tree.left.value) return traverse(tree.left);
        }
        return false;
    }

    return traverse(this);

};
binary.depthFirstLog = function(cb) {

    var traverse = function(tree){
        cb(tree.value);
        if (tree.left === null && tree.right === null) return;
        if (tree.left !== null) traverse(tree.left);
        if (tree.right !== null) traverse(tree.right);
    }

    return traverse(this);
    
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
