/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     const len = nums.length;
//     for (i = 0; i < len; i++) {
//         for (j = i + 1; j < len; j++) {
//             if ((nums[i] + nums[j]) === target) {
//                 return [i, j];
//             }
//         }
//     }
// };
// hashtable解法
var twoSum = function(nums, target) {
    const hash = {};
    for (i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (hash[target - n] === undefined) {
            hash[n] = i;
            continue;
        }
        return [i, hash[target - n]];
    }
};
// @lc code=end

