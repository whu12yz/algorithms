/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let pre = 0;

    for (i = 0 ; i < nums.length; i ++) {
        pre = Math.max(nums[i], pre + nums[i]);
        res = Math.max(res, pre);
    }
    return res;
};
// @lc code=end

