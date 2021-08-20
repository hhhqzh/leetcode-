/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    let arr = s.split("");
    let n = s.length;
    let l = 0;
    for (let i = 0; i < n; ++i) {
        if (i - l + 1 === 2 * k) {
            reverse(arr, l, n, k);
            l = i + 1;
        }
    }
    reverse(arr, l, n, k);
    return arr.join("");
};

var reverse = function(arr, l, n, k) {
    let r;
    if (l + k >= n)
        r = n - 1;
    else 
        r = l + k - 1;
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        ++l;
        --r;
    }
}