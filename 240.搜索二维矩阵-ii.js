/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//     let res = false;
//     const binarySearch = (arr, target, left, right) => {
//         if (left > right) return false;

//         const mid = Math.floor((left + right)/ 2);
//         if (arr[mid] === target) return true;
//         if (arr[mid] > target) {
//             return binarySearch(arr, target, left, mid - 1);
//         } else {
//             return binarySearch(arr, target, mid + 1, right)
//         }
//     }

//     for (let i = 0; i < matrix.length; i++ ) {
//         res = binarySearch(matrix[i], target, 0, matrix[i].length - 1);
//         if (res) {
//             break;
//         }
//     }
//     return res;
// };

// z字形查找
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let x = 0;
    let y = n - 1;
    
    while (x < m && y >= 0) {
        if (target === matrix[x][y]) return true;
        if (target < matrix[x][y]) {
            y --;
        } else {
            x ++;
        }
    }
    return false;
}


