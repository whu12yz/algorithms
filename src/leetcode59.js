/**
 * @param {number} n
 * @return {number[][]}
 * 输入: 3
    输出:
    [
        [ 1, 2, 3 ],
        [ 8, 9, 4 ],
        [ 7, 6, 5 ]
    ]
 */
var generateMatrix = function(n) {
    let result =  Array.from({length: n}, () => Array.from({length: n}));
    n = n - 1;
    let count = 1;
    for (let i = 0; i <= n / 2; i++) {
        // 处理中间数字
        if (i === n-i) {
            result[i][i] = count;
        }
        // to Right;
        for (let j = i; j < n-i; j++) {
            result[i][j] = count++;
        }
        // to Bottom
        for (let m = i; m < n - i; m ++) {
            result[m][n - i] = count++;
        }
        // to Left
        for (let p=n-i; p > i; p--) {
            result[n - i][p] = count++;
        }
        // to Top
        for (let q=n-i; q > i; q-- ) {
            result[q][i] = count++;
        }
    }
    return result;
};

console.log(generateMatrix(5));