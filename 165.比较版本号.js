/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    let i = 0;
    let result = 0;
    while (i < v1.length || i < v2.length) {
        let v1t = parseInt(v1[i], 10) || 0;
        let v2t = parseInt(v2[i], 10) || 0;
        if (v1t !== v2t) {
            result = v1t > v2t ? 1 : -1;
            break;
        }
        i++;
    }
    return result;
};

