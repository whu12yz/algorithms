/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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
    recur(root);
    return root;
};

function recur (level) {
    
    // This is a left
    if (level === null || level.left === null) {
        return;
    }
    // Populate the next edges at the children
    // of the current level
    populateLevel(level);
    
    
    // This level is done, so move on to the next one
    recur(level.left)
    
    
}

function populateLevel(level) {
    if (level === null) {
        return;
    }
    level.left.next = level.right;
    if (level.next != null) {
        level.right.next = level.next.left;
    }
    populateLevel(level.next)
}

