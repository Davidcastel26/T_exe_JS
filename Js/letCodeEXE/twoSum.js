var twoSum1 = function(target, nums) {
    
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

  var twoSum2 = function(nums, target) {
    const hashmap={};
    for(let i=0;i<nums.length;i++){
        const num=nums[i];
        if(hashmap[target-num] !== undefined){
            return [hashmap[target-num],i];
        }
        hashmap[num]=i;
    }
};

var twoSum3 = function(nums, target) {
  let map = new Map()
  for(let i=0;i<nums.length;i++){
      let complement = target - nums[i];
      if(map.has(complement))
        return [map.get(complement),i]
    map.set(nums[i],i)
  } 
  
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