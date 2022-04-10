/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (node === null) {
        return null;
    }
    let nodeList = new Array();
    let newNode = new Node(node.val);
    nodeList[node.val - 1] = newNode;
    let queue = [
        [node, newNode]
    ];
    while (queue.length) {
        let size = queue.length;
        while (size--) {
            let [node, newNode] = queue.shift();
            let neighbors = node.neighbors;
            for (let child of neighbors) {
                if (hasNeighbors(newNode, child)) {
                    continue;
                }
                let c = nodeList[child.val - 1] ? nodeList[child.val - 1] : new Node(child.val);
                if (!nodeList[child.val - 1]) {
                    nodeList[child.val - 1] = c;
                }
                newNode.neighbors.push(c);
                c.neighbors.push(newNode);
                queue.push([child, c]);
            }
        }
    }
    return newNode;
};

var hasNeighbors = function (node, child) {
    for (let c of node.neighbors) {
        if (c.val == child.val) {
            return true;
        }
    }
    return false;
}