/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) {
        return list2;
    } 
    if (list2 === null) { 
        return list1;
    }
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } 
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
};

// 迭代法
// var mergeTwoLists = function(l1, l2) {
//     const dummy = new ListNode(-1);
//     let prev = dummy;

//     while (l1 !== null && l2 !== null) {
//         if (l1.val < l2.val) {
//             prev.next = l1;
//             l1 = l1.next;
//         } else {
//             prev.next = l2;
//             l2 = l2.next;
//         }
//         prev = prev.next;
//     }
//     prev.next = l1 === null ? l2 : l1;

//     return dummy.next;
// }


// @lc code=end

