/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function (nums) {
    let [l, r] = [0, nums.length - 1];
    while (l < r) {
        // while (l < r && nums[l] === nums[l + 1])
        //     ++l;
        // while (l < r && nums[r] === nums[r - 1])
        //     --r;
        // if (l === r)
        //     break;
        let mid = Math.floor((r - l) / 2) + l;
        if (nums[mid] < nums[r]) { // 右半部分是有序的
            r = mid;
        } else if (nums[mid] > nums[r]){ // 左半部分是有序的
            l = mid + 1;
        } else {
            --r;
        }
    }
    return nums[l];
};