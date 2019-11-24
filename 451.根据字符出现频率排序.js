/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    // 统计，sort, join
    var map = {};
    var max = 1;
    for(let i of s) {
        if (map[i]) {
            map[i]++;
        } else {
            map[i] = 1;
        }
        max = Math.max(max, map[i]);
    }

    // 利用桶排序的思想，分桶拼装长度相同的字符串
    var list = new Array(max + 1).fill('');
    for (let j in map) {
        list[map[j]] += j.repeat(map[j]);
    }

    // 倒序输出
    return list.reverse().join('');
};
// @lc code=end

