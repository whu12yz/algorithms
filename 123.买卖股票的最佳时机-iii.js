/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 第i天及之前交易一次的最大收益
    let len = prices.length;
    let buyProfit = new Array(len);

    let curMin = prices[0];
    let preMaxProfit = 0;
    for (let i = 1; i < prices.length; i ++) {
        curMin = Math.min(curMin, prices[i]);
        preMaxProfit = Math.max(preMaxProfit, prices[i] - curMin);
        buyProfit[i] = preMaxProfit;
    }

    // 第i天之后交易一次的最大收益
    let postProfit = new Array(len);
    let curMax = prices[len - 1];
    let postMaxProfit = 0;

    for (let i = len - 2; i >= 0; i --) {
        curMax = Math.max(curMax, prices[i]);
        postMaxProfit = Math.max(postMaxProfit, curMax - prices[i]);
        postProfit[i] = postMaxProfit;
    }
    
    let max = 0;
    for (let j = 0; j < postProfit.length; j ++) {
        postProfit[j] = postProfit[j] || 0;
        buyProfit[j] = buyProfit[j] || 0;
        max = Math.max(max, postProfit[j] + buyProfit[j]);
    }

    return max; 
};
// @lc code=end

