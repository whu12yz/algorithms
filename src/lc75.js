/**
 * 
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:
不能使用代码库中的排序函数来解决这道题。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    const a = [0, 1, 2];
    let b = [0, 0, 0];
    nums.forEach(item => {
        b[item] ++;
    });
    for (let i = 0; i < nums.length; i++) {
        if(i < b[0]) {
            nums[i] = 0;
        }else if (i - b[0] < b[1]) {
            nums[i] = 1;
        } else if (i - b[0] - b[1] < b[2]) {
            nums[i] = 2;
        }
    }
    return nums;
};

console.log(sortColors([1, 2,1, 2, 0, 0, 1]));
