/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i ++) {
        let diff = prices[i] - prices[i - 1];
        if (diff > 0) profit += diff;
    }

    return profit;
};
// @lc code=end

