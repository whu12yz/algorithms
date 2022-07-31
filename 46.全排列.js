/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 决策树的遍历过程 
 * 回溯三要素：路径、可选列表、结束条件 
 */
var permute = function(nums) {
    let res = [];
    let tmp = [];

    backtracking(res, tmp, nums);

    function backtracking(res, tmp, nums) {
        if (!nums.length) res.push([].concat(tmp));

        for (let i = 0; i < nums.length; i ++) {
            const tmpnums = [].concat(nums);
            tmpnums.splice(i, 1);
            tmp.push(nums[i]);
            backtracking(res, tmp, tmpnums)
            tmp.pop();
        }
    }

    return res;
};
// @lc code=end

