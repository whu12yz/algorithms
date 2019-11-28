/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 递归加回溯
var find132pattern = function(nums) {
    let list = [];
    let has132 = false;
    // let res = [];

    function search(nums, start) {
        for (let i = start; i < nums.length; i++) {
            if (!list.length) {
                list.push(nums[i]);
                search(nums, i + 1);
                list.pop();
            };
            if (list.length === 1) {
                if (list[0] < nums[i]) {
                    list.push(nums[i]);
                    search(nums, i + 1);
                    list.pop();
                }
            }
            if (list.length === 2) {
                if (list[1] > nums[i] && list[0] < nums[i]) {
                    has132 = true;
                    // res.push(JSON.parse(JSON.stringify(list.concat([nums[i]]))));
                }
            }
        }
    }
    search(nums, 0);
    return has132;
};

// 单调栈
var find132pattern = function(nums) {
    return 
}
// @lc code=end

