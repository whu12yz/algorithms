/**
matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]
target = 3
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const n = matrix.length;
    if (!matrix.length) return false;
    const  list = search(matrix, target, 0, n);
    return searchNum(list, target, 0, list.length);
};

function search(matrix, target, m, n) {
    let mid = Math.floor((m + n) / 2);
    if (m > n || !matrix[mid]) return [];
    if (target < matrix[mid][0] )  {
        return search(matrix, target, m, mid - 1);
    } else if ( target > matrix[mid][matrix[mid].length - 1]) {
        return search(matrix, target, mid + 1, n);
    } else {
        return matrix[mid];
    }
}

function searchNum(list, target, m, n){
    if (!list.length) return false

    const mid = Math.floor((m + n) / 2);
    if (m > n || list[mid] === undefined) return false;

    if (target < list[mid]) {
        return searchNum(list, target, m, mid - 1);
    } else if (target > list[mid]) {
        return searchNum(list, target, mid + 1, n);
    } else {
        return true;
    }
}

console.log(searchMatrix([
[1]
], 2));