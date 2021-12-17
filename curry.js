function curry(fn){

    return function sepparador(){
        //acumulador de argumentos
        var args= [].slice().call(arguments)
        //call -- arguments (local var)
        if(args.length >= fn.length){
            return fn.apply(null, args)
        }
    }

}

/**
 * Aproximacion
 * 
 -un lugar para argumentos acomulados
 -verificar cuantos arg tiene la fn, e ir comparando con los acumulados
 -separar los elemento del array
 -ir sacando 
 */
