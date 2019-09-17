/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = [];
    let sides = [];
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] - nums[i - 1] !== 1) {
            console.log(i);
            if (sides.length === 2) {
                let data;
                if (sides[1] - sides[0] === 1) {
                    data = nums[sides[0]];
                } else {
                    data = `${nums[sides[0]]}->${nums[sides[1] - 1]}`;
                }
                res.push(data)
                sides.shift();
                console.log(sides);
            } else {
                sides.push(i);
            }
            console.log(sides);
        }
    }
    return res; 
};

