/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 递归法
function reverseNode(head) {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = reverseNode(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}

// 迭代法 (两个指针 head和newHead)
// function reverseNode(head) {
//     if (head === null || head.next === null) {
//         return head;
//     }
//     let newHead = null;
//     while(head) {
//         const tmp = head.next;
//         head.next = newHead;
//         newHead = head;
//         head = tmp;
//     }
//     return newHead;
// }

function conbine(list, reversedList) {
    let virtualList = list;
    while(reversedList) {
        const tmp = virtualList.next;
        const rtmp = reversedList.next;

        virtualList.next = reversedList;
        reversedList.next = tmp;
        reversedList = rtmp;
        virtualList = tmp; 
    } 
    return list;
}

var reorderList = function(head) {
    if (!head) {
        return;
    }

    let fast = head;
    let slow = head;
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    const reversdList = reverseNode(slow.next);
    slow.next = null;

    conbine(head, reversdList);
}

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
reverseNode(head);

// reorderList(head);
