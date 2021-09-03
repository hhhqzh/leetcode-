/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var smallestK = function (arr, k) {
    quickSort(arr, 0, arr.length - 1, k);
    return arr.slice(0, k);
};

var quickSort = function (arr, l, r, k) {
    if (l >= r)
        return;
    let partitionIndex = quickSortPartition(arr, l, r);
    if (partitionIndex == k)
        return;
    else if (k < partitionIndex)
        quickSort(arr, l, partitionIndex - 1, k);
    else
        quickSort(arr, partitionIndex + 1, r, k);
}

var quickSortPartition = function (arr, l, r) {
    let t = arr[r];
    let i = l;
    for (let j = l; j <= r - 1; j++) {
        if (arr[j] < t) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
        }
    }
    let temp = arr[r];
    arr[r] = arr[i];
    arr[i] = temp;
    return i;
}