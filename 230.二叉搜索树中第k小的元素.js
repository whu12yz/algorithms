/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
// 先序遍历，取第k个值
var search = function(root, list = []) {
    root.left && search(root.left, list);
    list.push(root.val);
    root.right && search(root.right, list);
    return list;
}
var kthSmallest = function(root, k) {
    const list = search(root);
    return list[k - 1];
};

