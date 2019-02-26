/**
 * 给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// 递归解法
var inorderTraversal = function(root) {
    const result = [];
    inorder(root, result);
    function inorder(root, res) {
        if (!root) return;
        if (root.left) {
            inorder(root.left, res);
        }
        res.push(root.val);
        if (root.right) {
            inorder(root.right, res);
        }
    }
    return result
};

// 迭代解法，使用栈
var inorderTraversal = function (root) {
    const stack = [];
    const res = [];
    while(root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}