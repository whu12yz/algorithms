/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function(head) {
    if (!head) return null;

    let newHead = head;
    let start = newHead.next;
    newHead.next = null;

    while(start) {
        let currentPointer = newHead;
        if (start.val <= currentPointer.val) {
            const newNode = new ListNode(start.val);
            newNode.next = newHead;
            newHead = newNode;
        }

        while (currentPointer && (start.val > currentPointer.val)) {
            const prevPointer = currentPointer;
            currentPointer = currentPointer.next;
            if (currentPointer && (start.val <= currentPointer.val)) {
                const newNode = new ListNode(start.val);
                prevPointer.next = newNode;
                newNode.next = currentPointer;
                break;
            }
            if (!currentPointer) {
                prevPointer.next = new ListNode(start.val);
            }
        }

        start = start.next;
    }

    return newHead;
};

