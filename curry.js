function curry(fn){

    return function seraparador(...args) { 
        if(args.length >= fn.length) return fn(...args)
        else return (...newArgs)=>seraparador(...args, ...newArgs)
    }

}

/**
 * Aproximacion
 * 
 -un lugar para argumentos acomulados
 -verificar cuantos arg tiene la fn, e ir comparando con los acumulados
 -separar los elemento del array
 -ir sacando 

return function sepparador(){
        //acumulador de argumentos
        var args= [].slice.call(arguments)
        //call -- arguments (local var)
        if(args.length >= fn.length){
            return fn.apply(null, args)
        }else {
            return function resolver(){
                return sepparador.apply(null, args.concat([].slice.call(arguments)))
            }
        }
    }





 */
