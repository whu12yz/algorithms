/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// public int uniquePathsWithObstacles(int[][] obstacleGrid) {
//     // 动态规划问题，以 62 号问题为基础
//     int n = obstacleGrid.length;
//     int m = obstacleGrid[0].length;
//     // memo 用于存储到达该位置的路径总数
//     int[][] memo = new int[n][m];
//     for (int i = 0; i < m; i++) {
//         if (obstacleGrid[0][i] == 1) {
//             break;
//         }
//         memo[0][i] = 1;
//     }
//     for (int i = 0; i < n; i++) {
//         if (obstacleGrid[i][0] == 1) {
//             break;
//         }
//         memo[i][0] = 1;
//     }
//     for (int i = 1; i < n; i++) {
//         for (int j = 1; j < m; j++) {
//             if (obstacleGrid[i][j] == 0) {
//                 memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
//             }
//         }
//     }
//     return memo[n - 1][m - 1];
// }

var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    // if (n === 1) {
    //     for(let i = 0; i < m; i++) {
    //         if (obstacleGrid[i][0] === 1) {
    //             return 0;
    //         }
    //     }
    // }
    // if (m === 1) {
    //     for(let i = 0; i < n; i++) {
    //         if (obstacleGrid[0][i] === 1) {
    //             return 0;
    //         }
    //     }
    // }
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 1) {
            break;
        } 
        obstacleGrid[0][i] = 1;
    }

    for (let j = 1; j < m; j++) {
        if (obstacleGrid[j][0] === 1) {
            break;
        }
        obstacleGrid[j][0] = 1;
    }

    for (let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            if (obstacleGrid[j][i] === 1) {
                obstacleGrid[j][i] = 0;
            } else {
                obstacleGrid[j][i] = obstacleGrid[j][i-1] + obstacleGrid[j - 1][i];
            }
        }
    }

    return obstacleGrid[m - 1][n - 1] || 0;
};

// console.log(uniquePathsWithObstacles([[0,1,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]));
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
console.log(uniquePathsWithObstacles([[0, 1]]));
