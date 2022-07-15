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
var convert = function(s, numRows) {

    if (numRows === 1) return s;

    const matrix = Array(numRows).fill('');
    let x = 0;
    let direction = 'bottom'; // 允许bottom及rightTop
    for (let i = 0; i< s.length; i++) {
        matrix[x] += s[i];
        // 触顶改变方向
        if (x === numRows - 1) {
            direction = 'rightTop';
        }
        if (x === 0) {
            direction = 'bottom';
        }
        // 根据方向改值
        if (direction === 'bottom') {
            x ++;
        }
        if (direction === 'rightTop') {
            // y ++;
            x --;
        }
    }

    // 提取字符串
    // let str = ''; 
    // for (let m = 0; m < matrix.length; m++) {
    //     for (let n = 0; n < matrix[0].length; n++) {
    //         if (matrix[m][n]) str += matrix[m][n];
    //     }
    // }
    return matrix.join('');

};

// convert('AB', 1)
// @lc code=end

