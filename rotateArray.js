function arrayRotateOne(arr, reverse){
  if(reverse)
    arr.unshift(arr.pop())
  else
    arr.push(arr.shift())
  return arr
} 
