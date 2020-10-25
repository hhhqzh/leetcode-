// 枚举山顶，再从山顶向左右两侧扩展找到山脚。
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


// 枚举山顶，用dp算出left[i]和right[i]
// left[i]：索引比i小且比当前元素i小的元素数目
// right[i]：索引比i大且比当前元素i大的元素数目
class Solution {
    public int longestMountain(int[] A) {
        int n = A.length;
        if(n < 3 || A == null)
            return 0;
        int []left = new int[n];
        int []right = new int[n];
        for(int i = 1; i < n; ++i)
            left[i] = A[i - 1] < A[i] ? left[i - 1] + 1 : 0;
        for(int i = n - 2; i >= 0; --i)
            right[i] = A[i] > A[i + 1] ? right[i + 1] + 1 : 0;
        int res = 0;
        for(int i = 0; i < n; ++i){
            if(left[i] > 0 && right[i] > 0)
                res = Math.max(res, left[i] + right[i] + 1);
        }
        return res;
    }
}