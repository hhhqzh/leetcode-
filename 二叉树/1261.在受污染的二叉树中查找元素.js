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
 */
var FindElements = function (root) {
    const dfs = (root) => {
        if (root === null)
            return;
        if (root.left !== null) {
            root.left.val = 2 * root.val + 1;
            dfs(root.left);
        }
        if (root.right !== null) {
            root.right.val = 2 * root.val + 2;
            dfs(root.right);
        }
    }

    root.val = 0;
    dfs(root);
    this.root = root;
};

/** 
 * @param {number} target
 * @return {boolean}
 */

/**
 * 
 * 把二叉树的值全部加1，得到的树为[1, 2, 3, 4, ...]
 * 把每个节点的值转换为二进制为[1, 10, 11, 100, ...]
 * 可以看到，父节点是子节点的前缀，当节点的最后一位为0时是父节点的左子树，为1时是父节点的右子树。
 */
FindElements.prototype.find = function (target) {
    if (target < 0)
        return false;
    let root = this.root;
    ++target;
    // 获取target的次高位
    let count = 0,
        t = target;
    while (t) {
        ++count;
        t >>= 1;
    }
    count -= 2;
    if (count < 0) { // 若target为1
        return true;
    }
    let bit = Math.pow(2, count); // 计算target的次高位
    while (bit > 0 && root !== null) {
        if ((target & bit) === 0)
            root = root.left
        else
            root = root.right;
        bit >>= 1;
    }
    return root !== null;
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */