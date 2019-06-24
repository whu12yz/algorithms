/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, m = new WeakMap()) {
    if (m.has(node)) return m.get(node);

    var result = new Node(node.val);
    const neighbors = node.neighbors;
    m.set(node, result);

    result.neighbors = neighbors.map((node) => {
        return cloneGraph(node, m);
    })
    return result;
};

