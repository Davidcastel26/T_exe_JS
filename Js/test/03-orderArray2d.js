// array de dos dimensiones ordenar los [[]] y lugego el array principal 
const array2d = [ [99,56], [55,25], [20,10] ];
// Ordena los subarrays en orden ascendente
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length - 1; j++) {
      for (let k = 0; k < array2d[i].length - j - 1; k++) {
        if (array2d[i][k] > array2d[i][k + 1]) {
          // Intercambia los elementos si están en el orden incorrecto
          const temp = array2d[i][k];
          array2d[i][k] = array2d[i][k + 1];
          array2d[i][k + 1] = temp;
        }
      }
    }
  }
  
  console.log(array2d)