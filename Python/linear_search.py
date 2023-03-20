
# Linear Time O(1)
# counting one by one
# the best case runtime on binary search

# Logarithmic Runtime will be dividing the linear Time
# the wors case of runtime will be O(log n)

def linear_search(list, target):
  """
  Return the index position of tghe target if found, else returns None
  """
  # len list es a constan time operation
  for i in range(0, len(list)):
    if list[i] == target: 
      return i
  return None
  

def verify(index):
  if index is not None:
    print("target found at index: ", index)
  else:
    print("Target not found in list")
    

numbers = list(range(0,10))
# print(numbers)

result = linear_search(numbers, 12)
verify(result)
result2 = linear_search(numbers, 9)
verify(result2)

  