/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let min = prices[0];

    for (let i = 0; i < prices.length; i ++) {
        min = Math.min(min, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }

    return maxProfit;
};
// @lc code=end

