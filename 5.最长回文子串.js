/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const f = Array.from({length: s.length + 1}).map(item => Array.from({length: s.length + 1}).fill(0));
    let max = 1;
    let start = 0;


    for (let j = 0; j < s.length; j ++) {
        f[j][j] = true;
        for (let i = 0; i <= j; i ++) {
            if (s[i] === s[j] && ((j - i > 1 && f[i + 1][j - 1]) || i + 1 >= j)) {
                if (j - i + 1 > max) {
                    max = j - i + 1;
                    start = i;
                }
                f[i][j] = true;
                continue;
            }

        }
    }

    return s.slice(start, start + max);
};
// @lc code=end

