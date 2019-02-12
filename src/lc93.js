/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    for (let j = 0; j < 3; j++) {
    }
};
function helper(s, start, end, j) {
    if(isValid(s.substring(start, end + 1))){
        helper(s, end, end + j);
    }else {
        helper(s, 0, j - 1, j - 1);
    };
}
function isValid(s) {
    if (s.length > 1 && s[0] == 0) {
        return false;
    } 
    const fmtS = parseInt(s, 10);
    return fmtS >= 0 && fmtS <= 255
}
console.log(restoreIpAddresses(25525511135));
