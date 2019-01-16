/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const tmp = Array.from({length: m + n});
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] === 0) {
                tmp[i] = 1;
                tmp[n + j] = 1;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        if (tmp[i] == 1) {
            matrix[i].fill(0);
        }
    }
    console.log(m);
    for (let j = 0; j < m; j++) {
        if (tmp[n + j] == 1) {
            for (let i = 0; i < n; i++) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};

console.log(setZeroes([
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]));
