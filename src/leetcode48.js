/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function swap (nums, i, j) {
    let tmp = nums[i][j];
    nums[i][j] = nums[j][i];
    nums[j][i] = tmp;
    return nums;
}

var rotate = function(matrix) {
    let len = matrix.length;

    for (let i = 0; i <= len - 1; i++) {
        for (let j = 0; j <= i; j ++) {
            swap(matrix, i, j);
        }
    }
    for (let m = 0; m <= len - 1; m++) {
        matrix[m].reverse();
    }
    return matrix;
};
console.log(rotate([[1, 2, 3], [4,5,6], [7, 8, 9]]));