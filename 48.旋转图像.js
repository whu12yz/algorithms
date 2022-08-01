/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 先对角线翻转再水平翻转
var rotate = function(matrix) {

    // 对角线翻转
    for (let i = 0; i < matrix.length; i ++) {
        for (let j = 0; j < i; j ++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // 水平翻转
    for (let i = 0; i < matrix.length; i ++) {
        for (let j = 0; j < matrix.length / 2; j ++) {
            [matrix[i][j], matrix[i][matrix.length - 1 - j]] = [matrix[i][matrix.length - 1 - j], matrix[i][j]]
        }
    }
};
// @lc code=end

