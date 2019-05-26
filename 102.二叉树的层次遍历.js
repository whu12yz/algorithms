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
// 此为DFS方式实现层次遍历, 方式比较粗糙，103的实现更佳
var levelOrder = function(root, res = [], count = 0) {
    if (!root) return []
    res[count] = (res[count] || []).concat(root.val);
    if(root && root.left) {
        levelOrder(root.left, res, count + 1);
    }
    if (root && root.right) {
        levelOrder(root.right, res, count + 1);
    }
    return res;
};

// 此为BFS实现层次遍历
// var levelOrder = function(root) {
//     let res = [];
//     let queen = [[root, 0]];
//     while(queen.length) {
//         const task = queen.shift();
//         const node = task[0];
//         const depth = task[1];
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
//     return res;
// }
