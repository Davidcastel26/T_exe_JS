function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  LinkedList.prototype.__addToHead__ = function(value) {
    var newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }
  
  LinkedList.prototype.__addToTail__ = function( value ){
    var newNode = new Node( value, null, this.tail );
    if( this.tail ) this.tail.next = newNode;
    else this.head = newNode;
    
    this.tail = newNode;
  }
  
  LinkedList.prototype.__removeHead__ = function(){
    if( !this.head ) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if(this.head) this.head.prev = null;
    else this.tail = null;
    return val
  }
  
  var myLL = new LinkedList();
  myLL.__addToHead__(1000);
  myLL.__addToHead__(2000);
  myLL.__addToTail__(3000);
  
  console.log(myLL.__removeHead__())