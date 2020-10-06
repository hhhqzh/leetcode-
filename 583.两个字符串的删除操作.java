// 转换为求两个字符串的最长公共子序列问题
class Solution {
    public int minDistance(String word1, String word2) {
        int n1 = word1.length(), n2 = word2.length();
        int [][]dp = new int[n1 + 1][n2 + 1];
        for(int i = 1; i <= n1; ++i){
            for(int j = 1; j <= n2; ++j){
                if(word1.charAt(i - 1) == word2.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        return n1 + n2 - 2 * dp[n1][n2];
    }
}