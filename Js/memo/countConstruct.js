// write a function Cont Contruct with target and wordbank that accepts a target string and an array of strings
// the function should return the number of ways that the target can be contructed by concatenatin elements of the wordbank array
// you may reuse elements of wordbank as many time as needed

const countConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if(target === '' ) return 1
    
    let totalCount = 0;
    
    for(let word of wordBank){
      if(target.indexOf(word) === 0 ){
        const numWaysForRest = countConstruct( target.slice(word.length), wordBank, memo)
        totalCount += numWaysForRest;
      }
    }
      memo[target] = totalCount
     return totalCount 
  }
  
  countConstruct("abcdef",["ab","abc","cd","def","abcd"])
  countConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"])
  countConstruct("eeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"])