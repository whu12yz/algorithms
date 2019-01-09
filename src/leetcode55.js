/**
 * @param {number[]} nums
 * @return {boolean}
 * 输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
 */
var canJump = function(nums) {
    let len = nums.length;
    let n = 1;
    for (let j = len - 2; j >= 0; j--) {
        if(nums[j] >= n) {
            n = 1;
        } else {
            n++;
        }
        if (j === 0 && n > 1) {
            return false;
        }
    }
    return true;
};
