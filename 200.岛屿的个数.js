/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿的个数
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
// 图结构， DFS实现
var numIslands = function(grid) {
    let count = 0;
    var dfs = function(grid, i, j) {
        if (grid[i] && grid[i][j] === '1') {
            grid[i][j] = '0';
            dfs(grid, i + 1, j);
            dfs(grid, i - 1, j);
            dfs(grid, i, j + 1);
            dfs(grid, i, j - 1);
        } 
    }

    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[0].length; j ++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j);
                count ++;
            }
        }
    }
    return count;
};

