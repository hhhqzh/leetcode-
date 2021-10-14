/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function (arr) {
    let [l, r] = [0, arr.length - 1];
    while (l < r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (mid > 0 && mid < arr.length - 1 && arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (mid > 0 && arr[mid] > arr[mid - 1]) {
            l = mid;
        } else if (mid < arr.length - 1 && arr[mid] > arr[mid + 1])
            r = mid;
    }
    return l;
};
