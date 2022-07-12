/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
// 状态转移方程
// f(s) = isIn(s.substring(j, i)) && f(j)
var wordBreak = function(s, wordDict) {
    let len = s.length;
    let dp = Array.from({length: len + 1}).map(() => ([]));
    dp[0] = [''];
    for (let i = 1; i <= len; i ++) {
        for (let j = i - 1; j >= 0; j --) {
            if (dp[j].length && wordDict.includes(s.substring(j, i))) {
                for (let item of dp[j]) {
                    dp[i].push((item && item + ' ') + s.substring(j, i))
                }
            }
        }
    }
    return dp[len];
};
// @lc code=end

