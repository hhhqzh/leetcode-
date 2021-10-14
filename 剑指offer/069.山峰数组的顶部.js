/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let low = 1,
        high = arr.length - 2;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (arr[mid] < arr[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// 找到 最小满足 arr[i] > arr[i + 1] 的下标 i
var peakIndexInMountainArray = function (arr) {
    let l = 1,
        r = arr.length - 2;
    while (l <= r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (arr[mid] > arr[mid + 1]) {
            res = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return res;
}