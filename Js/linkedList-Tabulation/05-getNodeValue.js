class Node {
    constructor(val){
      this.val = val;
      this.next = null
    }
  }
  
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  
  a.next = b;
  b.next = c;
  
  export const getNodeValue = (head, index) => {
    
    let current = head;
    let count = 0;

    while (current !== null) {

        if(count === index) return current.val;
        count += 1;

        current = current.next;
    }
    return null
  }
  
  
  getNodeValue(a,2)