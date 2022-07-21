/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let root = head;
    // 初始化链表长度0
    let len = 1;

    // 新增一个节点指向头结点
    let dummy = new ListNode(0, head);
    let point2 = dummy;
    let i = 0;

    while (root.next) {
        len ++;
        root = root.next;
    }
    while (len - n !== i) {
       point2 = point2.next;
       i ++; 
    }
    point2.next = point2.next.next;
    return dummy.next;
};


// 双指针解法
// @lc code=end

