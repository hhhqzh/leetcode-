/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function (matrix) {
    let [n1, n2, m1, m2] = [0, matrix.length - 1, 0, matrix[0].length - 1];

    let res = [];

    while (n1 <= n2 && m1 <= m2) {
        for (let i = m1; i <= m2; ++i)
            res.push(matrix[n1][i]);
        ++n1;
        for (let i = n1; i <= n2; ++i)
            res.push(matrix[i][m2]);
        --m2;
        for(let i = m2; i >= m1 && n1 <= n2; --i)
            res.push(matrix[n2][i]);
        --n2;
        for(let i = n2; i >= n1 && m1 <= m2; --i)
            res.push(matrix[i][m1]);
        ++m1;
    }

    return res;
};