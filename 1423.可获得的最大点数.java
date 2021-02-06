class Solution {
    public int maxScore(int[] cardPoints, int k) {
        int n = cardPoints.length;
        int sum = 0;
        int r = 0;
        int min = Integer.MAX_VALUE;
        int length = n - k;
        for(int cardPoint: cardPoints) {
            sum += cardPoint;
        }
        int t = 0;
        for(int i = 0; i < n; ++i) {
            t += cardPoints[i];
            if(i >= length) 
                t -= cardPoints[i - length];
            if(i >= length - 1)
                min = Math.min(min, t);
        }
        return sum - min;
    }
}