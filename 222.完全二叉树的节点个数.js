/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
// dfs遍历二叉树
var countNodes = function(root) {
    let count = 0;
    function search(node) {
        if (!node) return;

        count ++;

        if (node.left) search(node.left);
        if (node.right) search(node.right);
    }
    search(root);
    return count;
};

