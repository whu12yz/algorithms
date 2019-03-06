/**
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:

输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3


   假设n个节点存在二叉排序树的个数是G(n)，1为根节点，2为根节点，...，n为根节点，当1为根节点时，其左子树节点个数为0，右子树节点个数为n-1，同理当2为根节点时，其左子树节点个数为1，右子树节点为n-2，所以可得G(n) = G(0)*G(n-1)+G(1)*(n-2)+...+G(n-1)*G(0)
 */

/**
 * @param {number} n
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var numTrees = function(n) {
    if (n === 0) return 0;
    return generateSubTree(1, n).length;
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
};

console.log(numTrees(19));