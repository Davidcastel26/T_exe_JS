//compra y venta de acciones
function MaxValue(shares){
    //you code here:
    let maximo = shares[1] - shares[0]
    let minimo = shares[0]

    for(let x=1; x<shares.length; x++){
        let ganancialPotencial = shares[x] - minimo
        maximo = Math.max(maximo, ganancialPotencial)
        minimo = Math.min(minimo, shares[x])
    }
    return maximo;
}
/*

APROXIMACION
si viene vacio el arr tira error
recorrer los valores para encontrar el minimo
verificar que es el menor de todos
recorrer para encontrar el mayor
-partir el arreglo desde el meno valor
guardar la ganacia maxima posible en cada paso
guardar la ganancia maxima posible en cada paso

//compra y venta de acciones
function MaxValue(shares){
    //you code here:
    var maximo = shares[1] - shares[0]

    for(let x=1; x< shares.length; x++){
        for(let j=x+1; j< shares.length; j++){
            let ganancialPotencial = shares[j] - shares[x]
            maximo = ganancialPotencial > maximo ? ganancialPotencial : maximo
        }
    }
    return maximo
}


*/
//[4,15,2,5,9,5,5]