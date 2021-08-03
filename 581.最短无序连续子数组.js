/**
 * @param {number[]} nums
 * @return {number}
 */
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