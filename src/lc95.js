/**
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。

示例:

输入: 3
输出:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释:
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n <= 0) {
        return new TreeNode(null);
    }
    return generateSubTree(1, n);
    
};
function generateSubTree(start, end) {
    const res = [];
    if (end < start) {
        res.push(null);
        return res;
    } 
    for (let i = start; i <= end; i++) {
        let left = generateSubTree(start, i - 1);
        let right = generateSubTree(i + 1, end);
        for (let j = 0; j < left.length; j ++) {
            for (let k = 0; k < right.length; k ++) {
                root = new TreeNode(i);
                root.left = left[j];
                root.right = right[k]
                res.push(root);
            }
        }
    }
    return res;
}
