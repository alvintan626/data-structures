var Queue = function() {
  this.storage = {};
  this.indexs = 0;
  this.last = 0;

};

	
Queue.prototype.enqueue = function(value) {
  	this.storage[this.indexs++] = value;
};

Queue.prototype.dequeue = function() {
  	var result = this.storage[this.last];
  delete this.storage[this.last];
  this.last++;
  return result;
};

Queue.prototype.size = function() {
 	 if (this.indexs - this.last < 0) { return 0; }
  return this.indexs - this.last;
};