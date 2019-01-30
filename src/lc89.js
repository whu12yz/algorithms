/**
 * @param {number} n
 * @return {number[]}
 */
// 以二进制为0值的格雷码为第零项，第一项改变最右边的位元，第二项改变右起第一个为1的位元的左边位元，第三、四项方法同第一、二项，如此反复，即可排列出n个位元的格雷码。
var grayCode = function(n) {
    let result = [];
    if (!n) {
        return [0];
    }
    let start = new Array(n + 1).join('0');
    result.push(start);
    for ( let i = 1; i < Math.pow(2, n); i++) {
        if (i % 2) {
            start = start.slice(0, start.length - 1) + (1 - start[start.length - 1]);
        } else {
            start = start.replace(/(.*?)([0-1])(10*)$/, (match, $1, $2, $3) => {
                return $1 + (1 - $2) + $3;
            })
        }
        result.push(start);
    }
    return result.map(item => {
        return parseInt(item, 2);
    });
};

console.log(grayCode(0));