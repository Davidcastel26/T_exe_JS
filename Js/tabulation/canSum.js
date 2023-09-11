const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false)
    
    table[0] = true
    for(let i = 0; i <= targetSum; i++ ){
      if(table[i] === true){
        for(let num of numbers){
          table[i + num] = true;
        }
      }
    }
    console.log(table)
    return table[targetSum]
  }
  
  canSum(7,[5,3,4,7])