const canConstruct = (target, wordBank) => {
  
    const table = Array(target.length + 1).fill(false)
    table[0] = true
    
    for(let i =0 ; i <= target.length; i++){  //m iterations
      if(table[i] === true){
        for(let word of wordBank){            //n iterations
          // if the word matches the characters starting at position i
          if(target.slice(i, i + word.length) === word){ //m iteration
            table[i + word.length] = true
          }
        }
      }
    }
    return table[target.length]
  }
  
  // 0(m^2.n)
  
  canConstruct('abcdef', ['ab','abc','cd','def','abcd'])