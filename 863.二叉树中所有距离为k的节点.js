/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

//  把二叉树转换成无向图，使用无向图的bfs
var distanceK = function (root, target, k) {
    var map = new Map();
    map.set(root.val, [])
    const dfs = (root) => {
        if (root) {
            if (root.left) {
                if (map.has(root.val)) {
                    var arr = map.get(root.val)
                    arr.push(root.left.val)
                    map.set(root.val, arr)
                } else {
                    map.set(root.val, [root.left.val])
                }
                if (map.has(root.left.val)) {
                    var arr = map.get(root.left.val)
                    arr.push(root.val)
                    map.set(root.left.val, arr)
                } else {
                    map.set(root.left.val, [root.val])
                }
            }
            if (root.right) {
                if (map.has(root.val)) {
                    var arr = map.get(root.val)
                    arr.push(root.right.val)
                    map.set(root.val, arr)
                } else {
                    map.set(root.val, [root.right.val])
                }
                if (map.has(root.right.val)) {
                    var arr = map.get(root.right.val)
                    arr.push(root.val)
                    map.set(root.right.val, arr)
                } else {
                    map.set(root.right.val, [root.val])
                }
            }
            dfs(root.left)
            dfs(root.right)
        }
    };

    // 把二叉树转换为图
    dfs(root)
    var visited = new Array(501).fill(false);
    var dis = 0;
    var q = [target.val];
    var res = [target.val];
    while (q.length && dis < k) {
        var ans = [];
        var len = q.length;
        ++dis;
        while (len--) {
            var cur = q.shift();
            visited[cur] = true;
            var arr = map.get(cur);
            if (dis == k) {
                for (let i = 0; i < arr.length; ++i) {
                    if (!visited[arr[i]])
                        ans.push(arr[i])
                }
            } else {
                for (let i = 0; i < arr.length; ++i) {
                    if (!visited[arr[i]])
                        q.push(arr[i])
                }
            }
        }
        res = ans;
    }
    return res;
};