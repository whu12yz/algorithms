/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const mid = searchImpl(nums, 0, nums.length - 1, target);
    if (mid === -1) {
        return [-1, -1];
    }
    let i = mid - 1;
    let j = mid + 1;
    while(nums[i] === target) {
       i--; 
    }
    while(nums[j] === target) {
        j++;
    }
    return [++i, --j];
};
// 二分查找
function searchImpl(nums, low, high, target) {
    const mid = Math.floor((low + high) / 2);
    if (low > high) {
        return -1;
    }
    if (target === nums[mid]) {
        return mid;
    }
    if (target < nums[mid]) {
        return searchImpl(nums, low, mid - 1, target);
    } else {
        return searchImpl(nums, mid + 1, high, target);
    }
}

console.log(searchRange([6, 6, 6, 6], 6));