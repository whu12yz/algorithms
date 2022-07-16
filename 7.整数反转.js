/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     const symbol = x >= 0 ? '' : '-';
//     const xStrAll = x + '';
//     const xStr = symbol ? xStrAll.slice(1) : xStrAll;

//     let res = '';
//     let efficient = false;

//     for (let i = xStr.length - 1 ; i >= 0; i --) {
//         const n = xStr[i];
//         if (n !== '0') efficient = true;
//         if (efficient) res = res + n;
//     }

//     const isInvalid = compare((res || 0), Math.pow(2, 31) + ''); 
//     if (isInvalid) return 0;
//     return parseInt(symbol + (res || 0));
// };

// function compare(s1, s2) {
//     if (s1.length < s2.length) return false;
//     for(let i = 0; i < s1.length; i ++) {
//         if (s1[i] === s2[i]) continue; 
//         return s1[i] > s2[i];
//     }
//     return false;
// }


// 使用数学方式解决
var reverse = function(x) {
    let res = 0;
    while(x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);
        res = res * 10 + digit;
        if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return res;

}

// @lc code=end

