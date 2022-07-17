/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const map = {
        '1': ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        '10': ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        '100': ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        '1000': ['', 'M', 'MM', 'MMM']
    }
    let divisor = 1;
    let roman = '';
    while(num > 0) {
        const mod = num % 10;
        roman = map[divisor][mod] + roman;

        divisor *= 10;
        num = Math.trunc(num / 10);
    }
    return roman;

};

// @lc code=end

