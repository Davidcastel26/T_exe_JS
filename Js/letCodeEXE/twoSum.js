var twoSum = function(target, nums) {
    
    // let table = Array(target)
    var table = {};
    
    for(let i = 0; i <= nums.length; i++){
      const n = nums[i]
      const k = target - n
      
      if( k in table){
          return [table[k], i]
      }
      table[n] = i;
    }
    
    return false
  };
  
  twoSum(9,[2,7,11,15])


// for(let i = 0; i <= target.length; i++){
  //   for(let n of nums){

  //   }
  // }
  // for(let i =0; i <= nums; i++){
  //   // console.log(i)
    
  //   return;
  // }
  // console.log('-----------AQUI ESTA EL FOR OF ----')
  //   for(let n of nums){
  //     // console.log(n)
  //     table = n
  //     console.log(table)
  //     // table.push(n)
  //     // console.log(table)
  //     var total = n + table
  //     console.log(total)
  //     if( total == target){
  //       return total
  //     }
  //   // }
  // }