/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */
/**
 * @param {string} s
 * @return {string[][]}
 */

 // 回溯，递归，深度优先搜索
var isPalindrome = function(s, start, end) {
    while(start <= end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
// aab

var partition = function(s) {
    const ret = [];
    const path = [];
    dfs(0, s, path, ret);
    return ret;
}

var dfs = function(index, s, path, ret) {
    if (index === s.length) {
        ret.push(JSON.parse(JSON.stringify(path)));
        return;
    }

    for (let i = index; i < s.length; i++) {
        if (isPalindrome(s, index, i)) {
            path.push(s.substr(index, i - index + 1));
            dfs(i + 1, s, path, ret);
            path.pop();
        }
    }
};

