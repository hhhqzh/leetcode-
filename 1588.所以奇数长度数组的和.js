/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        let t = 0;
        for (let j = i; j < arr.length; ++j) {
            t += arr[j];
            if ((j - i + 1) % 2 == 1)
                sum += t;
        }
    }
    return sum;
};