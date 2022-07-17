/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 排序+双指针
var threeSum = function(nums) {
    const len = nums.length;
    if (len < 3) return [];

    sNums = nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < len; i ++) {
        let l = i + 1;
        let r = len - 1;
        if (i > 0 && sNums[i] === sNums[i - 1]) continue;

        while(l < r) {
            const sum = sNums[l] + sNums[r] + sNums[i]; 
            if (sum === 0) {
                res.push([sNums[i], sNums[l], sNums[r]]);
                while(l < r && sNums[l] === sNums[l + 1]) {
                    l ++;
                }
                while(l < r && sNums[r] === sNums[r - 1]) {
                    r --;
                }
                r --;
                l ++;
            } 
            if (sum > 0) r --;
            if (sum < 0) l ++;
        }
    }

    return res;
};

// threeSum([-1,0,1,2,-1,-4]);
// @lc code=end

