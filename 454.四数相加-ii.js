/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let count = 0;
    const map = {};
    for (let a of A) {
        for (let b of B) {
            map[a + b] = a + b;
        }
    }
    for (let c of C) {
        for (let d of D) {
            const val = c + d;
            if (map[-val]) {
                count ++;
            }
        }
    }
    return count;
};
// @lc code=end

