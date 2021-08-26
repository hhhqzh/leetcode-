/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// var allPathsSourceTarget = function(graph) {
//     let n = graph.length;
//     let queue = [[0]];
//     let res = [];
//     while (queue.length) {
//         let size = queue.length;
//         while (size--) {
//             let path = queue.shift();
//             let arr = graph[path[path.length - 1]];
//             for (let i = 0; i < arr.length; ++i) {
//                 let temp = [].concat(path);
//                 temp.push(arr[i]);
//                 if (arr[i] === n - 1)
//                     res.push(temp);
//                 else
//                     queue.push(temp);
//             }
//         }
//     }
//     return res;
// };


var allPathsSourceTarget = function(graph) {
    let n = graph.length;
    let res = [];
    let temp = [0];
    let vis = new Array(n).fill(0);
    vis[0] = 1;

    const dfs = (i) => {
        if (i == n - 1) {
            res.push([].concat(temp));
            return;
        }
        for (let index = 0; index < graph[i].length; ++index) {
            if (vis[graph[i][index]] == 0) {
                temp.push(graph[i][index]);
                vis[graph[i][index]] = 1;
                dfs(graph[i][index]);
                vis[graph[i][index]] = 0;
                temp.pop();
            }
        }
    }

    dfs(0);

    return res;
}