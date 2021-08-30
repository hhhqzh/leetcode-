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
 let map = new Map();
 var rob = function (root) {
 
     // 0表示选中的最大值，1表示未选中的最大值
     // const dfs = (root) => {
     //     if (!root)
     //         return [0, 0];
     //     let l = dfs(root.left);
     //     let r = dfs(root.right);
     //     let selected = root.val + l[1] + r[1];
     //     let noSelected = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
     //     return [selected, noSelected];
     // }
 
     // let val = dfs(root);
     // return Math.max(val[0], val[1]);
 
     // 单纯递归超时，记录已经访问的值就不超时
     if (!root)
         return 0;
     if (map.has(root))
         return map.get(root);
     let val = root.val;
     if (root.left)
         val += rob(root.left.left) + rob(root.left.right);
     if (root.right)
         val += rob(root.right.left) + rob(root.right.right);
     let res = Math.max(val, rob(root.left) + rob(root.right));
     map.set(root, res);
     return res;
 };
 
 