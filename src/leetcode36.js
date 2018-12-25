/**
 * @param {character[][]} board
 * @return {boolean}
 */

/**
 * [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
 */
var isValidSudoku = function (board) {
    let bool = true;
    for(let i = 0; i < 9; i++) {
        board[i].forEach((value, index) => {
            if (value !== '.') {
                if(value > 9 || value < 0) {
                    bool = false;
                }
                if (board[i].indexOf(value) !== index) {
                    bool = false;
                }
            }
        })
        const columnArr = [];
        for (let m = 0; m < 9; m++) {
            columnArr.push(board[m][i]);
        }
        columnArr.forEach((value, index) => {
            if (value !== '.') {
                if(value > 9 || value < 0) {
                    bool = false;
                }
                if (columnArr.indexOf(value) !== index) {
                    bool = false;
                }
            } 
        })
    }
    let position = [
        [2, 2],
        [5, 2],
        [8, 2],
        [2, 5],
        [5, 5],
        [8, 5],
        [2, 8],
        [5, 8],
        [8, 8]
    ]
    
    position = position.map((value) => {
        let arr = [];
        for(let i = value[0] - 2; i <= value[0]; i++) {
            for (let j = value[1] - 2; j <= value[1]; j++) {
                if (board[i][j] !== '.') {
                    arr.push(board[i][j]);
                }
            }
        }
        return arr;
    })
    position.forEach((item) => {
        item.forEach((value, index) => {
            if(value > 9 || value < 0) {
                bool = false;
            }
            if (item.indexOf(value) !== index) {
                bool = false;
            }
        })
    })

    return bool;
};

console.log(isValidSudoku(
    [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
      ]
)); 
