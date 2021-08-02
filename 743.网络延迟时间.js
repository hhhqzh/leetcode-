/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    var graph = new Array(n + 1).fill(0).map(() => { return new Array(n + 1).fill(101) });
    for (let i = 1; i <= n; ++i)
        graph[i][i] = 0;
    for (let i = 0; i < times.length; ++i)
        graph[times[i][0]][times[i][1]] = times[i][2];
    var visited = new Array(n + 1).fill(false);
    visited[k] = true;
    for (let i = 1; i < n; ++i) {
        let min_id = 0, min_dis = 101;
        for (let j = 1; j <= n; ++j) {
            if (visited[j] == false && graph[k][j] < min_dis) {
                min_dis = graph[k][j];
                min_id = j;
            }
        }
        visited[min_id] = true;
        for (let i = 1; i <= n; ++i) {
            if (graph[k][min_id] + graph[min_id][i] < graph[k][i])
                graph[k][i] = graph[k][min_id] + graph[min_id][i]
        }
    }
    var res = 0;
    for (let i = 1; i <= n; ++i) {
        if (graph[k][i] == 101)
            return -1;
        res = Math.max(res, graph[k][i]);
    }
    return res;
};