/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
function isNumber(num) {
    return typeof num === 'number';
}

var BSTIterator = function(root) {
    // 中序遍历二叉搜索树
    this.current = -1;
    this.result = [];
    const inorder = function(root, result) {
        if (root === null) return;
        
        if (root.left) {
            inorder(root.left, result);
        }

        result.push(root.val);
        if (root.right) {
            inorder(root.right, result);
        }
    }
    inorder(root, this.result);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.current ++;
    return this.result[this.current];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return  isNumber(this.result[this.current + 1]);
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

