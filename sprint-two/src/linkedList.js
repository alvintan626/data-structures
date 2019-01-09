var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    if (list.head === null){
      list.head = Node(value)
      list.tail = list.head;
    } else {
      var newNode = Node(value)
      list.tail.next = newNode;
      list.tail = newNode;
    }
    
  };

  list.removeHead = function() {
    var nextHead = list.head.next;
    var formerHeadValue = list.head.value;
    delete list.head;
    list.head = nextHead;
    return formerHeadValue;

  };

  list.contains = function(target) {
    var traverse = function(node){
      if (node.value === target){
        return true
      }
      if (node.next === null){
        return false;
      }
      return traverse(node.next)
    }
     
     return traverse(list.head)
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
