var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[index++] = value;
  };

  someInstance.pop = function() {

  
    index--;
    var numba1 = storage[index];
    delete storage[index];
    return numba1;



  };

  someInstance.size = function() {
    if (index < 0) { return 0; }
    return index;
  };

  return someInstance;
};
