/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     if (root === null) {
//         return true;
//     }
//     return check(root.left, root.val, root.right, root.val);
// };
// var check = function(left, value, right, rootVal) {
//     let leftCheck = false;
//     let rightCheck = false;
//     console.log(left);
//     console.log(right);
//     if ((value > rootVal) && (left && left.val <= rootVal)) {
//         leftCheck = false;
//     } else if (left && left.val < value) {
//         leftCheck = check(left.left, left.val, left.right, rootVal)
//     } else if(left && left.val >= value) {
//         leftCheck = false;
//     } else if(!left){
//         leftCheck = true;
//     }

//     if ((value < rootVal) && (right && right.val >= rootVal)) {
//         rightCheck = false;
//     } else if (right && right.val > value) {
//         rightCheck = check(right.left, right.val, right.right, rootVal);
//     } else if (right && right.val <= value) {
//         rightCheck = false;
//     } else if(!right){
//          rightCheck = true;
//     }
//     return leftCheck && rightCheck;
// }
var isValidBST = function(root) {
    const isValid = (root, low, high) => {
        if (!root) {return true}
        if (root.val <= low || root.val >= high) { return false }
        if (root.left && root.val <= root.left.val ) { return false }
        if (root.right && root.val >= root.right.val ) { return false }
        
        return isValid(root.left, Math.min(root.val, low), Math.min(root.val, high)) && isValid(root.right, Math.max(root.val, low), Math.max(root.val, high))
    }
    return isValid(root, -Infinity, Infinity)
};

// 备注： 二叉树的深度遍历方法，从左到右深度优先遍历，直到null停止

