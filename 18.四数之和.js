/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 排序+双指针
var fourSum = function(nums, target) {
    const len = nums.length;

    const sNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < len; i ++) {
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const n = sNums[i] + sNums[l] + sNums[r];
            if (target - n < 0) {
                l ++;
            }
            if (target - n > 0) {
                r --;
            }
        }
    }
    
};
// @lc code=end

