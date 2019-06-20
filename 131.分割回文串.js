/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */
/**
 * @param {string} s
 * @return {string[][]}
 */

var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    while(i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
// aab

var partition = function(s, res = [], ans = []) {
    if (!s) return;

    if (isPalindrome(s)) {
        res.push(s);
        return;
    }

    for (let i = 1; i < s.length; i++) {
        partition(s.slice(0, i), res, ans);
        partition(s.slice(i), res, ans);
        ans.push(JSON.parse(JSON.stringify(res)));
        res = [];
    }
    return ans;
};

