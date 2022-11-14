/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 状态转移方程 f[i][j] = {
 * min(f[i-1][j], f[i][j-1]) + grid[i - 1][j - 1], (i>1 && j>1)
 * f[i-1][j] + f[i][j-1] + grid[i - 1][j - 1] (i ===1 || j === 1)
 * }
 */

function minPathSum(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    
    for(let i = 1; i <= m; i ++) {
        for( let j = 1; j <=n; j ++) {
            if (i === 1 || j === 1) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + grid[i - 1][j - 1];
                continue;
            }
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }

    return dp[m][n];
};

// 利用grid原地做置换，节约空间
// function minPathSum(grid) {
//     const m = grid.length;
//     const n = grid[0].length;
//     for (let i = 0; i< m; i++) {
//         for (let j = 0; j < n; j ++) {
//             if (i === 0 && j === 0) continue;
//             if (i === 0) {
//                 grid[i][j] = grid[i][j - 1] + grid[i][j]
//             } else if (j === 0) {
//                 grid[i][j] = grid[i - 1][j] + grid[i][j]
//             } else {
//             grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
//             }
//         }
//     }
//     return grid[m-1][n-1];
// }

// minPathSum([[1,3,1],[1,5,1],[4,2,1]]);
// @lc code=end

