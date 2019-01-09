var Stack = function() {

  this.storage = {};
  this.indexs = 0; 

};


Stack.prototype.push = function(value) {
  this.storage[this.indexs++] = value;
};

Stack.prototype.pop = function() {
  this.indexs--;
  var numba1 = this.storage[this.indexs];
  delete this.storage[this.indexs];
  return numba1;
};

Stack.prototype.size = function() {
  if (this.indexs < 0) { return 0; }
  return this.indexs;
};


