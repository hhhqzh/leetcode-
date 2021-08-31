/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
    let res = new Array(n).fill(0);
    // 暴力
    // for (const booking of bookings) {
    //     for (let i = booking[0] - 1; i < booking[1]; ++i) {
    //         res[i] += booking[2];
    //     }
    // }

    // 差分数组 + 前缀和
    for (const booking of bookings) {
        res[booking[0] - 1] += booking[2];
        if (booking[1] < n)
            res[booking[1]] -= booking[2];
    } 
    for (let i = 1; i < res.length; ++i)
        res[i] += res[i - 1];
    return res;
};