// gridtraveler memoization

const gridTraveler = (m, n, memo = {}) => {
  
    const key = m + ',' + n;
    
    // are the args in the memo
    if( key in memo ) return memo[key]
    
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
  }
  
  gridTraveler(1,1)
  gridTraveler(2,5)
  gridTraveler(18,18)