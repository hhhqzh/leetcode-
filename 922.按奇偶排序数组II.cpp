class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& A) {
        int i = 0, j = 1;
        int n = A.size();
        while(i < n && j < n){
            while(i < n &&  i % 2 == 0 && A[i] % 2 == 0)
                i += 2;
            while(j < n &&  j % 2 != 0 && A[j] % 2 != 0)
                j += 2;
            if(i < n && j < n){
                int temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
        }
        return A;
    }
};