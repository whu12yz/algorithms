/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    while(i <= j) {
        const area = (j - i) * Math.min(height[i], height[j]);
        max = Math.max(max, area);
        height[i] <= height[j] ? i ++ : j --;
    }
    return max;
};
// @lc code=end

