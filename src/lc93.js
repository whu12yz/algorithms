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
    const res = [];
    deepSearch(res, s, [], 0);
    return res;
};
function deepSearch(res, s, prefix, idx) {
    if (prefix.length === 4 && idx === s.length) {
        res.push(prefix.join('.'));
        return
    }
    if (prefix.length > 4) {
        return
    }
    for (let r = idx; r < s.length; r++) {
        if (r !== idx && s[idx] === '0' ) return;
        const num = parseInt(s.substring(idx, r + 1));
        if(!isValid(num)) return;
        prefix.push(num);
        deepSearch(res, s, prefix, r + 1)
        prefix.pop();
    }

}
function isValid(s) {
    const fmtS = parseInt(s, 10);
    return fmtS >= 0 && fmtS <= 255
}
console.log(restoreIpAddresses('111111'));
