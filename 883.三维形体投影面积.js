/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let res = 0,
        n = grid.length,
        z = 0;
    for (let i = 0; i < n; ++i) {
        let maxX = 0,
            maxY = 0;
        for (let j = 0; j < n; ++j) {
            maxY = Math.max(maxY, grid[i][j]);
            maxX = Math.max(maxX, grid[j][i]);
            if (grid[i][j] !== 0) {
                ++z;
            }
        }
        res += maxX + maxY;
    }
    res += z;
    return res;
};