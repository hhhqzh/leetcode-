/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
// 自己写的递归版本
var recoverFromPreorder = function (traversal) {

    const preorder = (traversal, height) => {
        let i = 0;
        while (i < height)
            ++i;
        let k = i + 1;
        while (k < traversal.length && traversal[k] !== '-')
            ++k;
        let val = parseInt(traversal.slice(i, k));
        let tree = new TreeNode(val);
        let c = 0;
        let j = traversal.length - 1;
        while (j >= k && c != height + 1) {
            c = 0;
            while (traversal[j] !== '-')
                --j;
            while (j >= k && traversal[j] === '-') {
                ++c;
                --j;
            }
        }
        if (c !== 0)
            ++j;
        if (j !== traversal.length - 1) {
            if (j - k === 0) // 只有一个节点
                tree.left = preorder(traversal.slice(k), height + 1);
            else {
                tree.left = preorder(traversal.slice(k, j), height + 1);
                tree.right = preorder(traversal.slice(j), height + 1);
            }

        }
        return tree;
    }

    return preorder(traversal, 0);
};

// 题解的迭代版本
/*
    用栈来模拟递归 + 回溯。
    S 是上一个节点， T 是当前节点。
    如果 T 是 S 的左子节点，那么 T 的深度恰好比 S 的深度大 1；在其它的情况下，T 是栈中某个节点（不包括 S）的右子节点，那么我们将栈顶的节点不断地出栈，直到 T 的深度恰好比栈顶节点的深度大 1，此时我们就找到了 T 的双亲节点。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
 var recoverFromPreorder = function (traversal) {
    let stack = new Array();
    let pos = 0;
    while (pos < traversal.length) {
        let height = 0; // 保存当前节点的高度
        while (traversal[pos] === '-') {
            ++pos;
            ++height;
        }
        let val = 0; // 保存当前节点的值
        while (pos < traversal.length && traversal[pos] >= '0' && traversal[pos] <= '9') {
            val = val * 10 + parseInt(traversal[pos]);
            ++pos;
        }
        let node = new TreeNode(val);
        if (height === stack.length) { // 上一个节点的高度比当前节点的高度大1，则当前节点时上一个节点的子节点
            if (stack.length > 0) {
                stack[stack.length - 1].left = node;
            }
        } else {
            while (height !== stack.length) {
                stack.pop();
            }
            stack[stack.length - 1].right = node;
        }
        stack.push(node);
    }
    return stack[0];
};