/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    const temp = [];
    
    function backtracking(res, temp, nums, j) {
        res.push([].concat(temp));
        if (j === nums.length) return;
        for (let i = j; i < nums.length; i++) {
            if (i > j && nums[i] === nums[i - 1]) continue;
            backtracking(res, [...temp, nums[i]], nums, i + 1);
        }
    }

    backtracking(res, temp, nums, 0);
    return res;
};
// @lc code=end

