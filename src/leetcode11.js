/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力解法O(n²)
// var maxArea = function(height) {
//     let max = 0;
//     for (let i = 0; i < height.length; i++) {
//         for (let j = i; j >= 0; j--) {
//             const h = Math.min(height[i], height[j]);
//             const w = i - j;
//             if (h * w > max) {
//                 max = h * w;
//             }
//         }
//     }
//     return max;
// };

// 双指针解法O(n)
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    while (i !== j) {
        const h = Math.min(height[i], height[j]);
        const area = h * (j - i);
        if (area > max) {
            max = area;
        }
        height[i] === h ? i++ : j--;
    }
    return max
}
const a = maxArea([1,8,6,2,5,4,8,3,7]);
console.log(a);