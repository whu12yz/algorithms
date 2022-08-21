/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 基数排序
var sortColors = function(nums) {
    const counter = [];
    for (let i = 0; i < nums.length; i ++) {
        counter[nums[i]] ? counter[nums[i]] ++ : counter[nums[i]] = 1;
    }
    let pos = 0;
    for (let j = 0; j < counter.length; j ++) {
        while (counter[j] > 0) {
            nums[pos++] = j;
            counter[j] --;
        }
    }
    return nums;
};
// @lc code=end

