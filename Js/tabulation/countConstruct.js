const countConstruct = (target, wordBank) => {

    const table = Array(target.length + 1).fill(0)
    
    table[0] = 1;
    
    for(let i = 0; i<= target.length; i++ ){
      for(let word of wordBank){
        if(target.slice(i, i + word.length) === word){
          table[i + word.length] += table[i]
        }
      }
    }
    return table[target.length]
  }
  
  // m= target             0(m^2.n) time
  // n - wordBank.lenght   0(m) space
  
  
  countConstruct('abcdef', ['ab','abc','cd','def','abcd'])
  countConstruct('purple', ['purp','p','ur','le','purpl'])