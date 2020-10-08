// dp[i][j]表示word1[1...i]和word2[1...j]之间的最短 编辑距离
// dp[i][j] 可由 dp[i - 1][j - 1] dp[i - 1][j] dp[i][j - 1]来计算出
/**
 * 1. word1[i] == word2[j]
 *      D[i][j]​=min(D[i][j−1]+1,D[i−1][j]+1,D[i−1][j−1])=1+min(D[i][j−1],D[i−1][j],D[i−1][j−1]−1)​
 * 
 * 2. word1[i] != word2[j]
 *      D[i][j]=1+min(D[i][j−1],D[i−1][j],D[i−1][j−1])
 */


class Solution {
    public int minDistance(String word1, String word2) {
        if(word1 == null || word2 == null)
            return 0;
        int m = word1.length(), n = word2.length();
        int [][]dp = new int[m + 1][n + 1];
        for(int i = 0; i <= m; ++i){
            for(int j = 0; j <= n; ++j){
                // 边界状态
                if(i == 0)
                    dp[i][j] = j;
                // 边界状态
                else if(j == 0)
                    dp[i][j] = i;
                else {
                    if(word1.charAt(i - 1) == word2.charAt(j - 1))
                        dp[i][j] = dp[i - 1][j - 1];
                    else
                        dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;
                }
            }
        }
        return dp[m][n];
    }
}