/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */
/**
 * @param {string} s
 * @return {string[]}
 */
function isEqual(s, start1, start2) {
    i = 0;
    while(i < 10) {
        if (!s[start1 + i] || s[start2 + i] || s[start1 + i] !== s[start2 + i]) {
            return false;
        }
        i ++;
    }
    return true;
}
var findRepeatedDnaSequences = function(s) {
    const result = [];
    let i = 0;
    while(i < s.length - 10) {
        for (let j = i + 10; j < s.length - 10; j ++) {
            if (isEqual(s, i, j)) {
                result.push(s.substr(i, 10));
                i ++;
                break;
            }
        }
        i ++;
    }
    return result;
};

