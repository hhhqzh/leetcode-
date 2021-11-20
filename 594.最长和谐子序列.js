/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums)
{
    let maxLen = 0;
    let map = new Map();
    for (let i = 0; i < nums.length; ++i)
    {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    }
    let arr = Array.from(map);
    arr = arr.sort((a, b) = > {
        return a[0] - b[0];
    }) for (let i = 1; i < arr.length; ++i)
    {
        if (arr[i][0] - arr[i - 1][0] == = 1)
        {
            maxLen = Math.max(maxLen, arr[i][1] + arr[i - 1][1]);
        }
    }
    return maxLen;
};

var findLHS = function(nums)
{
    let maxLen = 0;
    let map = new Map();
    for (let i = 0; i < nums.length; ++i)
    {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
        if (map.has(nums[i] - 1))
            maxLen = Math.max(maxLen, map.get(nums[i]) + map.get(nums[i] - 1));
        if (map.has(nums[i] + 1))
            maxLen = Math.max(maxLen, map.get(nums[i]) + map.get(nums[i] + 1));
    }
    return maxLen;
}