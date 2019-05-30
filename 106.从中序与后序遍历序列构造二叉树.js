/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    var i = p = inorder.length - 1;
    var build = function(stop) {
        if (inorder[i] !== stop) {
            var root = new TreeNode(postorder[p--]);
            root.right = build(root.val); 
            i--;
            root.left = build(stop);
            return root;
        }
        return null;
    }
    return build();
    
};

