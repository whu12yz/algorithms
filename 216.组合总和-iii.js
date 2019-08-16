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
    let start = 1;
    let tempVal = 0;
    let iMap = new Array(k).fill(1);
    
    while (temp.length < k) {
        // 结束条件
        if (temp[0] > n / k) {
            break;
        }

        const newVal = temp[temp.length - 1] ? temp[temp.length - 1] + iMap[temp.length] : start;
        if (newVal > 9) {
            temp.pop();
            tempVal -= newVal;
            continue;
        }
        temp.push(newVal);
        tempVal += newVal;

        if (temp.length === k) {
            if (tempVal === n) {
                result.push([].concat(temp));
            }
            iMap ++;
            tempVal -= newVal;
            temp.pop();
        }
    }
    return result;
};

