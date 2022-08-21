/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
// var postorderTraversal = function(root) {
//     const res = [];
//     function search(node) {
//         if (!node) return;
//         search(node.left);
//         search(node.right);
//         res.push(node.val);
//     }
//     search(root);
//     return res;
// };

// 迭代法

var postorderTraversal = function(root) {
    const stack = [];
    const res = [];

    while(root || stack.length) {
        while(root !== null) {
            stack.push(root);
            res.unshift(root.val);
            root = root.right;
        }

        if (stack.length) {
            root = stack.pop().left;
        }
    }
    return res;

}
// @lc code=end

