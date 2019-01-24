/**
 * @param {number[]} nums
 * @return {number}
 */

// class Solution {
//     public int removeDuplicates(int[] nums) {
//         int i = 0;
//         for (int n : nums)
//             if (i < 2 || n > nums[i-2])
//                 nums[i++] = n;
//         return i;
//     }
// }
var removeDuplicates = function(nums) {
    let i = 0;
    // while(i < nums.length) {
    //     if (nums[i] === nums[i-1] && nums[i] === nums[i-2]) {
    //         nums.splice(i, 1);
    //         continue;
    //     }
    //     i++;
    // }
    // return nums.length;
    for (let n in nums) {
        if (i < 2 || nums[n] > nums[i-2]) {
            nums[i] = nums[n];
            i++;
        }
    }
    return i;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 4]));