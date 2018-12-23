/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchImpl(nums, low, high, target) {
    const mid = Math.floor((low + high) / 2 );
    if(low > high) return -1;

    if(target === nums[mid]) {
        return mid;
    }
    if (nums[mid] < nums[high]) {
        if (target >= nums[mid] && target <= nums[high]) {
            return searchImpl(nums, mid + 1, high, target);
        } else {
            return searchImpl(nums, low, mid - 1, target);
        }
    } else {
        if (target >= nums[low] && target <= nums[mid]) {
            return searchImpl(nums, low, mid - 1, target);
        } else {
            return searchImpl(nums, mid + 1, high, target)
        }
    }
}
var search = function(nums, target) {
    return searchImpl(nums, 0, nums.length - 1, target);
};
