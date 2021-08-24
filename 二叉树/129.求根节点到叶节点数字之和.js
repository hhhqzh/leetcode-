/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
 var findCheapestPrice = function (n, flights, src, dst, k) {
    // dp
    // let dp = new Array(n).fill(0).map(() => {return new Array(k + 2).fill(Number.MAX_SAFE_INTEGER)});
    // for (let i = 0; i <= k + 1; ++i)
    //     dp[src][i] = 0;
    // for (let i = 1; i <= k + 1; ++i) {
    //     for (const flight of flights) {
    //         if (dp[flight[0]][i - 1] != Number.MAX_SAFE_INTEGER) {
    //             dp[flight[1]][i] = Math.min(dp[flight[1]][i], dp[flight[0]][i - 1] + flight[2]);
    //         }
    //     }
    // }
    // return dp[dst][k + 1] == Number.MAX_SAFE_INTEGER? -1: dp[dst][k + 1];

    // bfs
    let map = new Map();
    for (const flight of flights) {
        if (map.has(flight[0])) {
            let arr = map.get(flight[0]);
            arr.push([flight[1], flight[2]]);
            map.set(flight[0], arr);
        } else {
            map.set(flight[0], [[flight[1], flight[2]]]);
        }
    }

    let queue = [[src, 0]];
    let prices = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    prices[src] = 0;

    while (k-- >= 0) {
        let size = queue.length;
        while (size--) {
            let temp = queue.shift();
            if (map.has(temp[0])) {
                let arr = map.get(temp[0]);
                for (const a of arr) {
                    if (temp[1] + a[1] < prices[a[0]]) {
                        prices[a[0]] = temp[1] + a[1];
                        queue.push([a[0], prices[a[0]]]);
                    }
                }
            }
        }
    }

    return prices[dst] == Number.MAX_SAFE_INTEGER? -1 :prices[dst];
};