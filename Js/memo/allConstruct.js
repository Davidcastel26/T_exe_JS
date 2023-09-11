// write a function `allConsttruct(target, wordBank)` that accepts a target string and an array of strings
// the function should return a 2D array containing all of the ways that the target can be constructed by concatenating elements of the wordbank array. Each element of the 2D array should represent one combination that constructs the target

const allConstruct = (target, wordBank ) => {
  
    if(target === '') return [[]];
    
    const result = []
    
    for(let word of wordBank){
      if(target.indexOf(word) === 0){
        const suffix = target.slice(word.length)
        const suffixWays = allConstruct(suffix, wordBank)
        const targetWays = suffixWays.map( way => [word, ...way]);
        
        result.push(...targetWays)
      }
    }
    
    return result
  }
  
    allConstruct("abcdef",["ab","abc","cd","def","abcd"])
    allConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"])
    allConstruct("eeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"])