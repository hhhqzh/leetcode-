// 前序遍历

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    return rserialize(root, '');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const dataArray = data.split(",");
    return rdeserialize(dataArray);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 const rserialize = (root, str) => {
    if (root === null) {
        str += "None,";
    } else {
        str += root.val + '' + ",";
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }
    return str;
}

const rdeserialize = (dataList) => {
    if (dataList[0] === "None") {
        dataList.shift();
        return null;
    }

    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = rdeserialize(dataList);
    root.right = rdeserialize(dataList);

    return root;
}


// 层次遍历超时
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    return rserialize(root, '');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const dataArray = data.split(",");
    return rdeserialize(dataArray);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 const rserialize = (root, str) => {
    let queue = [root];
    while (queue.length) {
        let t = queue.shift();
        if (t == null)
            str += "#,";
        else {
            str += t.val + '' + ",";
            queue.push(root.left);
            queue.push(root.right);
        }
    }
    return str;
}

const rdeserialize = (dataList) => {
    if (dataList[0] === "#") {
        dataList.shift();
        return null;
    }

    const root = new TreeNode(parseInt(dataList[0]));
    let queue = [root];
    let i = 1;
    while (queue.length) {
        let t = queue.shift();
        if (dataList[i] !== "#") {
            t.left = new TreeNode(parseInt(dataList[i]));
            queue.push(t.left);
        } else {
            t.left = null;
        }
        if (dataList[i + 1] !== "#") {
            t.right = new TreeNode(parseInt(dataList[i + 1]));
            queue.push(t.right);
        } else {
            t.right = null;
        }
        i += 2;
    }

    return root;
}