/**
 * 输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
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
        console.log(temp);
        result.push(JSON.stringify([].concat(temp).sort()));
    } else {
        for (let i = start; i <= nums.length; i++) {
            temp.push(nums[i - 1]);
            helper(i + 1, nums, k, temp);
            temp.pop();
        }
    }
}

var subsetsWithDup = function(nums) {
    let result = new Set(subsets(nums));
    return Array.from(result).map(item => JSON.parse(item));
};

console.log(subsetsWithDup([4, 1, 0]));
/**
 * [[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]
 * [[],[0],[0,1],[0,1,4],[0,4],[1],[1,4],[4]]
 */