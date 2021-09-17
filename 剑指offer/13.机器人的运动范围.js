/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let res = 0;
    let vis = new Array(m).fill(0).map(() => {
        return new Array(n).fill(false);
    });
    vis[0][0] = true;
    let dis = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ];

    const dfs = (row, col, k) => {
        let str = row + "" + col + "";
        let count = 0;
        for (let s of str) {
            count += parseInt(s);
        }
        if (count > k) {
            return;
        }
        ++res;
        for (let i = 0; i < dis.length; ++i) {
            let r = row + dis[i][0],
                c = col + dis[i][1];
            if (r >= 0 && r < m && c >= 0 && c < n && !vis[r][c]) {
                vis[r][c] = true;
                dfs(r, c, k);
            }
        }
    }

    dfs(0, 0, k);

    return res;
};