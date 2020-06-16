class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n = nums.size();
        int i;
        for(i = 0; i < n; ++i){
            while (nums[i] != i + 1 && nums[nums[i] - 1] != nums[i]) {
                swap(nums, i, nums[i] - 1);
            }
        }
        vector<int> res(2);
        for(i = 0; i < n; ++i){
            if (nums[i] != i + 1 ){
                res.push_back(nums[i]);
                res.push_back(i + 1);
            }
        }
        return res;
        // int *cnt = new int[n];
        // for(int i=0; i<n; ++i)
        //     cnt[i] = 0;
        // for(int i=0; i<n; i++){
        //     cnt[nums[i] - 1]++;
        // }
        // for(int i=0; i<n; i++){
        //     if(cnt[i] == 0){
        //         res[1] = i+1;
        //     } else if(cnt[i] == 2){
        //         res[0] = i+1;
        //     }
        // }
        // return res;
    }

private:
    void swap(vector<int>& nums, int i, int j) {
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};