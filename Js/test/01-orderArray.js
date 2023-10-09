// order an array of numbers and retrived the las two from it 
const numbers = [14,56,25,78,42];
// guardar en variable legth 
const num = numbers.length;

//hacer un ciclo para iterar y saber el valor de los indeces
for(let i = 0; i < num; i++ ){
  // console.log(i)
  // hacer una comparacion el current index con el next index 
  if( numbers[i] > numbers[i + 1]){
    // vamos a retornar la nueva posicion
    let current = numbers[i]
    // hacer el nuevo next index
    numbers[i] = numbers[i + 1]
    numbers[ i + 1 ] = current ;
  }
}

console.log(numbers)