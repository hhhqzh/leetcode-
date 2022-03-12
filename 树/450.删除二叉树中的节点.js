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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    let pre = new TreeNode(0);
    let newNode = pre;
    pre.right = root;
    let node = root;

    const dfs = (node, pre, k, flag) => {
        if (node === null)
            return;
        if (node.val === k) {
            if (node.right === null) {
                if (flag === 0)
                    pre.left = node.left;
                else
                    pre.right = node.left;
            } else {
                let p = node;
                let t = node.right;
                while(t.left !== null) {
                    p = t;
                    t = t.left;
                }
                node.val = t.val;
                if (p == node)
                    p.right = t.right;
                else
                    p.left = t.right;
            }
        } else if (node.val > k) {
            dfs(node.left, node, k, 0);
        } else {
            dfs(node.right, node, k ,1);
        }
    }
    
    dfs(node, pre, key, 1);
    return newNode.right;
};