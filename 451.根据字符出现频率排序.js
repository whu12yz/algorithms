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
    var list = [];
    for(let i of s) {
        if (map[i]) {
            map[i]++;
        } else {
            map[i] = 1;
        }
    }
    for ( let j in map) {
        list.push(j.repeat(map[j]));
    }
    list.sort((a, b) => {
        return b.length - a.length;
    })
    return list.join('');
};
// @lc code=end

