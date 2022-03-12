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
 * @return {TreeNode}
 */

// 用中序遍历构建
var balanceBST = function (root) {
    let order = [];

    const inorder = (root) => {
        if (root === null)
            return;
        inorder(root.left);
        order.push(root.val);
        inorder(root.right);
    }

    const bulidBBST = (order, l, r) => {
        if (l > r)
            return null;
        let mid = Math.floor((r - l) / 2) + l;
        let node = new TreeNode(order[mid]);
        node.left = bulidBBST(order, l, mid - 1);
        node.right = bulidBBST(order, mid + 1, r);
        return node;
    }

    inorder(root);

    return bulidBBST(order, 0, order.length - 1);
};

// 构建平衡二叉树
const max = Math.max;

// 平衡二叉树
function AVLTreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.height = 0;
}

const getHeight = (root) => {
    return root === null ? 0 : root.height;
}

const leftLeftRotation = (root) => {
    let l = root.left;
    root.left = l.right;
    l.right = root;
    root.height = max(getHeight(root.left), getHeight(root.right)) + 1;
    l.height = max(getHeight(l.left), getHeight(l.right)) + 1;
    return l;
}

const rightRightRotation = (root) => {
    let r = root.right;
    root.right = r.left;
    r.left = root;
    root.height = max(getHeight(root.left), getHeight(root.right)) + 1;
    r.height = max(getHeight(r.left), getHeight(r.right)) + 1;
    return r;
}

const leftRightRatation = (root) => {
    root.left = rightRightRotation(root.left);
    return leftLeftRotation(root);
}

const rightLeftRatation = (root) => {
    root.right = leftLeftRotation(root.right);
    return rightRightRotation(root);
}

const insertNode = (root, val) => {
    if (root === null)
        root = new AVLTreeNode(val);
    else if (val < root.val) {
        root.left = insertNode(root.left, val);
        if (getHeight(root.left) - getHeight(root.right) === 2) {
            if (root.left.val > val) {
                root = leftLeftRotation(root);
            } else {
                root = leftRightRatation(root);
            }
        }
    } else {
        root.right = insertNode(root.right, val);
        if (getHeight(root.right) - getHeight(root.left) === 2) {
            if (root.right.val < val) {
                root = rightRightRotation(root);
            } else {
                root = rightLeftRatation(root);
            }
        }
    }
    root.height = max(getHeight(root.left), getHeight(root.right)) + 1;
    return root;
}

// 把 AVLTreeNode 转换为 TreeNode
const buildTree = (root) => {
    if (root === null)
        return null;
    let node = new TreeNode(root.val);
    node.left = buildTree(root.left);
    node.right = buildTree(root.right);
    return node;
}

var balanceBST = function (root) {

    // 用 TreeNode 构建 AVLTree
    // root 为 TreeNode

    let avlTree = null;

    const buildBBST = (root) => {
        if (root === null)
            return;
        avlTree = insertNode(avlTree, root.val);
        buildBBST(root.left);
        buildBBST(root.right);
    }

    buildBBST(root);
    return buildTree(avlTree);
};