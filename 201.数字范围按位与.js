/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 解题思路： 考虑m,n的不同的位数有多少，所以同时右移知道相等。
// 最后再将m向左移回相等长度，等到的结果即是，全部按位与的结果。
var rangeBitwiseAnd = function(m, n) {
    let count = 0;
    while (m != n) {
        m = m >> 1;
        n = n >> 1;
        ++count;
    }
    return m << count;
};
var c = rangeBitwiseAnd(3, 12)
