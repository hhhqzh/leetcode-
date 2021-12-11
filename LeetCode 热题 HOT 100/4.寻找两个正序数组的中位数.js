// 先合并数组，再找中位数
var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length,
        n = nums2.length;
    let arr = new Array(m + n);
    let i = 0,
        j = 0,
        k = 0;
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            arr[k] = nums1[i];
            ++i;
        } else {
            arr[k] = nums2[j];
            ++j;
        }
        ++k;
    }
    while (i < m) {
        arr[k++] = nums1[i++];
    }
    while (j < n) {
        arr[k++] = nums2[j++];
    }

    if ((m + n) % 2 == 1)
        return arr[Math.floor((m + n) / 2)];
    else {
        return (arr[(m + n) / 2] + arr[(m + n) / 2 - 1]) / 2;
    }
};

/*
    换成查找第k小元素
    取两个数组的第 k/2 个元素进行比较，若 arr1 的小于 arr2 的，则 arr1 的前 k/2 个元素不可能成为第 k 个元素的候选
    把 arr1 的前 k/2 个元素去掉成为新的数组，再与 arr2 一起求第 k - k/2 小的元素
 */ 
var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length,
        n = nums2.length;

    const findKth = (arr1, arr2, k) => {
        let len1 = arr1.length,
            len2 = arr2.length;
        // 保证 arr1 的长度一定比 arr2 小
        if (len1 > len2) {
            return findKth(arr2, arr1, k);
        }
        if (len1 === 0) {
            return arr2[k - 1];
        }
        if (k === 1) {
            return Math.min(arr1[0], arr2[0]);
        }
        let i = Math.min(len1, Math.floor(k / 2)) - 1,
            j = Math.min(len2, Math.floor(k / 2)) - 1;
        if (arr1[i] > arr2[j]) {
            return findKth(arr1, arr2.slice(j + 1), k - j - 1);
        } else {
            return findKth(arr1.slice(i + 1), arr2, k - i - 1);
        }
    }

    let left = Math.floor((m + n + 1) / 2),
        right = Math.floor((m + n + 2) / 2);
    // 包括奇数偶数的情况
    return (findKth(nums1, nums2, left) + findKth(nums1, nums2, right)) * 0.5;
};