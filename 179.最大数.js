/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => {
        let A = a + ""
        B = b + "";
        if (Number(A + B) > Number(B + A)) {
            return -1;
        } else {
            return 1;
        }
    })
    let res = ""
    for (let num of nums) {
        if (!(num === 0 && res[0] === '0')) {
            res += num;
        }
    }
    return res;
};