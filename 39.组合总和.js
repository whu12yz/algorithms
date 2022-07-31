/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = candidates.sort((a, b) => a - b);

    let res = [];
    let tmp = [];
    backtracking(res, tmp, candidates, target, 0);
    return res;
    
    function backtracking(res, tmp, candidates, target, j) {
        if (target === 0)  res.push([].concat(tmp));
        for (let i = j; i < candidates.length && target >= candidates[i] ; i ++) {
            tmp.push(candidates[i]);
            backtracking(res, tmp, candidates, target - candidates[i], i);
            tmp.pop();
        }

    }

};
// @lc code=end

