/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var deleteDuplicates = function(head) {
    let start = new ListNode(0);
    start.next = head;
    while (start.next) {
        if (start.next.next && (start.next.val == start.next.next.val)) {
            start.next = start.next.next.next;
        }
        start = start.next
    }
    return head;
};
const head = new ListNode(1);
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(4)
head.next.next.next.next.next = new ListNode(4)
head.next.next.next.next.next.next = new ListNode(4)
console.log(deleteDuplicates(head));
