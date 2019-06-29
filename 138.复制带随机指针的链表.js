/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, result = new WeakMap()) {
    if (!head) return null;
    if (result.has(head)) {
        return result.get(head);
    }
    var a = new Node(head.val);
    result.set(head, a)
    a.next = copyRandomList(head.next, result);
    a.random = copyRandomList(head.random, result);
    return a;
    
};

