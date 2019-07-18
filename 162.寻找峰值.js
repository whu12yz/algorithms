/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

    nums.unshift(-Infinity);
    nums.push(-Infinity);

    for (let i = 1; i < nums.length - 1; i ++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i - 1;
        }
    }
};

// O(logN)
findPeakElement = function(nums) {
    let l = 0
    let r = nums.length - 1;
    while(l < r) {
        mid = Math.floor((l + r) / 2);
        if (nums[mid] <= nums[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
}

