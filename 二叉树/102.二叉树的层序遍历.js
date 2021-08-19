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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (root == null)
        return [];
    let queue = [root];
    let res = [];
    while (queue.length) {
        let size = queue.length;
        let arr = [];
        while(size--) {
            let temp = queue.shift();
            arr.push(temp.val);
            if (temp.left !== null)
                queue.push(temp.left);
            if (temp.right !== null)
                queue.push(temp.right);
        }
        res.push(arr);
    }
    return res;
};

var levelOrder = function (root) {
    if (root === null)
        return [];
    let queue = [root];
    let res = [];
    let arr = [];
    let lastNode = root;
    let newNode = null;
    while (queue.length) {
        let temp = queue.shift();
        arr.push(temp.val);
        if (temp.left !== null) {
            queue.push(temp.left);
            newNode = temp.left;
        }
        if (temp.right !== null) {
            queue.push(temp.right);
            newNode = temp.right;
        }
        if (lastNode === temp) {
            lastNode = newNode;
            res.push([].concat(arr));
            arr = [];
        }
    }
    return res;
};