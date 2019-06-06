/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let queen = [];
    var search = function(node) {
        const task = queen.shift();
        // queen.push(node);
        if (node.left) queen.push(node.left);
        if (node.right) queen.push(node.right);
    }

    search(root);
};

