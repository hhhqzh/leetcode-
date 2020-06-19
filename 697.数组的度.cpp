class Solution {
public:
    int findShortestSubArray(vector<int>& nums) {
        map<int, int> cnt;
        map<int, int> firstIndex;
        map<int, int> lastIndex;
        for(int i=0; i<nums.size(); ++i){
            int num = nums[i];
            ++cnt[num];
            lastIndex[num] = i;
            map<int, int>::iterator it = firstIndex.find(num);
		    if(it == firstIndex.end()){
			    firstIndex[num] = i;
            }
        }
        int maxDegree = 0;
        for (map<int,int>::iterator iter = cnt.begin();iter != cnt.end(); iter++)
            maxDegree = max(maxDegree, iter->second);
        int ret = nums.size();
        for(int i=0; i<nums.size(); ++i){
            int num = nums[i];
            if(cnt[num] != maxDegree)
                continue;
            ret = min(ret, lastIndex[num] - firstIndex[num] + 1);
        }
        return ret;
    }
};