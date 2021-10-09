var insertIntoMaxTree = function (root, val) {

    const dfs = (root, val) => {
        if (root === null) {
            return new TreeNode(val);
        }
        if (root.val > val) {
            root.right = dfs(root.right, val);
            return root;
        } else {
            let node = new TreeNode(val);
            node.left = root;
            return node;
        }
    }

    return dfs(root, val);
};