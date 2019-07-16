/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (!nums.length) return 0;
    let max = nums[0];
    let min = nums[0];
    let result = max;
    for (let i = 1; i < nums.length; i ++) {
        let temp = max;
        max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
        min = Math.min(Math.min(temp * nums[i], min * nums[i]), nums[i]);
        if (max > result) {
            result = max;
        }
    }
    return result;
};

