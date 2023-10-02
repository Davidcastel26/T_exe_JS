let infoGiven = [43,55,76,72,98,54,]
let num = []

function orderList ( numbers ) {
  
  if( !numbers.length ) return null;
  // aqui tendremos que meter los numeros ordenados 
  const ordered = [];
  
  for(let i=0; i < numbers.length; i++){
    const head = numbers[0];
    console.log(head)
    if( head < numbers[i]){
      console.log(numbers[i])
      ordered.push(head)
    }else{
      // numbers[head] = numbers[i];
      // console.log(numbers[head])
    }
  }

  return ordered;
}

orderList(infoGiven)
// orderList(num)