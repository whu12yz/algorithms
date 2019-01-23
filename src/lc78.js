/**
// 输入: nums = [1,2,3]
// 输出:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]
 * @param {number[]} nums
 * @return {number[][]}
 */
let result = [];
var subsets = function(nums) {
    result = [];
    for (let i = 0; i <= nums.length; i++) {
        combine(nums, i);
    }
    return result;
};

function combine(nums, k) {
    const start = 1;
    const temp = [];
    helper(start, nums, k, temp);
}

function helper(start, nums, k, temp) {
    if (temp.length == k) {
        result.push([].concat(temp));
    } else {
        for (let i = start; i <= nums.length; i++) {
            temp.push(nums[i - 1]);
            helper(i + 1, nums, k, temp);
            temp.pop();
        }
    }
}

console.log(subsets([1, 2, 3]));