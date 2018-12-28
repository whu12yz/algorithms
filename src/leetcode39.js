/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = candidates.sort();
    let res = [];
    let tmp = [];
    recall(res, tmp, target, candidates, 0);
    return res;
};

function recall(res, tmp, target, candidates, j) {
    if (target === 0) {
        res.push(tmp);
    }
    for (let i = j; i < candidates.length && target >= candidates[i]; i++) {
        tmp.push(candidates[i]);
        recall(res, tmp, target-candidates[i], candidates, i);
        console.log(tmp);
        tmp.pop();
    }
}

const a = combinationSum([2,3,5], 7);
console.log(a);