/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     nums.sort((a, b) => a - b);
//     const res = [];
//     const tmp = [];

//     function backtracking(res, tmp, nums) {
//         res.push([].concat(tmp));
//         if (!nums.length) {
//             return;
//         }
//         for (let i = 0; i < nums.length; i++) {
//             tmp.push(nums[i]);
//             backtracking(res, tmp, nums.slice(i + 1));
//             tmp.pop();
//         }
//     }

//     backtracking(res, tmp, nums);
//     return res;
// };

// 不做slice操作，节约空间
var subsets = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    const tmp = [];

    function backtracking(res, tmp, nums, j) {
        res.push([].concat(tmp));
        if (j === nums.length) {
            return;
        }
        for (let i = j; i < nums.length; i++) {
            tmp.push(nums[i]);
            backtracking(res, tmp, nums, i + 1);
            tmp.pop();
        }
    }

    backtracking(res, tmp, nums, 0);
    return res;
};
// @lc code=end

