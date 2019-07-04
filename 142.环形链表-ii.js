/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const helper = function(node, con = new WeakMap()) {
        if (con.has(node)) return con.get(node);
        if (!node) return null;

        con.set(node, node);
        while(node.next) {
            return helper(node.next, con);
        }
        return null;
    }
    return helper(head)

};

// 快慢指针可实现不使用额外空间

