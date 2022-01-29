/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
    let m = isWater.length,
        n = isWater[0].length;
    let height = new Array(m).fill(0).map(() => {
        return new Array(n).fill(-1);
    });
    let distance = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    let queue = new Array();
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (isWater[i][j] === 1) {
                queue.push([i, j]);
                height[i][j] = 0;
            }
        }
    }
    // 用shift会超时
    let idx = 0;
    while (idx < queue.length) {
        let [i, j] = queue[idx++];
        for (let d of distance) {
            let x = i + d[0];
            let y = j + d[1];
            if (x < 0 || x >= m || y < 0 || y >= n || height[x][y] !== -1) {
                continue;
            }
            height[x][y] = height[i][j] + 1;
            queue.push([x, y]);
        }
    }
    return height;
};