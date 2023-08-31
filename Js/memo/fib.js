// memoization 
// js objcet, keys will be arg to fn, value will be return balue

const fib = ( n, memo = {}) => {
    
    if( n in memo )return memo[n]
    
    if(n <= 2 ) return 1;
    
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
  }
  
  fib(6)
  fib(7)
  fib(8)
  fib(50)