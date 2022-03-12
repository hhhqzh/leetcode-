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
    this.root = root;
    this.parent = root;
    this.q = [root];
    while (this.q.length) {
        let size = this.q.length;
        let flag = 0;
        while (size--) {
            let node = this.q.shift();
            if (node.left && node.right) {
                this.q.push(node.left);
                this.q.push(node.right);
            } else {
                this.parent = node;
                if (node.left !== null)
                    this.q.push(node.left);
                if (node.right !== null)
                    this.q.push(node.right);
                flag = 1;
                break;
            }
        }
        if (flag === 1)
            break;
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
    let node = new TreeNode(val);
    if (this.parent.left !== null)
        this.parent.right = node;
    else
        this.parent.left = node;
    this.q.push(node);
    let p = this.parent.val;
    if (this.parent.left !== null && this.parent.right !== null) {
        this.parent = this.q.shift();
    }
    return p;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
    return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */