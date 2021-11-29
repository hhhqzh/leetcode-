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
var CBTInserter = function (root) {
    this.nodeList = [];
    let queue = [root];
    while (queue.length !== 0) {
        let node = queue.shift();
        this.nodeList.push(node);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function (v) {
    let node = new TreeNode(v);
    this.nodeList.push(node);
    let index = Math.floor(this.nodeList.length / 2) - 1;
    let parent = this.nodeList[index];
    if (parent.left === null) {
        parent.left = node;
    } else {
        parent.right = node;
    }
    return parent.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
    return this.nodeList[0];
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */