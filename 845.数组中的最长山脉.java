class Solution {
    public int longestMountain(int[] A) {
        if(A.length < 3 || A == null)
            return 0;
        int cnt = 0;
        for(int i = 1; i < A.length - 1; ++i){
            if(A[i - 1] < A[i] && A[i] > A[i + 1]){
                int l = i - 1, r = i + 1;
                while(l > 0 && A[l] > A[l - 1])
                    --l;
                while(r < A.length - 1 && A[r] > A[r + 1])
                    ++r;
                cnt = Math.max(cnt, r - l + 1);
            }
        }
        return cnt;
    }
} 