def recursive_binary_search(list, target):
  if len(list) == 0: 
    return False
  else:
    midpoint = (len(list))//2
    
    if list[midpoint] == target:
      return True
    else:
      if list[midpoint] < target:
        return recursive_binary_search(list[midpoint+1:], target)
      else:
        return recursive_binary_search(list[:midpoint], target)

def virify(result):
  print("Target found: ", result)
  
numbers = list(range(1,10))

result = recursive_binary_search(numbers, 12)

virify(result)

result2 = recursive_binary_search(numbers, 9)
virify(result2)