/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// var connect = function(root) {
//     const level = 0;
//     let queen = [[root, level]];
//     var search = function() {
//         while (queen.length) {
//             const task = queen.shift();
//             const node = task[0];
//             const level = task[1];
//             if (!node) return;
//             if (queen[0] && queen[0][1] === level) {
//                 node.next = queen[0][0];
//             } 
//             if (node.left) queen.push([node.left, level + 1]);
//             if (node.right) queen.push([node.right, level + 1]);
//         }
//     }

//     search();
//     return root;
// };

var connect = (root) => {
    recur(root);
    return root;
}

// Recursive version
function recur (level) {
    
    // This is a left
    if (level === null || level.left === null) {
        return;
    }
    // Populate the next edges at the children
    // of the current level
    populateLevel(level);
    
    
    // This level is done, so move on to the next one
    recur(level.left)
    
    
}

function populateLevel(level) {
    if (level === null) {
        return;
    }
    level.left.next = level.right;
    if (level.next != null) {
        level.right.next = level.next.left;
    }
    populateLevel(level.next)
}



