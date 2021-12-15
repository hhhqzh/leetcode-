var loudAndRich = function (richer, quiet) {
    let n = quiet.length;
    let res = new Array(n).fill(0).map((value, idx) => {
        return idx；
    });
    let map = new Map(); // map[a] 保存 a 指向 b 的所有 b
    let inDegree = new Array(n).fill(0); // 保存各个节点的入度
    for (let r of richer) {
        ++inDegree[r[1]];
        if (map.has(r[0])) {
            let t = map.get(r[0]);
            t.push(r[1]);
            map.set(r[0], t);
        } else {
            map.set(r[0], [r[1]]);
        }
    }
    // 拓扑排序队列，里面是入度为0的节点
    let queue = new Array();
    inDegree.forEach((degree, index) => {
        if (degree === 0) {
            queue.push(index);
        }
    })

    // dfs 超时
    // minQuiet 表示节点 start 之前的最小安静值的下标
    // const dfs = (start, minQuietIdx) => {
    //     let idx = res[start];
    //     if (quiet[idx] > quiet[minQuietIdx]) {
    //         idx = minQuietIdx;
    //     }
    //     res[start] = idx;
    //     if (map.has(start)) {
    //         let temp = map.get(start);
    //         for (let t of temp) {
    //             dfs(t, res[start]);
    //         }
    //     }
    // }

    // for (let t of queue) {
    //     dfs(t, res[t]);
    // }

    // 拓扑
    while (queue.length) {
        let node = queue.shift();
        if (map.has(node)) {
            let temp = map.get(node);
            for (let t of temp) {
                --inDegree[t];
                if (inDegree[t] === 0) {
                    queue.push(t);
                }
                if (quiet[res[node]] < quiet[res[t]]) {
                    res[t] = res[node];
                }
            }
        }
    }

    return res;
};