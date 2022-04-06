var findMinHeightTrees = function (n, edges) {
    let res = [];
    if (n === 1) {
        return [0];
    }
    // 建立各个节点的出度表
    let degree = new Array(n).fill(0);
    // 建立图关系
    let map = new Map();
    for (let edge of edges) {
        if (!map.has(edge[0])) {
            map.set(edge[0], []);
        }
        map.get(edge[0]).push(edge[1]);
        if (!map.has(edge[1])) {
            map.set(edge[1], []);
        }
        map.get(edge[1]).push(edge[0]);
        ++degree[edge[0]];
        ++degree[edge[1]];
    }
    // bsf
    let queue = [];
    for (let i = 0; i < n; ++i) {
        if (degree[i] === 1) {
            queue.push(i);
        }
    }
    while (queue.length) {
        res = [];
        let size = queue.length;
        while (size--) {
            let cur = queue.shift();
            res.push(cur);
            let children = map.get(cur);
            for (let child of children) {
                --degree[child];
                if (degree[child] === 1) {
                    queue.push(child);
                }
            }
        }
    }
    return res;
}