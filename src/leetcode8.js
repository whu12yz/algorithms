/** 字符串转整数;
 * @param {string} str
 * @return {number}
 */
const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = -Math.pow(2, 31);
var myAtoi = function(str) {
    const result = parseInt(str);
    if (Number.isNaN(result)) {
        return 0;
    }
    if (result > INT_MAX) {
        return INT_MAX;
    }
    if (result < INT_MIN) {
        return INT_MIN;
    }
    return result;
};