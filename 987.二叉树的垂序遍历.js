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
var verticalTraversal = function (root) {
    if (root == null)
        return [];
    var res = new Map();
    var q = [[root, 0]];
    while (q.length) {
        var len = q.length;
        var map = new Map();
        while (len--) {
            var cur = q.shift();
            if (map.has(cur[1])) {
                var temp = map.get(cur[1]);
                temp.push(cur[0].val);
                map.set(cur[1], temp);
            } else {
                map.set(cur[1], [cur[0].val]);
            }
            if (cur[0].left)
                q.push([cur[0].left, cur[1] - 1]);
            if (cur[0].right)
                q.push([cur[0].right, cur[1] + 1]);
        }
        for (var m of map) {
            if (res.has(m[0])) {
                var t = res.get(m[0]);
                t = t.concat(m[1].sort(function (a, b) { return a - b; }));
                res.set(m[0], t);
            } else {
                res.set(m[0], m[1].sort(function (a, b) { return a - b; }));
            }
        }
    }
    res = Array.from(res).sort(function (a, b) { return a[0] - b[0] });
    var ans = [];
    for (let i = 0; i < res.length; ++i) {
        ans.push(res[i][1]);
    }
    return ans;
};