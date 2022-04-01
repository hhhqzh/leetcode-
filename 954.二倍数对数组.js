/**
 * @param {number[]} arr
 * @return {boolean}
 */
const min = Number.MIN_SAFE_INTEGER;
var canReorderDoubled = function (arr) {
    arr.sort((a, b) => {
        return a - b
    })
    let n = arr.length;
    let i = 0;
    while (i < n && arr[i] < 0) {
        if (arr[i] === min) {
            ++i;
            continue;
        }
        let idx = arr.indexOf(arr[i] / 2);;
        if (idx !== -1 && arr[idx] !== min) {
            arr[i] = min;
            arr[idx] = min;
        } else {
            return false;
        }
        ++i;
    }
    let count = 0;
    while (i < n && arr[i] === 0) {
        ++count;
        ++i;
    }
    if (count % 2 !== 0) {
        return false;
    }
    while (i < n) {
        if (arr[i] === min) {
            ++i;
            continue;
        }
        let idx = arr.indexOf(arr[i] * 2);
        if (idx !== -1 && arr[idx] !== min) {
            arr[i] = min;
            arr[idx] = min;
        } else {
            return false;
        }
        ++i;
    }
    return true;
};