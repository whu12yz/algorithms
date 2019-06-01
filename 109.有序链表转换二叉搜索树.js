/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;
    if (!head.next) return new TreeNode(head.val);
    var findMid = function(head) {
        // 快慢指针实现链表中点查询
        // 快指针对走一步，可以让慢指针定位到中点前一个，方便将其置空
        let fast = head.next.next;
        let slow = head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
    var slow = findMid(head);
    var tmp = slow.next;
    slow.next = null;
    var root = new TreeNode(tmp.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(tmp.next);
    return root;
};

