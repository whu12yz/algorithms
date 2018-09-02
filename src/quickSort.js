// function quick(array, left, right) {
//   let index;
//   if (array.length > 1) {
//     index = partition(array, left, right);
//     if (left < index - 1) {
//       quick(array, left, index - 1);
//     }
//     if (index < right) {
//       quick(array, index, right);
//     }
//   }
//   return array;
// }

// function quickSort(array) {
//   return quick(array, 0, array.length - 1);
// };

// // 划分操作函数
// function partition(array, left, right) {
//   // 用index取中间值而非splice
//   const pivot = array[Math.floor((right + left) / 2)];
//   let i = left;
//   let j = right;

//   while (i <= j) {
//     while (compare(array[i], pivot) === -1) {
//       i++;
//     }
//     while (compare(array[j], pivot) === 1) {
//       j--;
//     }
//     if (i <= j) {
//       swap(array, i, j);
//       i++;
//       j--;
//     }
//   }
//   return i;
// }
// // 原地交换函数，而非用临时数组
// function swap(array, a, b) {
//   [array[a], array[b]] = [array[b], array[a]];
// }

// // 比较函数
// function compare(a, b) {
//   if (a === b) {
//     return 0;
//   }
//   return a < b ? -1 : 1;
// }









function quickSort(array) {
  console.log(array);
  return quick(array, 0, array.length - 1);
}

function quick(array, left, right) {
  if(array.length > 1) {
    const index = position(array, left, right);
    console.log(index);
    if(left < index -1) {
      quick(array, left, index-1);
    }
    if(right > index) {
      quick(array, index, right)
    }
  }
  return array
}

function position(array, left, right) {
  const pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while(i <= j) {
    while(compare(array[i], pivot) === -1) {
      i ++
    }
    while(compare(array[j], pivot) === 1) {
      j --
    }
    if(i <= j) {
      swap(array, i, j);
      i ++;
      j --;
    }
  }
  console.log(i);
  return i
}

function swap(array , i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

function compare(a, b) {
  if(a === b) {
    return 0
  }
  return a < b ? -1 : 1;
}

const a = quickSort([1234, 1, 5, 19, 5, 2, 9]);
console.log(a);