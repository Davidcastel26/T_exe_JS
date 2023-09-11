const fib = ( n ) => {
    const table = Array( n + 1 ).fill(0)
  
    table[1] = 1
    
    for(let i = 0; i <= n; i++){
      table[i + 1] += table[i]
      table[i + 2] += table[i]
    }
    
    return table[n]
  }
  
  fib(6)
  fib(7)
  fib(8)
  fib(68)