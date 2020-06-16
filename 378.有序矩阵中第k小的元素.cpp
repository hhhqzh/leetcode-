class Solution {
public:
// 1.找出二维矩阵中最小的数left，最大的数right，那么第k小的数必定在left~right之间
// 2.mid=(left+right) / 2；在二维矩阵中寻找小于等于mid的元素个数count
// 3.若这个count小于k，表明第k小的数在右半部分且不包含mid，即left=mid+1, right=right，又保证了第k小的数在left~right之间
// 4.若这个count大于k，表明第k小的数在左半部分且可能包含mid，即left=left, right=mid，又保证了第k小的数在left~right之间
// 5.因为每次循环中都保证了第k小的数在left~right之间，当left==right时，第k小的数即被找出，等于right
    int kthSmallest(vector<vector<int>>& matrix, int k) {
        // map<int, int> m;
        // for(int i=0; i<matrix.size(); ++i){
        //     for(int j=0; j<matrix[0].size(); ++j)
        //         ++m[matrix[i][j]];
        // }
        // int sum = 0;
        // int temp;
        // for(auto it: m){
        //     sum += it.second;
        //     if(sum >= k){
        //         temp = it.first;
        //         break;
        //     }
        // }
        // return temp;

        // 二分查找
        int left = matrix[0][0], right = matrix.back().back();
        int size = matrix.size();
        while(left <= right){
            int cnt = 0;
            int mid = left + (right - left) / 2;
            for(int i = 0; i < size; ++i){
                for(int j = 0; j < size && matrix[i][j] <= mid; ++j)
                    ++cnt;
            }
            if(cnt < k)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return left;
    }
};