/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let tmp = [];

    backtracking(res, tmp, candidates, target, 0);

    function backtracking(res, tmp, candidates, target) {
        if (target === 0) res.push([].concat(tmp));
        for (let i = 0; i < candidates.length && target >= candidates[i];  i ++) {
            if (candidates[i] === candidates[i - 1]) continue;
            tmp.push(candidates[i]);
            backtracking(res ,tmp, candidates.slice(i + 1), target - candidates[i]);
            tmp.pop();
        }
    }

    return res;

};
// combinationSum2([10,1,2,7,6,1,5], 8)
// @lc code=end

