/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    // for (let i = 0; i < n; i ++) {
    //     backtracking()
    // } 
    backtracking('', 0, 0); 
    function backtracking(str, left, right) {
        if (str.length === n * 2) res.push(str);
        if (left < n) {
            backtracking(str + '(', left + 1, right );

        }
        if (right < left) {
            backtracking(str + ')', left, right + 1);
        }
    }

    return res;
};
// @lc code=end

