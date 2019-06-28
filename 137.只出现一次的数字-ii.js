/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 位运算，状态机
function sum(list) {
    return list.reduce((a, b) => a + b);
}
var singleNumber = function(nums) {
    return (sum(Array.from(new Set(nums))) * 3 - sum(nums)) / 2;
};

