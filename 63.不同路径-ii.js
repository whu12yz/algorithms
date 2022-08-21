/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dpTable = Array(m+1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i ++) {
        for (let j = 1; j <= n; j ++) {
            // 障碍物判断前置，解决[[1]]场景
            if (obstacleGrid[i-1][j-1] === 1) {
                dpTable[i][j] = 0;
                continue;
            } 
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

