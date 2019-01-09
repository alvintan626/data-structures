var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  var last = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index++] = value;

  };

  someInstance.dequeue = function() {
    
    var result =  storage[last];
    delete storage[last];
    last++;
    return result;

  };

  someInstance.size = function() {
    if (index - last <0){return 0;}
    return index - last;
  };

  return someInstance;
};
