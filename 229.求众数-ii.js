/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const dict = {};
    const res = new Set();
    const critical = nums.length / 3;
    for (let i of nums) {
        dict[i] ? dict[i] ++ : (dict[i] = 1);
        if (dict[i] > critical) {
            res.add(i);
        } 
    }
    return [...res];
};

