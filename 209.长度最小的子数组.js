/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let l = 0;
    let r = 0;
    let sum = 0;
    let minLength = nums.length + 1;
    while(r <= nums.length) {
        if (sum < s) {
            sum += nums[r];
            r ++;
        } else {
            minLength = Math.min(minLength, r - l);
            sum -= nums[l];
            l ++;
        }
    }
    return minLength > nums.length ? 0 : minLength;
};

