/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let n = nums.length;
    let res = 0;
    // dp[i] 为包含第 nums[i] 的最长递增子序列
    let dp = new Array(n).fill(1);
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            dp[i] = nums[i] > nums[j] ? Math.max(dp[i], dp[j] + 1) : dp[i];
        }
        res = Math.max(res, dp[i]);
    }
    return res;
};

// 贪心 + 二分查找
// dp[i] 表示长度为 i + 1 的所有上升子序列中，最小的那个序列尾数。
// 对于任何的 i < j 都有dp[i] < dp[j] 所以dp是一个递增数组，可以用二分查找
class Solution {
    public:
        int lengthOfLIS(vector < int > & nums) {
            int n = nums.size();
            int * dp = new int[n];
            int len = 0; // 目前最长上升子序列的长度
            for (int i = 0; i < n; ++i) {
                int index = binary(nums[i], dp, len);
                dp[index] = nums[i];
                if (len == index)
                    ++len;
            }
            return len;
        }

    int binary(int num, int * dp, int len) {
        int l = 0, h = len;
        while (l < h) {
            int mid = l + (h - l) / 2;
            if (dp[mid] == num)
                return mid;
            else if (dp[mid] > num)
                h = mid;
            else
                l = mid + 1;
        }
        return l;
    }
};