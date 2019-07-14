/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
function mergeList(left, right) {
    const dummy = new ListNode();
    dummy.next = left;

    let p1 = dummy;
    let p2 = right;

    while(p1 && p1.next && p2) {
        if (p1.next.val >= p2.val) {
            const ltmp = p1.next;
            const rtmp = p2.next;

            p1.next = p2;
            p2.next = ltmp;
            p2 = rtmp;
        } else {
            p1 = p1.next;
        }
    }

    if (p2) {
        p1.next = p2;
    }
    return dummy.next;
}
var sortList = function(head) {
    let slow = head;
    let fast = head; 
    if (!head || !head.next) {
        return head;
    }

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let right = slow.next;
    slow.next = null;

    const leftNode = sortList(head);
    const rightNode = sortList(right);
    return mergeList(leftNode, rightNode);
};

