// write a function `bestSum(targetSum, numbers)` that takes in a target Sum and an array of numbers as arguments
// the function should return an array containing the shortest combination of numbers that add up to exactly the targetSum
// if there is a tie for the shortest combination, you may return any one of the shortest

const bestSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0 ) return [];
    if(targetSum < 0) return null;
    
    let shortestCombination = null;
    
    for(let num of numbers){
      const remainder = targetSum - num;
      const remainderCombination = bestSum(remainder, numbers, memo)
      if(remainderCombination !== null){
        const combination = [...remainderCombination, num]
        // check conbination is shorter than the current "shortest" update it
        if(shortestCombination === null || combination.length < shortestCombination.length){
          shortestCombination = combination
        }
      }
    }
    
    memo[targetSum] = shortestCombination
    return shortestCombination
  }
  
  
  //m = targetSum
  // n = numbers.length
  // brute. force
  // time : O(n^m * m)
  // space: 0(m^2)
  
  bestSum(7, [5,3,4,7])
  bestSum(8, [2,3,5])
  bestSum(120, [1,2,5,25])
  