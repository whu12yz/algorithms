function mergeSort(arr) {
  if(arr.length <= 1) return arr
  const middleIndex = Math.floor(arr.length/2)
  const left = arr.slice(0, middleIndex)
  const right = arr.slice(middleIndex)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let temp = []
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      temp.push(left.shift())
    }else {
      temp.push(right.shift())
    }
  }
  return temp.concat(left, right)
}

/**
 * example
 */
mergeSort([119,32,1,5,7,23,23,545,53,6445,3,3])