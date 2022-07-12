/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// var inorderTraversal = function(root) {
    
// };
function inorderTraversal(root){
  const res = [];
  const inorder = (root)=>{
      if(!root){
          return;
      }
      inorder(root.left);
      res.push(root.val);
      inorder(root.right);
  } 
  inorder(root);
  return res;
}

