/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board.length) return;

    const rowLen = board.length;
    const colLen = board[0].length;
    for (let i = 0; i < rowLen; i ++){
        if (board[i][0] === 'O') {
            board[i][0] = '*';
            dfs(board, i, 1);
        }
        if (board[i][colLen - 1] === 'O') {
            board[i][colLen - 1] = '*';
            dfs(board, i, colLen - 2);
        }
    }

    for (let j = 0; j < colLen; j ++) {
        if (board[0][j] === 'O') {
            board[0][j] = '*';
            dfs(board, 1, j);
        }
        if (board[rowLen - 1][j] === 'O') {
            board[rowLen - 1][j] = '*';
            dfs(board, rowLen - 2, j);
        }
    }

    for (let i = 0; i < rowLen; i ++) {
        for (let j = 0; j < colLen; j ++) {
            if (board[i][j] === 'O') board[i][j] = 'X';
            if (board[i][j] === '*') board[i][j] = 'O';
        }
    }

    function dfs(board, row, col) {
        if (row >= board.length || row <= 0) return;
        if (col >= board[0].length || col <= 0) return;
        if (board[row][col] === 'O') {
            board[row][col] = '*';
            dfs(board, row - 1, col);
            dfs(board, row + 1, col);
            dfs(board, row, col - 1);
            dfs(board, row, col + 1);
        }
    }
};

