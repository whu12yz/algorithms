/**
 * 步数问题
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 经过分析 使用数学排列组合做 C(m+n-2, n);
// C(m+n-2, n-1) = (m+n-2)!/(m-3)!/(n-1)!;
function factorial(n) {
    let result = 1;
    while(n >= 1) {
        result *= n--;
    }
    return result;
}

var uniquePaths = function(m, n) {
    return factorial(m+n-2) / (factorial(n-1) * factorial(m-1));
};
console.log(uniquePaths(3, 3));