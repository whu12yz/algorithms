/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 双指针
var threeSumClosest = function(nums, target) {
    const len = nums.length;

    const sNums = nums.sort((a, b) => a - b);
    let output = sNums[0] + sNums[1] + sNums[2];

    for (let i = 0; i < len; i ++) {
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const sum = sNums[i] + sNums[l] + sNums[r];
            const n = sum - target

            if (n === 0)  return sum;
            if (Math.abs(n) < Math.abs(target - output)) output = sum;

            if (n > 0) {
                r --;
            }
            if (n < 0) {
                l ++;
            }
        }
    }
    return output;
};

// threeSumClosest([-1,2,1,-4], 1)
// @lc code=end

