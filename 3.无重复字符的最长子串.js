/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let str = '';
//     let maxLength = 0;
//     for(i = 0; i < s.length; i ++) {
//         str = str + s[i];
//         for (j = 0; j < str.length - 1; j ++) {
//             if(s[i] === str[j]) {
//                 maxLength = Math.max(maxLength, str.length - 1)
//                 str = str.slice(j + 1);
//                 break;
//             }
//         }
//     }
//     return Math.max(maxLength, str.length);
// };

// hashtable + 滑动窗口实现
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let hash = {};
    let maxLength = 0;
    for(i = 0; i < s.length; i ++) {
        const n = s[i];
        while (hash[n] !== undefined) {
            const left = arr.shift();
            delete hash[left];
        }
        hash[n] = i;
        arr.push(n);
        maxLength = Math.max(maxLength, arr.length);
    }
    return maxLength;
};

// @lc code=end

