function bubleSort(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        for (let j = 0; j < arr.length - 1 - i; j ++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j+1];
                arr[j + 1] = arr[j]; 
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectSort(arr) {
    let len = arr.length;
    let temp;
    let minIndex;
    for (let i = 0; i < len; i ++) {
        minIndex = i;
        for (let j = i + 1; j < len; j ++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function insertSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i ++) {
        let j = i;
        while (j > 0) {
            if (arr[j] >= arr[j - 1]) {
                break;
            }
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j --;
        }
    }
    return arr;
}

function merge(left, right) {
    let newArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            newArr.push(left.shift());
        } else {
            newArr.push(right.shift());
        }
    }
    return newArr.concat(left, right);
}
function mergeSort(arr) {
    let len = arr.length;
    if (len <= 1) return arr;

    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}



// 快速排序
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}
function quickSort(arr, left = 0, right) {
    let len = arr.length;
    right = typeof right === 'number' ? right : len - 1;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i ++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index ++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}


// 计数排序
function countingSort(arr, maxValue) {
    let bucket = new Array(maxValue + 1);
    for (let i = 0; i < arr.length; i ++) {
        bucket[arr[i]] ? bucket[arr[i]] ++ : (bucket[arr[i]] = 1);
    }

    let pos = 0;
    for (let j = 0; j < bucket.length; j++) {
        while(bucket[j] > 0) {
            arr[pos++] = j;
            bucket[j] --;
        }
    }
    return arr;
}


// 基数排序
/**
 * 
 * @param {*} arr 
 * @param {*} maxRadix 最大数字位数 
 */
function radixSort(arr, maxRadix) {
    let counter = [];
    let mod = 10;
    let divisor = 1;
    for (let i = 0; i < maxRadix; i ++, divisor *= 10, mod *= 10) {
        for (let j = 0; j < arr.length; j ++) {
            let val = parseInt(arr[j] % mod / divisor); // 0-9
            if (!counter[val]) {
                counter[val] = [];
            }
            counter[val].push(arr[j]);
        }
        let pos = 0;
        for (let p = 0; p < counter.length; p ++) {
            while(counter[p] && counter[p].length) {
                arr[pos++] = counter[p].shift();
            }
        }
    }
    return arr;
}

// 堆排序

let len;
function buildMaxHeap(arr) {
    len = arr.length;
    for (let i = Math.floor(len / 2); i >=0; i -- ) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {
    var left = 2*i + 1;
    var right = 2*i + 2;
    var largest = i;
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}
function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = len - 1; i>=0; i--) {
        swap(arr, i, 0);
        len--;
        heapify(arr, 0);
    }
    return;
}

var a = heapSort([9, 8, 7, 6, 5, 3434, 234, 78])
console.log(a);
