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
 * @return {void} Do not return anything, modify root in-place instead.
 */
/*
    两个节点被错误交换，则最多只有两个降序对
    结果中如果有一个降序对，说明该两个node需交换；若有两个降序对，说明第一对的前一个node和第二对的后一个node需要交换。
    O空间复杂读为O(n)可以先中序遍历得到数组，根据降序对找出需要交换的两个节点，再进行替换。
*/

/*
    与98题类似的题解
*/
 var recoverTree = function (root) {
    let last = null;
    let t1 = null, t2 = null;
    const dfs = (root) => {
        if (root == null)
            return;
        dfs(root.left)
        if (last != null && last.val >= root.val) {
            if (t1 == null)
                t1 = last;
            t2 = root;
        }
        last = root;
        dfs(root.right)
    }
    dfs(root);
    var temp = t1.val;
    t1.val = t2.val;
    t2.val = temp;
    return root;
};