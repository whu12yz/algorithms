/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function swap (nums, i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
    return nums;
}
function reverse(nums, i, j) {
    while(i < j) {
        nums = swap(nums, i, j);
        i++;
        j--
    }
    return nums;
}

let count = 1;
function next(nums, k) {
    let len = nums.length;
    let i;
    let cont = false;
    for (i = len - 1; i >= 0; i-- ) {
        if (nums[i] < nums[i+1]) {
            cont = true;
            break;
        }
    }
    if (cont) {
        let min = nums[i + 1];
        let minIdx = i + 1;
        for (let j = i + 1; j <= len - 1; j++) {
            if (nums[j] < min && nums[j] > nums[i]) {
                min = nums[j];
                minIdx = j;
            }
        }
        nums = reverse(nums, i, minIdx);
        nums = nums.slice(0, i + 1).concat(nums.slice(i + 1).sort((a, b) => a -b));
        if (k === count) {
            return nums.join('');
        }
        count++;
        return next(nums, k);
    }
    return nums.join('');
}

var permute = function(nums, k) {
    nums = nums.sort((a, b) => a - b);
    return next(nums, k);
};
var getPermutation = function(n, k) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    if (k === 1) {
        return result.join('');
    }
    return permute(result, k-1);
};

console.log(getPermutation(9, 24));