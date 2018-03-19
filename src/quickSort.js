function quickSort(arr) {
  if(arr.length <= 1) return arr
  const middleIndex = Math.floor(arr.length/2)
  //防止当取到的中间值为数组最小值时造成死循环
  const middleValue = arr.splice(middleIndex, 1)[0]
  let left = []
  let right = []
  arr.forEach((value) => {
    if(value >= middleValue) return right.push(value)
    left.push(value)
  })
  return quickSort(left).concat(middleValue, quickSort(right))
}

console.log(quickSort([1,9,3,2,90,5,13]))