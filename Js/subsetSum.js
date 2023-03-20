
const subsetSum = (nums, n, i=0) =>{

    
if(target === 0 ) return ture
if(target < 0) return false
if(i > nums.length) return false

const excluido = subsetSum(nums, n, i+1)
const incluir = subsetSum(nums,n-nums[i], i+1)



}


/**
 * aproximacion
 * recorrer el arreglo preguntando si ya encontre el target
 * variable acomuladora para ver si coincide con el target
 * restarle al target con lo que haya en el arr y sii da 0 es porque tengo suma
 * validacion matematicas, para considerar todos los casos
 */

/*

const arr = [1,2,3,4,5]

const func = (e) => e % 2 === 0

arr.some((e)=> e % 2 === 0)      -> true

-------------------------------------------
i=0

if(target === 0 ) return ture
if(target < 0) return false
if(i > nums.length) return false

const excluido = subsetSum(nums, n, i+1)
const incluir = subsetSum(nums,n-nums[i], i+1)



---------------------------------------
 const suma = new Set([0])

 return nums.some((num) => {
     const copiaSuma = [...suma]
     for (let sum of copiaSuma){
         let nueva = num + sum
         if(n === nueva) return true
         if(nueva < n) suma.add(nueva)
     }
 })


-----------------------------------------





*/