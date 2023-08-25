// canSum

const canSum = (targetSum, numbers, memo = {}) => {
    //remember, number is something it wont change 
    // so we will need to use targetsum for our memo
    if(targetSum in memo) return memo[targetSum]
    
    if(targetSum === 0) return true;
    if(targetSum < 0) return false
    
    for(let num of numbers){
      
      const remainder = targetSum - num;
      
      if(canSum( remainder, numbers, memo) === true){
        memo[targetSum] = true;
        return true
      }
    }
    
    memo[targetSum] = false
    return false
  }
  
  canSum(7, [2,3])
  canSum(7, [5,3,4,7])
  canSum(7, [2,4])
  canSum(300, [7,14])