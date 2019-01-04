/**
 * @param {number[]} nums
 * @return {number[][]}
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

function next(nums, result) {
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
        result.push(JSON.parse(JSON.stringify(nums)));
        next(nums, result);
    }
    return result;
}

var permute = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const result = [];
    result.push(JSON.parse(JSON.stringify(nums)));
    return next(nums, result);
};

console.log(permute([1, 2, 3, 4]));