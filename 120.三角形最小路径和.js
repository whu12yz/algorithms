/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */
// 动态规划题目
/**
 * 
 * 1. 申请n个空间minNums[n]，初始化minNums[n]为数据triangle[][]的最后一行。最后一行的数字到最底层的最小路径和就是他们自己本身。
 * 2. 从倒数第二行开始往上（row），从左向右（col）循环计算并更新minNums的值，minNums[col]=min(minNums[col], minNums[col+1]) + triangle[row][col]
 * 3. 最后minNums[0]就是我们要的答案。
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let row = triangle.length - 1;
    let minNums = triangle[row];

    while(row > 0) {
        row --;
        for (let col = 0; col < triangle[row].length; col++) {
            minNums[col] = Math.min(minNums[col], minNums[col+1]) + triangle[row][col];
        }
    }
    return minNums[0];
    
};

