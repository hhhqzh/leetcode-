/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序
var findUnsortedSubarray = function(nums) {
    if (nums.length == 1)
        return 0;
    var n = nums.length;
    var arr = [].concat(nums);
    arr.sort((a, b) => {return a - b;});
    let  left =  0, right = n - 1;
    while(left < n) {
        if (nums[left] != arr[left])
            break;
        ++left;
    }
    if (left == n)
        return 0;
    while (right >= 0) {
        if (nums[right] != arr[right])
            break;
        --right;
    }
    if (right < 0)
        return 0;
    return right - left + 1;
};

// 一次遍历 + 双指针
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var n = nums.length;
    if (n == 1)
        return 0;
   let hight = 0, low = 0, max = nums[0], min = nums[n - 1];
   for (let i = 0; i < n; ++i) {
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[n - i - 1]);
        if (nums[i] < max)
            hight = i;
        if (nums[n - i - 1] > min)
            low = n - i - 1;
   }
   return hight > low ? hight - low + 1 : 0;
};