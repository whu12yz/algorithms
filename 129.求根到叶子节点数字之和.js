/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function(root) {
    // DFS
    let res = 0;
    const tmp = [];
    const search = (node) => {
        if (!node) return null;

        tmp.push(node.val);

        if (!node.left && !node.right) {
            res += parseInt(tmp.join(''));
        }

        if (node.left) search(node.left);
        if (node.right) search(node.right);
        tmp.pop();

    }
    search(root);
    return res;
};

