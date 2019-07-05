/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var search = function(node, result = []) {
        if (!node) return [];

        result.push(node.val);

        if (node.left) search(node.left, result);
        if (node.right) search(node.right, result);

        return result;
    }
    return search(root);
    
};

