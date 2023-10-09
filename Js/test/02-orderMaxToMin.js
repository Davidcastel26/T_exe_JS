const numbers = [14, 56, 25, 78, 42];
const n = numbers.length;

// hacer un ciclo dentro de ese array 
for(let i = 0; i < n - 1; i++){
  // tenes que guardar el index 
  let maxIndex = i;
  
  // encontrar el index con el mayor valor
  // i + 1 para sumar el index del array
  for(let j = i + 1; j < n; j++){
    //verificar si index J es mayor al maxIndex
    if( numbers[j] > numbers[maxIndex] ){
    // aqui solo tenemos que asignar el nuevo valor de maxindex que seria j
    // es j ya que es el que se esta iterando y comparando con i
    maxIndex = j;
    }
  }
  
  //hacer el cambio de posicion en el array
  //hacerlo solo si maxindex no es el current index
  if( maxIndex !== i ){
    //guardar el valor de i en una variable
    const currentIndex = numbers[i];
    //hacer el intercambio de posiciones
    numbers[i] = numbers[maxIndex]
    // asignarle el valore de maxIndex como el current index
    numbers[maxIndex] = currentIndex
  }
  
  // console.log(numbers[i])
}

console.log(numbers);
