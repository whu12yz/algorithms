/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 回溯法解题
// var wordBreak = function(s, wordDict) {

//     const helper = function(index, s, wordDict) {
//         if (index === s.length) {
//             return true;
//         }
//         for (let i = index; i < s.length; i ++) {
//             const tmp = s.substring(index, i + 1);
//             if (wordDict.includes(tmp) && helper(i + 1, s, wordDict)) {
//                     return true;
//             }
//         }
//         return false;
//     }

//     return helper(0, s, wordDict);
// };

// 动态规划解题
// dp(i) = isIn(s.substring(j, i)) && dp(j)
var wordBreak = function(s, wordDict) {
    let len = s.length;
    let dp = Array.from({ length: len + 1}).fill(false);
    dp[0] = true;
    for (let i = 1; i <= len; i ++) {
        for (let j = i - 1; j >= 0; j --) {
            if(dp[j] && wordDict.includes(s.substring(j, i))){
                dp[i] = true;
                break;
            }
        }
    }

    return dp[len];
};


