/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// O(n^2)复杂度
var canCompleteCircuit = function(gas, cost) {
    const helper = function(index, gas, cost) {
        let res = 0;
        for (let i = index; i < gas.length + index; i++) {
            const pos = i >= gas.length ? i - gas.length : i;
            res += (gas[pos] - cost[pos]);
            if (res < 0) {
                return -1;
            }
        }
        return index;
    }

    let result = -1;
    for ( let j = 0; j < gas.length; j ++) {
        result = helper(j, gas, cost);
        if (result !== -1) break;
    }
    return result;
};

// O(n)复杂度 小于0的节点无需再作为起点尝试，不满足条件
var canCompleteCircuit = function(gas, cost) {
    let total = 0, debt = 0, start = 0;
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        debt += gas[i] - cost[i];
        if (debt < 0) {
            start = i + 1;
            debt = 0;
        }
    }
    return total < 0 ? -1 : start;
}



