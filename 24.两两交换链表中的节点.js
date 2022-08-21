/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let pre = dummy;
    
    while(pre.next && pre.next.next) {
        //缓存2.next
        const temp = pre.next.next.next;

        //执行交换
        pre.next.next.next = pre.next;
        pre.next = pre.next.next;
        pre.next.next.next = temp;

        pre = pre.next.next;
    }
    return dummy.next;


};
// @lc code=end

