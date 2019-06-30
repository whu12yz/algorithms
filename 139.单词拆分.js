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
var wordBreak = function(s, wordDict) {

    const helper = function(index, s, wordDict) {
        for (let i = index; i < s.length; i ++) {
            const tmp = s.slice(index, i + 1);
            if (wordDict.indexOf(tmp) > -1) {
                if (i === s.length - 1) {
                    return true;
                }
                return helper(i + 1, s, wordDict);
            }
        }
        return false;
    }

    return helper(0, s, wordDict);
};


