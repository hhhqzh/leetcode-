/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    let m = img.length,
        n = img[0].length;
    let res = new Array(m).fill(0).map(() => {
        return new Array(n).fill(0)
    });
    let dirs = [
        [0, 0],
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1]
    ];

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            let count = 0,
                sum = 0;
            for (let dir of dirs) {
                let a = i + dir[0],
                    b = j + dir[1];
                if (a >= 0 && a < m && b >= 0 && b < n) {
                    ++count;
                    sum += img[a][b];
                }
            }
            res[i][j] = Math.floor(sum / count);
        }
    }
    return res;
};