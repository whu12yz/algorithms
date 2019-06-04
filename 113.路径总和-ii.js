/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var deepCopy = function(arr) {
        return JSON.parse(JSON.stringify(arr));
    }
    var list = [];
    var res = [];

    var search = function(node) {
        if (!node) return null;
        res.push(node.val);
        if (!node.left && !node.right) {
            var total = res.reduce((a, b) => a+b);
            if (total === sum) {
                list.push(deepCopy(res));
            }
        }
        search(node.left);
        search(node.right);
        res.pop()
    }
    search(root);
    return list;
};

