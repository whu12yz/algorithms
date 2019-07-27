/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
// 核心，排序规则 一前一后比较，谁在前面组成的值比较大就谁大
function gt(a, b) {
    a = a.toString();
    b = b.toString();
    if (parseInt(a + b) >= parseInt(b + a)) {
        return true;
    }
    return false;
}

// 快排
var largestNumber = function(nums) {
    var sort = function(nums) {
        if (nums.length <= 1) return nums;

        let mid = Math.ceil((nums.length) / 2) - 1;
        let midVal = nums.splice(mid, 1);
        let left = [];
        let right = [];
        for(let i = 0; i < nums.length; i++) {
            gt(nums[i], midVal) ? left.push(nums[i]) : right.push(nums[i]);
        }
        return sort(left).concat(midVal).concat(sort(right));
    }
    let sorted = sort(nums).join('');
    return sorted[0] === '0' ? "0" : sorted;
};

var largestNumber = function(nums) {
    nums.sort((a, b) => {
        a = a.toString();
        b = b.toString();
        return parseInt(b + a) - parseInt(a + b);
    })

    return nums[0] === 0 ? '0' : nums.join('');
}

