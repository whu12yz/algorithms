/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const temp = [];
    const result = [];
    recall(result, temp, n, k, 1);

    function recall(result, temp, target, k, j) {
        if (target === 0 && temp.length === k) {
            result.push([].concat(temp));
        }
        for (let i = j; target >= i && temp.length < k && i <= 9; i ++) {
            temp.push(i);
            recall(result, temp, target - i, k, i + 1);
            temp.pop();
        }
    }

    return result;
    
    // while (temp.length < k) {
    //     const newVal = temp[temp.length - 1] ? temp[temp.length - 1] + iMap[temp.length] : iMap[temp.length];
    //     // 结束条件
    //     if (newVal > 9) {
    //         if (temp.length === 0) break;
    //         temp.pop();
    //         iMap[temp.length] ++;
    //         tempVal -= newVal;
    //         continue;
    //     }
    //     temp.push(newVal);
    //     tempVal += newVal;

    //     if (temp.length === k) {
    //         if (tempVal === n) {
    //             result.push([].concat(temp));
    //         }
    //         iMap[temp.length - 1] ++;
    //         tempVal -= newVal;
    //         temp.pop();
    //     }
    // }
    // return result;
};
// combinationSum3(3, 7)

