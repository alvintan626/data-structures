class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.indexs = 0;
  	this.last = 0;
  }

  enqueue(value)  {
  	this.storage[this.indexs++] = value;
  };

  dequeue() {
  	var result =  this.storage[this.last];
    delete this.storage[this.last];
    this.last++;
    return result;
  };

  size() {
 	if (this.indexs - this.last < 0){return 0;}
    return this.indexs - this.last;
  };

}

	
