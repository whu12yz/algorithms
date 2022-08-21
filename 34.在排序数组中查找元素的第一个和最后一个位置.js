/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 二分查找
var searchRange = function(nums, target) {
    const len = nums.length;
    let l = 0;
    let r = len - 1;
    let mid = 0;

    while(l <= r) {
        mid = Math.floor((l + r) / 2);
        if (nums[mid] === target)  break;
        if (nums[mid] < target) {
            l = mid + 1;
        }
        if (nums[mid] > target) {
            r = mid - 1;
        }
    }
    if (nums[mid] === target) {
        let m = mid,
            n = mid;
        while (nums[m] === target) {
            m --;
        }
        while (nums[n] === target) {
            n ++;
        }
        return [m + 1, n - 1];
    }

    return [-1,  -1];

};
// searchRange([5,7,7,8,8,10], 6)
// @lc code=end

