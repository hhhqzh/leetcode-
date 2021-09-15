/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function (numbers) {
    let l = 0, r = numbers.length - 1;
    while (l < r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (numbers[r] > numbers[mid])
            r = mid;
        else if (numbers[r] < numbers[mid])
            l = mid + 1;
        else
            --r;
    }
    return numbers[l];
};