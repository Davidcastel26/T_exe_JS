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
    if(head === null) return null;
    if(index === 0) return head.val;
    
    return getNodeValue(head.next, index -1 )
  }
  
  
  getNodeValue(a,2)