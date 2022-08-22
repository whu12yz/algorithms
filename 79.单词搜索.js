/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    const res = false;
    const tmp = '';
    const visited = Array(m).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < m; i ++) {
        for (let j = 0; i < n; j ++) {
            backtracking(visited, res, tmp, board, word, i, j);
        }
    }
    
    function backtracking(visited, res, tmp, board, word, p, q) {
        if (tmp === word) {
            return res = true;
        }
        if (p > m || q > n || p < 0 || q < 0) return;

        if (visited[p][q]) return;

        visited[p][q] = true;

        const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
        for (let di = 0; di < directions.length; di ++) {
            const d = directions[di];
            console.log(d);
            tmp += board[p + d[0]][q + d[1]];
            backtracking(res, tmp, board, word, p + d[0], q + d[1]);
            tmp = tmp.substring(0, tmp.length - 1);
        }

        visited[p][q] = false;
    }

    return res;

};

var c = exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]);
console.log(c);
// @lc code=end

