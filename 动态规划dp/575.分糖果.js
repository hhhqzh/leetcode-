/**
 * @param {number[]} candyType
 * @return {number}
 */
// 用map
var distributeCandies = function (candyType) {
    let n = candyType.length;
    let map = new Map();
    for (var candy of candyType) {
        map.set(candy, map.has(candy) ? map.get(candy) + 1 : 1);
    }
    let cnt = 0,
        res = 0,
        len = map.size;
    while (true) {
        for (let m of map) {
            if (m[1] > 0) {
                --m[1];
                ++res;
                ++cnt;
            }
            if (cnt === n / 2 || res === len)
                return res;
        }
    }
};

// 用set
var distributeCandies = function (candyType) {
    let res = 0, cnt = 0, n = candyType.length;
    let set = new Set(candyType);
    for (let candy of set) {
        ++res;
        ++cnt;
        if (res === n / 2 || cnt === set.size)
            break;
    }
    return res;
}

var distributeCandies = function (candyType) {
    let set = new Set(candyType);
    return Math.min(set.size, candyType.length / 2);
}