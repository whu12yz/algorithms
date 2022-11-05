/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    while(i >= 0 && nums[i] >= nums[i + 1]) {
        i --;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        while(j > i && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i + 1, nums.length - 1);
};

function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function reverse(nums, i, j) {
    while (i >=0 && j >=0 && i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}
// @lc code=end

