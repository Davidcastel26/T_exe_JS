
function recursive_binary_search(list: array[], target){

  if( list.length == 0 ) return false;
  else{
    
    let midpoint = Math.floor(list.length / 2)
    
    
    if(list[midpoint] == target)return true;
    
    else{
    
      if(list[midpoint] < target){
        return recursive_binary_search(list[midpoint + 1], target)
      }
      else{
        // return recursive_binary_search(list.slice(0, midpoint), target)
        // return recursive_binary_search(list.slice(0, midpoint), target)
        console.log(Array.isArray(list))
      }
      
    }
    
  }
}

function verify(result){
  console.log("Target foun: " + result)
}

let numberss: array[numbers] = [1,2,3,4,5,6,7,8,9,10]
// let numbers = [...Array(10).keys()].slice(0)
// let midpoint = Math.floor(numbers.lenght / 2 )
// let midpoint = numbers.length / 2
// console.log(midpoint)
// console.log(numbers[midpoint])

// console.log(numbers)
let result = recursive_binary_search(numberss, 8)
let result2 = recursive_binary_search(numberss, 22)
// 
verify(result)
verify(result2)



