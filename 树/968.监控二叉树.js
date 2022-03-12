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
 * @return {number}
 */
 var minCameraCover = function(root) {
    if (root === null)
        return 0;
    let res = 0;

    //0 表示该节点安装监视器； 1 表示该节点可观察，但是没监视器；2 表示该节点不可观察
    const dfs = (root) => {
        if (root === null)
            return 1;
        let l = dfs(root.left);
        let r = dfs(root.right);
        if (l === 2 || r === 2) {
            ++res;
            return 0;
        } else if (l === 0 || r === 0) {
            return 1;
        } else {
            return 2;
        }
    }

    if (dfs(root) === 2)
        ++res;
    
    return res;
};