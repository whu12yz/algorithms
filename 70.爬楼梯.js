/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    dp = [];
    for (let i = 1; i <= n; i ++) {
        if (i === 1 || i === 2) {
            dp[i] = i; 
            continue;
        } 
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};


// @lc code=end

