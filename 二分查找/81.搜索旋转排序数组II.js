/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function (nums, target) {
    let [l, r] = [0, nums.length - 1];
    while (l <= r) {
        //处理重复数字
        while (l < r && nums[l] === nums[l + 1])
            ++l;
        while (l < r && nums[r] === nums[r - 1])
            --r;
        let mid = Math.floor((r - l) / 2) + l;
        if (nums[mid] === target)
            return true;
        else if (nums[mid] <= nums[r]) { // 右边是有序的
            if (nums[mid] < target && nums[r] >= target) // target在右边
                l = mid + 1;
            else
                r = mid - 1;
        } else { // 左边是有序的
            if (nums[mid] > target && nums[l] <= target) // target在左边
                r = mid - 1;
            else
                l = mid + 1;
        }
    }
    return false;
};