/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let result = false;
    if(target > nums[0]) {
        for (let i = 0; i < nums.length; i++) {
            if (target === nums[i]) {
                result = true;
                break;
            }
            if (nums[i] < nums[i - 1]) {
                break;
            }
        }
    } else if (target === nums[0]) {
        result = true;
    } else {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (target === nums[i]) {
                result = true;
                break;
            }
            if (nums[i] < nums[i - 1] ) {
                break;
            }
        }
    }
    return result;
};

console.log(search([2,5,6,0,0,1,2], 0));