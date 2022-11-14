/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 二分查找
// var searchRange = function(nums, target) {
//     const len = nums.length;
//     let l = 0;
//     let r = len - 1;
//     let mid = 0;

//     while(l <= r) {
//         mid = Math.floor((l + r) / 2);
//         if (nums[mid] === target)  break;
//         if (nums[mid] < target) {
//             l = mid + 1;
//         }
//         if (nums[mid] > target) {
//             r = mid - 1;
//         }
//     }
//     if (nums[mid] === target) {
//         let m = mid,
//             n = mid;
//         while (nums[m] === target) {
//             m --;
//         }
//         while (nums[n] === target) {
//             n ++;
//         }
//         return [m + 1, n - 1];
//     }

//     return [-1,  -1];

// };

function searchIndex(nums, target, lower) {
    let left = 0;
    let right = nums.length - 1;
    let ans = nums.length;
    
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (target < nums[middle] || (lower && target <= nums[middle])) {
            right = middle - 1;
            ans = middle;
        } else {
            left = middle + 1;
        }
    }

    return ans;
}

var searchRange = function(nums, target) {
    const leftIndex = searchIndex(nums, target, true);
    const rightIndex = searchIndex(nums, target, false) - 1;
    if (nums[leftIndex] === target && nums[rightIndex] === target && leftIndex <= rightIndex) {
        return [leftIndex, rightIndex];
    }
    return [-1, -1];
}
// var c = searchIndex([2,3,3,3,3,3,3,4], 3, true)
// console.log(c)
// searchRange([5,7,7,8,8,10], 6)
// @lc code=end

