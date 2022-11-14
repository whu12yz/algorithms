/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */
/**
 * f(n) = max(dp[i], max(i *(n-i), i*f(n-i)))  i属于(0, n)
 * f(2) = 1x1, k =[1, 1];
 * f(6)=3x3
 * f(7)=3x4
 * f(8) = 3x2x3
 * f(9) = 3x3x3
 * f(10) = 3x3x4
 */


// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = Array(n+1).fill(0);
    dp[2] = 1;
    for(let i = 3; i <= n; i ++) {
        for(let j = 1; j < i ; j ++) {
            dp[i] = Math.max(dp[i], Math.max(j * (i - j), j*dp[i-j]));
        }
    }
    return dp[n];
};
// @lc code=end

