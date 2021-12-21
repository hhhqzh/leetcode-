/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    houses.sort((a, b) => {
        return a - b;
    });
    heaters.sort((a, b) => {
        return a - b;
    });
    let l = 0,
        r = 1000000000;
    while (l < r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (check(houses, heaters, mid))
            r = mid;
        else
            l = mid + 1;
    }
    return r;
};

function check(houses, heaters, x) {
    let n = houses.length,
        m = heaters.length;
    for (let i = 0, j = 0; i < n; ++i) {
        while (j < m && houses[i] > heaters[j] + x)
            ++j;
        if (j < m && heaters[j] - x <= houses[i] && houses[i] <= heaters[j] + x)
            continue;
        return false;
    }
    return true;
}