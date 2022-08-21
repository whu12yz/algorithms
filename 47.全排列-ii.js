/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let tmp = [];

    backtracking(res, tmp, nums);
    function backtracking(res, tmp, nums) {
        if (!nums.length) res.push([].concat(tmp));
        for (let i = 0; i < nums.length; i ++) {
            if (nums[i] === nums[i-1]) continue;
            tmp.push(nums[i]);
            const tmpnums = [].concat(nums);
            tmpnums.splice(i, 1);
            backtracking(res, tmp, tmpnums);
            tmp.pop()
        }

    }

    return res;
};
// @lc code=end

