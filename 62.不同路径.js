/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dpTable = Array(m+1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i ++) {
        for (let j = 1; j <= n; j ++) {
            if (i == 1 && j == 1) {
                dpTable[i][j] = 1; 
                continue;
            }
            dpTable[i][j] = dpTable[i-1][j] + dpTable[i][j - 1];
        }
    }
    return dpTable[m][n];
    
};
// @lc code=end

