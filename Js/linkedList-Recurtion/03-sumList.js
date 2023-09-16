const sumList = (head) => {
  
    if(head === null) return 0;
    head.val + sumList(head.next)
}