var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var value = this._storage.get(index)
  if (value !== undefined){
    var dup = false;
    for (var i = 0; i < value.length; i++){
      if (value[i][0] === k){
        value[i][1] = v;
        dup = true;
        break;
      } 
    }
    if (!dup) {value.push([k,v])};
  } else {this._storage.set(index,[[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var value = this._storage.get(index);

  if (value===undefined) return;

  for(var i = 0 ; i < value.length; i++){
    if (value[i][0] === k){return value[i][1];} 
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, key, storage){
    if (key === index){
      delete storage[key];
    }
  })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


