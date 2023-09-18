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
  
  export const reverseList = (head, prev = null) => {
    if(head === null) return prev
    const next = head.next
    head.next = prev;
    return reverseList(next, head)
  }
  
  
  reverseList()
  