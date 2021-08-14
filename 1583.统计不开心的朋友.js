/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
 var unhappyFriends = function (n, preferences, pairs) {
    if (n == 2)
        return 0;
    let res = new Set();
    let rank = new Array(n).fill(0).map(() => { return new Array(n).fill(0); });
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n - 1; ++j) {
            rank[i][preferences[i][j]] = j;
        }
    }
    for (let i = 0; i < pairs.length - 1; ++i) {
        for (let j = i + 1; j < pairs.length; ++j) {
            var x = pairs[i][0], y = pairs[i][1], u = pairs[j][0], v = pairs[j][1];
            if (rank[x][u] < rank[x][y] && rank[u][x] < rank[u][v]) {
                res.add(x);
            }
            if (rank[x][v] < rank[x][y] && rank[v][x] < rank[v][u]) {
                res.add(x);
            }
            if (rank[y][u] < rank[y][x] && rank[u][y] < rank[u][v]) {
                res.add(y);
            }
            if (rank[y][v] < rank[y][x] && rank[v][y] < rank[v][u]) {
                res.add(y);
            }
            if (rank[u][x] < rank[u][v] && rank[x][u] < rank[x][y]) {
                res.add(u);
            }
            if (rank[u][y] < rank[u][v] && rank[y][u] < rank[y][x]) {
                res.add(u);
            }
            if (rank[v][x] < rank[v][u] && rank[x][v] < rank[x][y]) {
                res.add(v);
            }
            if (rank[v][y] < rank[v][u] && rank[y][v] < rank[y][x]) {
                res.add(v);
            }
        }
    }
    return res.size;
};

/* 
    大佬的思路
    创建长度为 n 的数组 match，如果 x 和 y 配对，则有 match[x]=y以及 match[y]=x。
    遍历从 0 到 n−1 的每位朋友 x，进行如下操作。

    找到与朋友 x 配对的朋友 y。
    找到朋友 y 在朋友 x 的朋友列表中的亲近程度下标，记为 index。
    朋友 x 的朋友列表中的下标从 0 到 index−1 的朋友都是可能的 u。遍历每个可能的 u，找到与朋友 u 配对的朋友 v。(满足条件x 与 u 的亲近程度胜过 x 与 y)
    如果 order[u][x]<order[u][v]，则 x 是不开心的朋友。
 */
var unhappyFriends = function(n, preferences, pairs) {
    const order = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            order[i][preferences[i][j]] = j;
        }
    }
    const match = new Array(n).fill(0);
    for (const pair of pairs) {
        let person0 = pair[0], person1 = pair[1];
        match[person0] = person1;
        match[person1] = person0;
    }
    let unhappyCount = 0;
    for (let x = 0; x < n; x++) {
        const y = match[x];
        const index = order[x][y];
        for (let i = 0; i < index; i++) {
            const u = preferences[x][i];
            const v = match[u];
            if (order[u][x] < order[u][v]) {
                unhappyCount++;
                break;
            }
        }
    }
    return unhappyCount;
};