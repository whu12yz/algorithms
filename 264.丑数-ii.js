/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */
function isUgly(num) {
    if (num < 0) return false;
    while (num % 2 === 0) {
        num /= 2;
    }
    while (num % 3 === 0) {
        num /= 3;
    }
    while (num % 5 === 0) {
        num /= 5;
    }
    if (num === 1) return true;
    return false;
}
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    for (let i = 1;; i ++) {
        if (isUgly(i)) {
            n --;
        }
        if (n === 0) {
            return i;
        }
    }
};

