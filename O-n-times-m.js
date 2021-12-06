//comparing two strings 

function FindNeedle(haystack, needle){
  
    for(let x = 0; x<haystack.length; x++){
      if(haystack.slice(x, x+needle.length) === needle) return x;
    }
    return -1;  
}


/* 
aproximacion

-rcorrer el haystack
-recorrer tambien. el needle e ir comporando posicion a posicion
-ir contando las posicines (ver el indice)
-ver de implementar la comparacion en un arreglo, agregando ahi lo que conincida
-utilizacion del slice para comparar la palabra entera
-ver si el needle esta dentro del haystack


if(haystack.includes(needle)){
for(let x=0; x < haystack.length; x++ ){
      for(let i = 0; i < needle.length; i++){
        if(haystack[x+i]!== needle[i]) break
        if(i+1 === needle.length) return x
      }
    }
  
    // O(n*m)
    //FindNeedle('react-redux', "reducx")
    //x
    //react-redux
    //i
    //redux -- length 5
    
  }else{
    return -1
  }


*/


  
  
  