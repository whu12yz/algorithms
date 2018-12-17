/** 求最长回文串   LeetCode 5
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length;
    let longest = '';
    for (let i = 0; i < len; i ++) {
        if (s[i] && s[i + 1] && s[i] === s[i + 1]) {
            let str = s.slice(i, i + 1 + 1);
            let m = i, n = i + 1;
            if (str.length > longest.length) {
                longest = str;
            }
            while (s[n] && s[n + 1] && (s[n] === s[n + 1])) {
                str = s.slice(m, n + 1 + 1);
                n ++;
                if(str.length > longest.length) {
                    longest = str;
                }
            }
            while((s[m - 1] && s[n + 1]) && (s[m - 1] === s[n + 1])) {
                str = s.slice(m - 1, n + 1 + 1);
                m--;
                n++
                if(str.length > longest.length) {
                    longest = str;
                }
            }
        }
        if (s[i - 1] && s[i + 1] && s[i - 1] === s[i + 1]) {
            let str = s.slice(i - 1, i + 1 + 1);
            if (str.length > longest.length) {
                longest = str;
            }
            let m = i - 1;
            let n = i + 1;
            while (s[m - 1] && s[n + 1 ] && s[m - 1] === s[n + 1 ]) {
                str = s.slice(m - 1, n + 1 + 1);
                m--;
                n++;
                if(str.length > longest.length) {
                    longest = str;
                }
            }
        }
    }
    if (!longest && len > 0) {
        longest = s[0];
    }
    return longest;
};