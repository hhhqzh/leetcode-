class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        // if(nums.size() == 0)
        //     return {-1, -1};
        // vector<int> res;
        // int l = 0, h = nums.size() - 1;
        // while(l < h){
        //     int mid = l + (h - l) / 2;
        //     if(nums[mid] == target){
        //         if(mid > 0 && nums[mid - 1] != target){
        //             l = mid;
        //             break;
        //         } else
        //             h = mid - 1;
        //     } else if(nums[mid] > target)
        //         h = mid - 1;
        //     else
        //         l = mid + 1;
        // }
        // if(nums[l] == target)
        //     res.push_back(l);
        // else
        //     return {-1, -1};
        // l = 0, h = nums.size() - 1;
        // while(l < h){
        //     int mid = l + (h - l) / 2;
        //     if(nums[mid] == target){
        //         if(mid < nums.size() - 1 && nums[mid + 1] != target){
        //             l = mid;
        //             break;
        //         } else {
        //             l = mid + 1;
        //         }
        //     } else if(nums[mid] < target)
        //         l = mid + 1;
        //     else
        //         h = mid - 1;
        // }
        // res.push_back(l);
        // return res;
        int first = findFirst(nums, target);
        int last = findFirst(nums, target + 1) - 1;
        if(first == nums.size() || nums[first] != target)
            return {-1, -1};
        vector<int> res;
        res.push_back(first);
        res.push_back(last);
        return res;
    }

    int findFirst(vector<int> nums, int target){
        int l = 0, h = nums.size();
        while(l < h){
            int m = l + (h - l) / 2;
            if(nums[m] >= target)
                h = m;
            else
                l = m + 1;
        }
        return l;
    }
};