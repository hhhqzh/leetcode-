/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// 注意！！二叉搜索树，前序序列就能建树
 var serialize = function(root) {
    let data = [];
    const preorder = (root) => {
        if (root !== null) {
            data.push(root.val);
            preorder(root.left);
            preorder(root.right);
        }
    }
    preorder(root);
    return data;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data.length === 0)
        return null;
    
    const buildTree = (data, l, r) => {
        if (l <= r) {
            let root = new TreeNode(data[l]);
            let mid = l + 1;
            while (mid <= r && data[l] > data[mid])
                ++mid;
            root.left = buildTree(data, l + 1, mid - 1);
            root.right = buildTree(data, mid , r);
            return root;
        }
        return null;
    }

    return buildTree(data, 0, data.length - 1);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */