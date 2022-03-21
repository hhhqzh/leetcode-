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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let map = new Map();
    const dfs = (root, k) => {
        if (root === null) {
            return false;
        }
        if (map.has(k - root.val)) {
            return true;
        }
        map.set(root.val, 1);
        return dfs(root.left, k) || dfs(root.right, k)
    }
    return dfs(root, k);
};

// 利用BST的特点，与数组两数之和类似，双指针保存最大和最小指针
var findTarget = function (root, k) {
    let ld = [], // 栈顶保存最小指针
        rd = []; // 栈顶保存最大指针
    let node = root;
    while (node !== null) {
        ld.push(node);
        node = node.left;
    }
    node = root;
    while (node !== null) {
        rd.push(node);
        node = node.right;
    }
    let l = ld[ld.length - 1],
        r = rd[rd.length - 1];
    // 与两数之和双指针思路一样
    while (l.val < r.val) {
        let sum = l.val + r.val
        if (sum === k) {
            return true;
        } else if (sum > k) {
            rd.pop();
            node = r.left;
            while (node !== null) {
                rd.push(node);
                node = node.right;
            }
            r = rd[rd.length - 1];
        } else {
            ld.pop();
            node = l.right;
            while (node !== null) {
                ld.push(node);
                node = node.left;
            }
            l = ld[ld.length - 1];
        }
    }
    return false;
}