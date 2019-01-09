var Stack = function() {

  var someInstance = {};

  someInstance.storage = {};
  someInstance.indexs = 0; 


  objects(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

var objects = function(someInstance, stackMethods) {
  _.extend(someInstance, stackMethods);
};

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





