/**
 * @param {number[][]} graph
 * @return {number[]}
 */
/**
 *  该题无需构建图，数据量太大可能会溢出！！！
 *  dfs + 三色标记
 *  visited为0表示为访问过，为1表示已访问过，2表示安全节点。
 */

var eventualSafeNodes = function(graph) {
    var n = graph.length;
    var res = [];
    // 0表示未访问，1表示访问过，2表示安全
    var visited = new Array(n).fill(0);
    const dfs = (index) => {
        if (visited[index] != 0) {
            return visited[index] === 2;
        }
        visited[index] = 1;
        for (const i of graph[index]) {
            if (!dfs(i))    return false;
        }
        // 下游全部遍历完，则安全
        visited[index] = 2;
        return true;
    };
    
    for (var i = 0; i < n; ++i) {
        if (dfs(i))
            res.push(i);
    }
    return res;
};