/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
function isNumber(value) {
    return typeof value === 'number';
}
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    function check(nums, start, end) {
        for (let i=start; i < end; i ++) {
            for (let j = i + 1; j <= end; j ++) {
                if (isNumber(nums[i]) && isNumber(nums[j]) && Math.abs(nums[i] - nums[j]) <= t) {
                    return true;
                }
            }
        }
        return false;
    }
    for (let i = 0; i < nums.length; i ++) {
        let end = i + k;
        if (check(nums, i , end)) {
            return true;
        }
    }
    return false;
};
containsNearbyAlmostDuplicate([2, 2], 3, 0);

