/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
    假设singleElement的下标为index
    则在index之前的元素，若下标 mid 为偶数，且mid + 1< index，则 nums[mid] === nums[mid + 1]
    在index之后的元素，若下标 mid 为偶数，mid + 1 > index, 则 nums[mid] !== nums[mid + 1]

    如果nums[m] === nums[m+1],则index在[mid + 2,j]之间
    如果nums[m] !== nums[m+1],则index在[i, mid]之间
*/
var singleNonDuplicate = function (nums) {
    let i = 0,
        j = nums.length - 1;
    while (i < j) {
        let mid = Math.floor((j - i) / 2) + i;
        // 保证 mid 为偶数
        if (mid % 2 === 1) {
            --mid;
        }
        if (nums[mid] === nums[mid + 1]) {
            i = mid + 2;
        } else {
            j = mid;
        }
    }
    return nums[i];
};