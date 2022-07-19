/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz",
    }
    const list = [];
    backtracking(list, map, digits, 0, '');
    return list;
};
function backtracking(list, map, digits, index, str) {
    const num = digits[index];

    // 截止条件, 到终点
    if (!num)  {
        return str && list.push(str);
    };

    const char = map[num];
    for (let i = 0; i < char.length; i ++) {
        backtracking(list, map, digits, index + 1, str + char[i]);
    }
}
// @lc code=end

