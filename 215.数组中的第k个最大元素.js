/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function(nums, k) {
//     nums.sort((a, b) => b - a)
//     return nums[k - 1];
// };

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

var findKthLargest = function(nums, k, left = 0, right) {
    let len = nums.length;
    right = typeof right === 'number' ? right : len - 1;

    let index = partition(nums, left, right);
    if (index === k - 1) return nums[index];

    if (index > k - 1) {
        return findKthLargest(nums, k, left, index - 1)
    }
    return findKthLargest(nums, k, index + 1, right);

}

function partition(arr, left, right) {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i ++) {
        if (arr[i] > arr[pivot]) {
            swap(arr, i, index);
            index ++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

function find2th(nums) {
    let max = Math.max(nums[0], nums[1]);
    let second = Math.min(nums[0], nums[1]);

    if (nums.length < 2) return 0;

    if (max === second) return 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            second = max;
            max = nums[i];
        }
        if (nums[i] > second && nums[i] < max) {
            second = nums[i];
        }
    }
    return second;
}



