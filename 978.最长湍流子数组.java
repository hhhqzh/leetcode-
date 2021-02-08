class Solution {
    public int maxTurbulenceSize(int[] arr) {
        int n = arr.length;
        int res = 1;
        int l = 0, r = 0;
        while(r < n - 1) {
            if(l == r) {
                if(arr[l] == arr[l + 1])
                    ++l;
                ++r;
            } else {
                if(arr[r - 1] < arr[r] && arr[r] > arr[r + 1]) {
                    ++r;
                } else if(arr[r - 1] > arr[r] && arr[r] < arr[r + 1]) {
                    ++r;
                } else {
                    l = r;
                }
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}

class Solution {
    public int maxTurbulenceSize(int[] arr) {
        int n = arr.length;
        int res = 1;
        int up = 1, down = 1;
        for(int i = 1; i < n; ++i) {
            if(arr[i- 1] < arr[i]) {
                up = down + 1;
                down = 1;
            } else if(arr[i - 1] >arr[i]) {
                down = up + 1;
                up = 1;
            } else {
                up = down = 1;
            }
            res = Math.max(res, Math.max(down, up));
        }
        return res;
    }
}