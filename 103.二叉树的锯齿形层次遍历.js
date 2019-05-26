/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 拙劣的写法，广度优先遍历之后操作了数组
// var zigzagLevelOrder = function(root) {
//     let res = [];
//     let queen = [[root, 0]];
//     while (queen.length) {
//         let task = queen.shift();
//         let node  = task[0];
//         let depth = task[1];
//         if (node) {
//             res[depth] = (res[depth] || []).concat(node.val);
//         }
//         if (node && node.left) {
//             queen.push([node.left, depth + 1]);
//         }
//         if (node && node.right) {
//             queen.push([node.right, depth + 1]);
//         }
//     }
//     return res.map((item, index) => {
//             if ((index % 2) == 0) {
//                 return item;
//             }
//             return item.reverse();
//     })
// };

// DFS的方法
var zigzagLevelOrder = function(root, res = [], level = 0) {
    if (!root) return [];
    res[level] = level % 2 ? [root.val, ...res[level] || []] : [...res[level] || [], root.val];
    root.left && zigzagLevelOrder(root.left, res, level + 1);
    root.right && zigzagLevelOrder(root.right, res, level + 1);
    return res;
}

