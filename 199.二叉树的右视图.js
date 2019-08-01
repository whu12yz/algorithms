/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
    if (!root) return [];
    
    let result = [];
    const queen = [];
    queen.push([root, 0])

    while(queen.length) {
        const current = queen.shift();
        const node = current[0];
        const level = current[1];
        if (!queen[0] || queen[0][1] > level) {
            result.push(node.val);
        }
        if(node.left) queen.push([node.left, level + 1]);
        if(node.right) queen.push([node.right, level + 1]);
    }

    return result;
};

