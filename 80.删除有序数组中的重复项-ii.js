/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;
    let slow = 2;
    let fast = 2;
    
    while (fast < nums.length) {
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow++] = nums[fast];
        }
        fast ++;
    }
    return slow;
};
// removeDuplicates([0,0,1,1,1,1,2,3,3]);
// @lc code=end

