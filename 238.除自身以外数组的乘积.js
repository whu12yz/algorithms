/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = [1];
    const right = [1];
    for (let i = 1; i < nums.length; i ++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    for (let j = nums.length - 2; j >= 0; j --) {
        right.unshift(nums[j + 1] * right[0]);
    }
    for (let m = 0; m < left.length; m ++) {
        left[m] = left[m] * right[m];
    }
    return left;
};
// @lc code=end

