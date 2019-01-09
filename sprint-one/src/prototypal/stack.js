var Stack = function() {
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.indexs = 0; 


  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.indexs++] = value;
};

stackMethods.pop = function() {
  this.indexs--;
  var numba1 = this.storage[this.indexs];
  delete this.storage[this.indexs];
  return numba1;
};

stackMethods.size = function() {
  if (this.indexs < 0) { return 0; }
  return this.indexs;
};






