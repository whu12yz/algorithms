/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

// function TreeNode(val) {
//       this.val = val;
//       this.left = this.right = null;
//  }
 
// let root = new TreeNode(3);
// root.left = new TreeNode(1);
// root.left.left = new TreeNode(2);
// root.left.right = new TreeNode(2);
// root.right = new TreeNode(4);
// root.right.right = new TreeNode(7);


var deleteNode = function(root, key) {
    let parent;
    let tag;
    let node = root;
    while(node && node.val !== key) {
        parent = node;
        if (key > node.val) {
            node = node.right;
            tag = 'right';
        } else {
            node = node.left;
            tag = 'left';
        }
    }

    // 未查找到节点
    if (!node) {
        return root;
    }

    // delete 分情况

    // 父节点不存在，说明是root
    if (root.val === key) {
        if (!root.left && !root.right) return null;
        if (!root.left) {
            return root.right;
        }
        if (!root.right) {
            return root.left;
        }

        let left = root.left;
        let temp = root.right;
        root = root.right;
        while(temp && temp.left) {
            temp = temp.left;
        }
        temp.left = left;
        return root;
    }

    if (!node.left && !node.right) {
        parent[tag] = null;
        return root;
    }
    if (!node.left && node.right) {
        parent[tag] = node.right;
        return root;
    }
    if (!node.right && node.left) {
        parent[tag] = node.left;
        return root;
    }
    if (node.left && node.right) {
        if (tag === 'right') {
            parent[tag] = node.left;
            let temp = node.left;
            while (temp && temp.right) {
                temp = temp.right;
            }
            temp.right = node.right;
        }
        if (tag === 'left') {
            parent[tag] = node.right;
            let templ = node.right;
            while(templ && templ.left) {
                templ = templ.left;
            }
            templ.left = node.left;
        }
        return root;
    }
};

// deleteNode(root, 2)
// @lc code=end

