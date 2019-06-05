/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return;
    if (root.left) {
        var last = root.left;
        while(last && last.right) last = last.right;

        var tmp = root.right;
        root.right = root.left;
        last.right = tmp;
        root.left = null;
    }
    flatten(root.right);
};

