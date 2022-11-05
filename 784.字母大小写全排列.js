/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
function isLetter(c) {
    return /[a-zA-Z]/.test(c);
}
var letterCasePermutation = function(s) {
    const res = [];
    const temp = '';

    function backtracking(res, temp, s, j) {
        if (temp.length === s.length) return res.push(temp);

        for (let i = j; i < s.length; i ++) {
            if (isLetter(s[i])) {
                backtracking(res, temp + s[i].toUpperCase(), s, i + 1);
                backtracking(res, temp + s[i].toLowerCase(), s, i + 1);
                return;
            }
            backtracking(res, temp + s[i], s, i + 1);
        }
    }

    backtracking(res, temp, s, 0);

    return res;
};
// @lc code=end

