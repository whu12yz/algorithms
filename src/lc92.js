/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// 头插法
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reverseBetween = function(head, m, n) {
    let count = 1;
    let start, end, last;
    let result = head;
    let newFragment = null;
    let virtualNode = new ListNode(0);
    virtualNode.next = head;
    while (count <= n) {
        if (count == m) {
           start = virtualNode;
        }
        if (count == n) {
            end = virtualNode.next;
        }
        
        if (count >= m && count <= n) {
            let temp = new ListNode(virtualNode.next.val);
            temp.next = newFragment;
            newFragment = temp;
            if (count == m) {
                last = temp
            }
        }
        virtualNode = virtualNode.next;
        count++;
    }
    last.next = end.next; 
    start.next = newFragment;
    if (m == 1) {
        return start.next;
    }
    return result;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(reverseBetween(head, 1, 5));

var a = [1,3,4,5,7];
var c = a.reduce((result, cur) => {
    result[cur] = cur;
    return result;
}, {});
console.log(c);
a.map((item, index, array) => {

})
a.reduce((result, cur) => {

}, initValue);

Array.prototype.map = function(fn, thisArg) {
    return this.reduce((result, cur, index, array) => {
        thisArg && (fn = fn.bind(thisArg));
        result.push(fn(cur, index, array));
        return result;
    }, []);
}
