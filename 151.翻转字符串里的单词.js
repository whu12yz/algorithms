/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const res = s.split(/\s+/).filter(item => item !== '');
    return res.reverse().join(' ');
};

