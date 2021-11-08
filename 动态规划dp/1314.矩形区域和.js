/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
// 暴力超时
var matrixBlockSum = function (mat, k) {
    let m = mat.length,
        n = mat[0].length;
    let answer = new Array(m).fill(0).map(() => {
        return new Array(n).fill(0)
    });
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            for (let r = i - k; r <= i + k; ++r) {
                for (let c = j - k; r <= j + k; ++c) {
                    if (r >= 0 && r < m && c >= 0 && c < n) {
                        answer[i][j] += mat[r][c];
                    }
                }
            }
        }
    }
    return answer;
};


var matrixBlockSum = function (mat, k) {
    let m = mat.length,
        n = mat[0].length;
    let answer = new Array(m).fill(0).map(() => {
        return new Array(n).fill(0)
    });
    // dp[i][j] 表示数组 mat 从 (0,0) 到 (i,j) 的元素和
    let dp = new Array(m + 1).fill(0).map(() => {
        return new Array(n + 1).fill(0)
    });
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            dp[i][j] = mat[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
        }
    }
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            let ik = i + k > m ? m : i + k;
            let jk = j + k > n ? n : j + k;
            let ik1 = i - k - 1 < 0 ? 0 : i - k - 1;
            let jk1 = j - k - 1 < 0 ? 0 : j - k - 1;
            answer[i - 1][j - 1] = dp[ik][jk] - dp[ik1][jk] - dp[ik][jk1] + dp[ik1][jk1];
        }
    }
    return answer;
};

// 动态规划、dp[i][j]是矩形中所有单元格从(0,0)到(i,j)的和
var matrixBlockSum = function (mat, k) {
    let m = mat.length, n = mat[0].length;
    let answer = new Array(m).fill(0).map(() => { return new Array(n).fill(0) });
    // dp[i][j] 表示数组 mat 从 (0,0) 到 (i,j) 的元素和
    let dp = new Array(m + 1).fill(0).map(() => { return new Array(n + 1).fill(0) });
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            dp[i][j] = mat[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
        }
    }
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            let ik = i + k > m ? m : i + k;
            let jk = j + k > n ? n : j + k;
            let ik1 = i - k - 1 < 0 ? 0 : i - k - 1;
            let jk1 = j - k - 1 < 0 ? 0 : j - k - 1;
            answer[i - 1][j - 1] = dp[ik][jk] - dp[ik1][jk] - dp[ik][jk1] + dp[ik1][jk1]; 
        }
    }
    return answer;
};