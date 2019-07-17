/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
var findMin = function(nums) {
    if (! nums.length) return 0;
    let result = nums[0];
    nums.reduce((prev, next) => {
        if (next < prev) {
            result = next;
        }
        return next;
    })
    return result;
    
};
// 二分查找O(logN)
var findMin = function(nums) {
    if (nums === null || !nums.length) return 0;
    const search = function(start, end) {
        if ((end - start) <= 1) {
            return Math.min(nums[start], nums[end]);
        }
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] < nums[end]) {
            return search(start, mid);
        }
        return search(mid, end);
    }
    return search(0, nums.length - 1);
}


