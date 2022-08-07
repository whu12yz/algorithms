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
// function inorderTraversal(root){
//   const res = [];
//   const inorder = (root)=>{
//       if(!root){
//           return;
//       }
//       inorder(root.left);
//       res.push(root.val);
//       inorder(root.right);
//   } 
//   inorder(root);
//   return res;
// }

// 迭代法
function inorderTraversal(root) {
  const stack = [];
  const res = [];
  while(root || stack.length) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    if(stack.length) {
      const current = stack.pop();
      res.push(current.val);
      root = current.right;
    }
  }
  return res;

}

