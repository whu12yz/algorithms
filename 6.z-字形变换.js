/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 二维矩阵解法, 简化矩阵，节省空间
var convert = function(s, numRows) {
    if (numRows === 1) return s;

    // 简化矩阵，节省空间
    const matrix = Array(numRows).fill('');
    let y = 0;
    let direction = 'bottom'; // 允许bottom及rightTop
    for (let i = 0; i< s.length; i++) {
        matrix[y] += s[i];
        // 触顶底改变方向
        if (y === numRows - 1) {
            direction = 'rightTop';
        }
        if (y === 0) {
            direction = 'bottom';
        }
        // 根据方向改值
        if (direction === 'bottom') {
            y ++;
        }
        if (direction === 'rightTop') {
            y --;
        }
    }

    return matrix.join('');

};

// convert('AB', 1)
// @lc code=end

