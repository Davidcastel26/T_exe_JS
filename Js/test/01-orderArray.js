// order an array of numbers and retrived the las two from it 
const numbers = [14,56,25,78,42];

for ( let i = 0; i < numbers.length; i++){

  if( numbers[i] > numbers[i + 1]){
    let temp = numbers[i];
    numbers[i] = numbers[i + 1];
    numbers[i + 1] = temp;
    i = -1;
  }
  
}

const [,,, ...ultimos] = numbers

console.log(numbers)
console.log(ultimos)