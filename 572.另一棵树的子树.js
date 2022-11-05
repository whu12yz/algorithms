/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

    function isEqual(a, b) {
        if (a == null && b == null) {
            return true;
        }
        if (a == null || b == null || a.val !== b.val) {
            return false;
        }

        return isEqual(a.left, b.left) && isEqual(a.right, b.right);
    }

    function dfs(root, subRoot) {
        if (root == null) return false;
        if (isEqual(root, subRoot)) return true;
        return dfs(root.left, subRoot) || dfs(root.right, subRoot);
    }

    return dfs(root, subRoot);

};
// @lc code=end

