/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} IP
 * @return {string}
 */
var isValidNumber = function(value) {
    if(parseInt(value).toString() === value) return true;
    return false;
}
var checkIPv4 = function(IP) {
    const list = IP.split('.');
    if (list.length !== 4) return 'Neither';
    for (let i of list) {
        if (!isValidNumber(i)) return 'Neither';
        if (i > 255 || i < 0) {
            return 'Neither';
        }
    }
    return 'IPv4';
}

var checkIPv6 = function(IP) {
    const list = IP.split(':');
    if (list.length !== 8) return 'Neither';
    for (let ii of list) {
        if (ii.length === 4) {
            continue;
        }
        if (ii.length === 1 && ii === '0') {
            continue;
        }
        return 'Neither';
    }
    return 'IPv6';
}

var validIPAddress = function(IP) {
    if (IP.indexOf('.') > -1) {
        return checkIPv4(IP);
    }
    if (IP.indexOf(':') > -1) {
        return checkIPv6(IP);
    }
    return 'Neither';
};

validIPAddress("2001:0db8:85a3:0000:0:8A2E:0370:733a");
// @lc code=end

