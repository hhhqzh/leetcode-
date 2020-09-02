class NumArray {
public:
    int *sum;

    NumArray(vector<int>& nums) {
        sum = new int[nums.size() + 1];
        sum[0] = 0;
        for(int i = 1; i <= nums.size(); ++i)
            sum[i] = sum[i - 1] + nums[i - 1];
    }
    
    int sumRange(int i, int j) {
        return sum[j + 1] - sum[i];
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(i,j);
 */