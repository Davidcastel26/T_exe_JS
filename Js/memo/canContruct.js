//write a function `canContruct(target, wordBank` that accepts a target string and an array of strings
// the function should return a boolean indicating whether or not the `target` can be contructed by concatenating elements ßof the `wordBank` array.
// You may reuse elements of `wordbank` as many times as needed.


const canConstruct = ( target, wordbank, memo = {} ) => {
    if(target in memo) return memo[target]
    if(target === '') { return true }
  
    for(let word of wordbank){
      if(target.indexOf(word) === 0){
        const suffix = target.slice(word.length)
        if(canConstruct(suffix, wordbank, memo) === true ){
          memo[target] = true
          return true
        }
      }
    }
  
    memo[target]= false
    return false
}

canConstruct("abcdef",["ab","abc","cd","def","abcd"])
canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"])
canConstruct("eeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"])