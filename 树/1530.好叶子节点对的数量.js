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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
    let parent = new Map(); // 获取每个节点的父节点
    let leaves = new Array(); // 储存叶子节点
    let height = new Map(); // 保存每个叶子节点的高度
    let res = 0;

    const setParent = (root, par, h) => {
        if (root === null)
            return;
        parent.set(root, par);
        if (root.left === null && root.right === null) {
            leaves.push(root);
            height.set(root, h);
        }
        setParent(root.left, root, h + 1);
        setParent(root.right, root, h + 1);
    }

    const getParent = (root1, root2) => {
        let dis = 0;
        let h1 = height.get(root1),
            h2 = height.get(root2);
        while (h1 > h2) {
            root1 = parent.get(root1);
            --h1;
            ++dis;
        }
        while (h2 > h1) {
            root2 = parent.get(root2);
            --h2;
            ++dis;
        }
        while (root1 !== root2) {
            root1 = parent.get(root1);
            root2 = parent.get(root2);
            dis += 2;
        }
        return dis;
    }

    setParent(root, null, 0);
    for (let i = 0; i < leaves.length; ++i) {
        for (let j = i + 1; j < leaves.length; ++j) {
            let dis = getParent(leaves[i], leaves[j]);
            if (dis <= distance)
                ++res;
        }
    }
    return res;
};

// 后续遍历，dfs 返回当前节点所有距离小于等于 distance 的叶子节点的距离
var countPairs = function (root, distance) {
    let res = 0;

    const dfs = (root) => {
        if (root === null)
            return [];
        if (root.left === null && root.right === null)
            return [0];
        let ret = [];
        let left = dfs(root.left);
        for (let l of left) {
            if (l + 1 <= distance)
                ret.push(l + 1);
        }
        let right = dfs(root.right);
        for (let r of right) {
            if (r + 1 <= distance)
                ret.push(r + 1);
        }
        for (let l of left) {
            for (let r of right) {
                res += ((l + r + 2) <= distance);
            }
        }
        return ret;
    }

    dfs(root);
    return res;
};