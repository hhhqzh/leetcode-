
    let nodes = [];
    let maxHeight = 0;

    const getHeight = (root, pre, height) => {
        if (root === null)
            return;
        root.parent = pre;
        if (height > maxHeight) {
            maxHeight = height;
            nodes = [root];
        } else if (height === maxHeight) {
            nodes.push(root);
        }
        getHeight(root.left, root, height + 1);
        getHeight(root.right, root, height + 1);
    }

    getHeight(root, null, 0);
    if (nodes.length === 1)
        return nodes[0];
    while (1) {
        let flag = 1;
        for (let i = 1; i < nodes.length; ++i) {
            if (nodes[i].parent !== nodes[i - 1].parent) {
                flag = 0;
                break;
            }
        }
        if (flag === 0) {
            for (let i = 0; i < nodes.length; ++i) {
                nodes[i] = nodes[i].parent;
            }
        } else {
            break;
        }
    }
    return nodes[0].parent;