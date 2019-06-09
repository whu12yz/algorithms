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
    const level = 0;
    let queen = [[root, level]];
    var search = function() {
        while (queen.length) {
            const task = queen.shift();
            const node = task[0];
            const level = task[1];
            if (!node) return;
            if (queen[0] && queen[0][1] === level) {
                node.next = queen[0][0];
            } 
            if (node.left) queen.push([node.left, level + 1]);
            if (node.right) queen.push([node.right, level + 1]);
        }
    }

    search();
    return root;
};

