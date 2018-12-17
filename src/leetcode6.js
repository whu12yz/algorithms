/**Z字形排列
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const cycle = numRows * 2 - 2;
    const arr = [];
    for (let i = 0; i < s.length; i ++) {
        const cycleIdx = i % cycle;
        let index = cycleIdx % numRows; 
        if (cycleIdx / numRows >= 1) {
            index = numRows - 2 - index;
        }
        arr[index] = (arr[index] || '').concat(s[i]);
    }
    return arr.join('');
};
