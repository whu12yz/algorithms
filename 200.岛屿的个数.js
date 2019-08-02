/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿的个数
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    grid.forEach((value, i) => {
        value.forEach((value, j) => {
            if (value === 1) {
                grid[i][j]
            }
        })
    })
};

