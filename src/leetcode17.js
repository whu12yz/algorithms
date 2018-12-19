/**
 * @param {string} digits
 * @return {string[]}
 */
function combine(m, n) {
    const result = [];
    for (let i = 0; i < m.length; i++) {
        if (n && n.length) {
            for (let j = 0; j < n.length; j++) {
                result.push(m[i] + n[j]);
            }
        } else {
            result.push(m[i]);
        }
    }
    return result;
}
var letterCombinations = function(digits) {
    const map = {
        2: 'abc', 
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv', 
        9: 'wxyz'
    }
    if (!digits) return [];
    const arr = digits.toString().split('');
    if(arr.length === 1) {
        return combine(map[arr[0]]);
    }
    return arr.reduce((first, value, index) => {
        let prev = first;
        if (parseInt(first)) {
            prev = map[first];
        }
        return combine(prev, map[value]);
    })
};

console.log(letterCombinations()); 
