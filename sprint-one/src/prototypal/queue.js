var Queue = function() {
  var someInstance = Object.create(queueMethods);
	someInstance.storage = {};
	someInstance.indexs = 0;
	someInstance.last = 0;

    return someInstance;

};

var queueMethods = {};

  queueMethods.enqueue = function(value) {
  	this.storage[this.indexs++] = value;
  };

  queueMethods.dequeue = function() {
  	var result =  this.storage[this.last];
    delete this.storage[this.last];
    this.last++;
    return result;
  };

  queueMethods.size = function() {
 	 if (this.indexs - this.last < 0){return 0;}
    return this.indexs - this.last;
  };