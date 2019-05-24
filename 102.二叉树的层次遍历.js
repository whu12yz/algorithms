/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
// 此为DFS方式实现层次遍历, 
// var levelOrder = function(root) {
//     let count = 0;
//     const res = [];
//     if (root && root.val !== null) {
//         res[0] = [root];
//         count += 1
//     }
//     var search = function(root, res, count) {
//         if(root && root.left) {
//             res[count] = (res[count] || []).concat(root.left);
//             search(root.left, res, count + 1);
//         }
//         if (root && root.right) {
//             res[count] = (res[count] || []).concat(root.right);
//             search(root.right, res, count + 1);
//         }
//     }
//     search(root, res, count);
//     return res.map((item) => {
//         return item.map(inner => {
//             return inner.val;
//         });
//     })
// };

// 此为BFS实现层次遍历
var levelOrder = function(root) {
    let res = [];
    let queen = [[root, 0]];
    while(queen.length) {
        const task = queen.shift();
        const node = task[0];
        const depth = task[1];
        if (node) {
            res[depth] = (res[depth] || []).concat(node.val);
        }
        if (node && node.left) {
            queen.push([node.left, depth + 1]);
        }
        if (node && node.right) {
            queen.push([node.right, depth + 1]);
        }
    }
    return res;
}
