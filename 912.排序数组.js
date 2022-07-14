/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 快排实现
var sortArray = function(nums, left = 0, right) {
    const len = nums.length;
    right = typeof right === 'number' ? right : len - 1;
    if (left < right) {
        const partitionIndex = partition(nums, left, right);
        sortArray(nums, 0, partitionIndex);
        sortArray(nums, partitionIndex + 1, right);
    }
    return nums;

};
var partition = function(arr, left, right) {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i ++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index ++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

var swap = function (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// @lc code=end

