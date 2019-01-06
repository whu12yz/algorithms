/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {};
    for (let i = 0; i < strs.length; i++){
        const sortStr = strs[i].split('').sort().join('');
        (result[sortStr] || (result[sortStr] = [])).push(strs[i]);
    }
    const ans = [];
    for (let i in result) {
        ans.push(result[i]);
    }
    return ans;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));