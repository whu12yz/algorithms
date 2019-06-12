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
    populateLevel(root);
    return root;
};

function populateLevel(level) {
    if (!level) {
        return;
    }

    let t = level.next;
    while (t) {
        if (t.left) {
            t = t.left;
            break;
        }
        if (t.right) {
            t = t.right;
            break;
        }
        t = t.next;
    }
    if (level.left) {
        level.left.next = level.right || t;
    }
    if (level.right) {
        level.right.next = t;
    }
    populateLevel(level.right);
    populateLevel(level.left);
}

