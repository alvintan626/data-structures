class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.indexs = 0; 
  }

  push(value) {
    this.storage[this.indexs++] = value;
  }

  pop() {
    this.indexs--;
    var numba1 = this.storage[this.indexs];
    delete this.storage[this.indexs];
    return numba1;
  }

  size() {
    if (this.indexs < 0) { return 0; }
    return this.indexs;
  }

}