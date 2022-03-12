/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

// 中序 + 归并
var getAllElements = function (root1, root2) {

    const inorder = (root, res) => {
        if (root === null)
            return;
        inorder(root.left, res);
        res.push(root.val);
        inorder(root.right, res);
    }

    let res1 = [],
        res2 = [];
    inorder(root1, res1);
    inorder(root2, res2);

    let [i, j] = [0, 0];
    while (i < res1.length && j < res2.length) {
        if (res1[i] < res2[j]) {
            ++i;
        } else {
            res1.splice(i, 0, res2[j]);
            ++i;
            ++j;
        }
    }
    if (j < res2.length) {
        res1 = res1.concat(res2.slice(j));
    }
    return res1;
};

// 中序遍历非递归，用两个栈
var getAllElements = function (root1, root2) {
    let res = [];
    let stack1 = [], stack2 = [];
    while (stack1.length > 0 || root1 !== null || stack2.length > 0 || root2 !== null) {
        while (root1 !== null) {
            stack1.push(root1);
            root1 = root1.left;
        }
        while (root2 !== null) {
            stack2.push(root2);
            root2 = root2.left;
        }
        if (stack1.length === 0 && stack2.length === 0)
            break;
        else if (stack1.length > 0 && stack2.length > 0) {
            let node1 = stack1[stack1.length - 1], node2 = stack2[stack2.length - 1];
            if (node1.val > node2.val) {
                stack2.pop();
                root2 = node2.right;
                res.push(node2.val);
            } else {
                stack1.pop();
                root1 = node1.right;
                res.push(node1.val);
            }
        } else if (stack1.length === 0) {
            let node = stack2.pop();
            res.push(node.val);
            root2 = node.right;
        } else {
            let node = stack1.pop();
            res.push(node.val);
            root1 = node.right;
        }
    }
    return res;
}