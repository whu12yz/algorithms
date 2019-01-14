/**
 * 旋转链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 1 -> 2 -> 3 -> 4 -> NULL
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 先变成循环链表，再从给定位置断开
var rotateRight = function(head, k) {
    let staticHead = head;
    // 变为循环链表
    let cur = head;
    let len = 1;
    if (!head) {
        return head;
    }
    while(cur.next) {
        cur = cur.next;
        len++;
    }
    cur.next = head;

    let breakpoint = head;
    let count = len - k % len;
    while(count > 1) {
        breakpoint = breakpoint.next;
        count--;
    }
    const result = breakpoint.next;
    breakpoint.next = null;
    return result;
};


const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

console.log(rotateRight(head, 2));