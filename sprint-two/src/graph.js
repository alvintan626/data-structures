// Instantiate a new graph
var Graph = function() {
    this.nodes = {};
    this.edges = {};            // make to objects instead
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

    this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    if (this.nodes[node] === node){
        return true;
    }
    return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    for (var key in this.edges){
        if (Number(key.split("|")[0]) === node){
            delete this.edges[key];
        }
        else if (Number(key.split("|")[1]) === node){
            delete this.edges[key];
        }

    }   
    if (this.nodes[node]){
        delete this.nodes[node];
    } 

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    if (this.edges[fromNode + "|" + toNode]){
        return true;
    }
    return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.edges[fromNode + "|" + toNode] = [fromNode, toNode];
    this.edges[toNode + "|" + fromNode] = [toNode, fromNode];

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){    
    delete this.edges[fromNode + "|" + toNode];
    delete this.edges[toNode + "|" + fromNode];     
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    var callback = 5;
    for (var key in this.nodes)
    this.edges[this.nodes[key] + "|" + callback] = [this.nodes[key] , callback]
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


