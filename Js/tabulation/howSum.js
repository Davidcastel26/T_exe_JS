const howSum = (targetSum, numbers) => {
    // to beging we need to create a table
    // this is an Array 
    const table = Array(targetSum + 1).fill(null)
    // populate index 0 with the empty array
    table[0] = []
    
    // iterate the table
    for(let i =0; i <= targetSum; i++){
      //current position is not null 
      if(table[i] !== null){
        // if it isnot null we can generate
        for( let num of numbers){
          // we need to look the number of positions ahead
          table[i + num] = [...table[i], num]
        }
      }
    }
    
    return table[targetSum]
  }
  
  
  
  howSum(7, [5,3,4])