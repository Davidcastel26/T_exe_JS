function HasBalanceBrackets(string){
    //you code
    if(string.length%2 !== 0) return false
    const validos = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    let cajon = [] // solo vamos a guardar los de apertura

    for(let x =0; x < string.length; x++){
        if(validos[string[x]]){
            cajon.push(string[x])
        }else if(validos[cajon.pop()] !== string[x]){
            return false
        }
        // si hay algo = false
        // si no  algo = true
        return !cajon.length;
    }
}



/**
 * verificamos que empiece y cierre
 * que haya el mismo numero de aperturas y de cierre
 * si es impar que ya se que no tiene = false
 * contador para poder verificar si el brackt de cierre es el que tiene que cerrar y descontarlo
 * realizar un conjuto de aperturas y cierres guardadoes para poder comprobar 
 */