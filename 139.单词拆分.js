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
var wordBreak = function(s, wordDict) {

    const helper = function(index, s, wordDict) {
        if (index === s.length) {
            return true;
        }
        for (let i = index; i < s.length; i ++) {
            const tmp = s.substring(index, i + 1);
            if (wordDict.includes(tmp) && helper(i + 1, s, wordDict)) {
                    return true;
            }
        }
        return false;
    }

    return helper(0, s, wordDict);
};

// 动态规划解题


