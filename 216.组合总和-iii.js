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
    let tempVal = 0;
    let iMap = new Array(k).fill(1);
    
    while (temp.length < k) {
        const newVal = temp[temp.length - 1] ? temp[temp.length - 1] + iMap[temp.length] : iMap[temp.length];
        // 结束条件
        if (newVal > 9) {
            if (temp.length === 0) break;
            temp.pop();
            iMap[temp.length] ++;
            tempVal -= newVal;
            continue;
        }
        temp.push(newVal);
        tempVal += newVal;

        if (temp.length === k) {
            if (tempVal === n) {
                result.push([].concat(temp));
            }
            iMap[temp.length - 1] ++;
            tempVal -= newVal;
            temp.pop();
        }
    }
    return result;
};
combinationSum3(3, 7)

