/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    let low = 1, high = nums.length - 1;
    while (low <= high) {
        let mid = low + (high - low) * 0.5;
        let cnt = 0;
        for (let a of nums) {
            if (a <= mid) ++cnt;
        }
        if (cnt <= mid) low = mid + 1;
        else high = mid - 1;
    }
    return low;
};

