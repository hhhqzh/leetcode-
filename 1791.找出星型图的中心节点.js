/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let map = new Map();
    for (let edge of edges) {
        if (!map.has(edge[0])) {
            map.set(edge[0], 0);
        }
        if (!map.has(edge[1])) {
            map.set(edge[1], 0);
        }
        map.set(edge[0], map.get(edge[0]) + 1);
        map.set(edge[1], map.get(edge[1]) + 1);
        if (map.get(edge[0]) > 1) {
            return edge[0];
        }
        if (map.get(edge[1]) > 1) {
            return edge[1];
        }
    }
    return -1;
};

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    return edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] ? edges[0][0] : edges[0][1];
};