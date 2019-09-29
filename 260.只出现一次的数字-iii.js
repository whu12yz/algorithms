/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const dict = {};
    const res = [];
    for (let i of nums) {
        dict[i] ? dict[i] ++ : (dict[i] = 1);
    }
    for (let j of Object.keys(dict)) {
        if(dict[j] < 2) {
            res.push(j);
        }
    }
    return res;
};

