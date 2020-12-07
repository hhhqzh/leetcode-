// 每一行的第一个都需要要为1
// 从第二列开始，每一列1的个数比0多

// 力扣题解：无需翻转，而是可以计算每一列对总分数的「贡献」
class Solution {
    public int matrixScore(int[][] A) {
        int m = A.length, n = A[0].length;
        int res = m * (1 << (n - 1)); // 2^(n-1)
        for(int j = 1; j < n; ++j){
            int count = 0; // 计算该列值为1的数目
            for(int i = 0; i < m; ++i){
                if(A[i][0] == 1)
                    count += A[i][j];
                else
                    count += (1 - A[i][j]); // 如果该行的第一个不为1，则需进行反转
            }
            res += Math.max(count, m - count) * (1 << (n - j - 1));
        }
        return res;
    }
}