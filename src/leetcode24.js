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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var swapPairs = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    while (pre.next && pre.next.next) {
        const last = pre.next.next.next;
        pre.next.next.next = pre.next;
        pre.next = pre.next.next;
        pre.next.next.next = last;
        
        pre = pre.next.next;

    }
    return dummy.next;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
// head.next.next.next.next = new ListNode(5);
console.log(swapPairs(head));