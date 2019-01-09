/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
 */
var spiralOrder = function(matrix) {
    let vertical = matrix.length - 1;
    let horizon = matrix[0] ? matrix[0].length - 1 : 0;
    return circle(matrix, 0, vertical, 0, horizon);
};

function circle(matrix, verStart, verEnd, horStart, horEnd) {
    if((verStart > verEnd) || (horStart > horEnd)) {
        return [];
    }
    let toRight;
    let toBottom = [];
    let toLeft;
    let toTop = [];
    toRight = matrix[verStart].slice(horStart, horEnd + 1);
    for(let i = verStart + 1; i <= verEnd - 1; i++) {
        console.log(i);
        toBottom.push(matrix[i][horEnd]);
    }
    toLeft = matrix[verEnd].slice(horStart, horEnd + 1).reverse();
    for(let j = verEnd - 1; j > verStart; j--) {
        toTop.push(matrix[j][horStart]);
    }
    if (verStart === verEnd) {
        toLeft = [];
    }
    if (horStart === horEnd) {
        toTop = [];
    }
    return toRight.concat(toBottom).concat(toLeft).concat(toTop).concat(circle(matrix, verStart+1, verEnd-1, horStart+1, horEnd-1));
}

console.log(spiralOrder([
    [7,2],
    [6,4],
    [5, 3]
   ]));