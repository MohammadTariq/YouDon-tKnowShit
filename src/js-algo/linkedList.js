//contructor for creating linkedList head and tail
function LinkedList(){
    this.head = null;
    this.tail = null;
}

//constructor for creating the node
function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

var ll1 = new LinkedList();
console.log(ll1);

var node1 = new Node(100, "node2", null);
console.log(node1);

LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    if (this.head){
        this.head.prev = newNode;
    }
    else {
        this.tail = newNode;
    }
    this.head = newNode;
}

ll1.addToHead(200);

LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);
    if (this.tail){
        this.tail.next = newNode;
    }
    else {
        this.head = newNode;
    }
    this.tail = newNode;
}

var ll2 = new LinkedList();
ll2.addToTail(100);

LinkedList.prototype.removeHead = function(){
    if (!this.head){
        return null;
    }
    var headVal = this.head.value;
    this.head = this.head.next;
    if (this.head){
        this.head.prev = null;
    }
    else {
        this.tail = null;
    }
    return headVal;
}

LinkedList.prototype.removeTail = function(){
    if (!this.tail){return null;}
    var valTail = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail){this.tail.next = null;}
    else {this.head = null;}
    return valTail;
}

LinkedList.prototype.searchLL = function(searchVal){
    var currentNode = this.head;
    while(currentNode){
        if (currentNode.value === searchVal){return currentNode.value;}
        currentNode = currentNode.next;
    }
    return null;
}

LinkedList.prototype.indexOf = function(searchVal){
    var arr = [];
    var currentNode = this.head;
    while(currentNode){
        arr.push(currentNode.value);
        currentNode = currentNode.next;          
    }
    if (arr.indexOf(searchVal) !== -1){
        return arr.indexOf(searchVal);
    }
    else {
        return null;
    }
    return null;
}


