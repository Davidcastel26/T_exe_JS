
function linear_search(arrai, target){
    // Return the index position of the target if found, else returns None
    let result = 0
    for( let i = 0; i < arrai.length; i++){
        if(arrai[i] == target ){
            result = i
        }else{
          reesult = null
        }
    }
  return result
}

function verify(index){
    if( index != null){
        console.log("Target found at index: ", index );
    }else{
        console.log("Target not found in the List")
    }   
}

let numbers = [1,2,3,4,5,6,7,8,9,10]

let result = linear_search(numbers, 12);
verify(result)

let result2 = linear_search(numbers, 8);
verify(result2)