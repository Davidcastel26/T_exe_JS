// Linear Search Algorithm in JS

function linear_search(array, target){
  for(let i in array){
    if(array[i] == target) return i
  }
  return -1
}

function verify(index){
  if(index ==  -1 ){
    console.log("Target found at index: ", index);
  }else{
    console.log("Target NOT found")
  }
}

let number = [1,2,3,4,5,6,7,8,9,10]

const result = linear_search(number, 5)

verify(result)