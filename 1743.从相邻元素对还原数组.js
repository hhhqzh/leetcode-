/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    var n = adjacentPairs.length + 1;
    var res = new Array(n);
    var map = new Map();
    for (let i = 0; i < n - 1; ++i) {
        map.get(adjacentPairs[i][0]) ? map.get(adjacentPairs[i][0]).push(adjacentPairs[i][1]) : map.set(adjacentPairs[i][0], [adjacentPairs[i][1]]);
        map.get(adjacentPairs[i][1]) ? map.get(adjacentPairs[i][1]).push(adjacentPairs[i][0]) : map.set(adjacentPairs[i][1], [adjacentPairs[i][0]]);
    }

    for (let m of map) {
        if (m[1].length == 1) {
            res[0] = m[0];
            break;
        }
    }

    res[1] = map.get(res[0])[0];

    for (let i = 2; i < n; ++i) {
        const adj = map.get(res[i - 1]);
        res[i] = res[i - 2] == adj[0] ? adj[1] : adj[0];
    }

    return res;
};