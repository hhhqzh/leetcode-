/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
// 求次短路径
/**
 * 求最短路径时，每个节点最多只访问一次
 * 求次短路径时，每个节点最多访问两次，且在同一层遍历过程中不会添加重复节点至队列
 */
var secondMinimum = function (n, edges, time, change) {
    let visited = new Array(n + 1).fill(2); // 每个节点最多访问两次
    let visitedTime = new Array(n + 1).fill(-1); // 用节点添加到队列的时间来防止节点重复添加
    let q = new Array();
    let map = new Map();
    for (let edge of edges) {
        if (!map.has(edge[0])) {
            map.set(edge[0], new Array());
        }
        if (!map.has(edge[1])) {
            map.set(edge[1], new Array());
        }
        map.get(edge[0]).push(edge[1]);
        map.get(edge[1]).push(edge[0]);
    }
    q.push(1);
    --visited[1];
    visitedTime[1] = 0;
    let curTime = 0;
    let flag = false;
    while (q.length) {
        let size = q.length;
        // 转红灯
        if (Math.floor(curTime / change) % 2 === 1) {
            curTime += change - curTime % change; // 还剩多转绿等
        }
        curTime += time;
        while (size--) {
            let idx = q.shift();
            if (map.has(idx)) {
                let arr = map.get(idx);
                for (let i = 0; i < arr.length; ++i) {
                    // 该节点以访问两次 or 该节点在这一层已经访问过
                    if (visited[arr[i]] === 0 || curTime <= visitedTime[arr[i]]) {
                        continue;
                    }
                    visitedTime[arr[i]] = curTime;
                    --visited[arr[i]];
                    q.push(arr[i]);
                    // 最后一个节点
                    if (arr[i] === n) {
                        // 最短路径
                        if (!flag) {
                            flag = true;
                        } else {
                            return curTime;
                        }
                    }
                }
            }
        }
    }
    return -1;
};

var secondMinimum = function (n, edges, time, change) {
    let visited = new Array(n + 1).fill(2); // 每个节点最多访问两次
    let sameLayer = new Array(n + 1).fill(false); // 防止同一层操作中节点重复添加
    let q = new Array();
    let map = new Map();
    for (let edge of edges) {
        if (!map.has(edge[0])) {
            map.set(edge[0], new Array());
        }
        if (!map.has(edge[1])) {
            map.set(edge[1], new Array());
        }
        map.get(edge[0]).push(edge[1]);
        map.get(edge[1]).push(edge[0]);
    }
    q.push(1);
    --visited[1];
    let curTime = 0;
    let flag = false;
    while (q.length) {
        let size = q.length;
        // 转红灯
        if (Math.floor(curTime / change) % 2 === 1) {
            curTime += change - curTime % change; // 还剩多转绿等
        }
        curTime += time;
        while (size--) {
            let idx = q.shift();
            if (map.has(idx)) {
                let arr = map.get(idx);
                for (let i = 0; i < arr.length; ++i) {
                    // 该节点以访问两次 or 该节点在这一层已经访问过
                    if (visited[arr[i]] === 0 || sameLayer[arr[i]]) {
                        continue;
                    }
                    sameLayer[arr[i]] = true;
                    --visited[arr[i]];
                    q.push(arr[i]);
                    // 最后一个节点
                    if (arr[i] === n) {
                        // 最短路径
                        if (!flag) {
                            flag = true;
                        } else {
                            return curTime;
                        }
                    }
                }
            }
        }
        sameLayer.map((cur, index, arr) => {
            arr[index] = false;
        })
    }
    return -1;
};