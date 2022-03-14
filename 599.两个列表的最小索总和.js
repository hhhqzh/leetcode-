/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let map = new Map(),
        len1 = list1.length,
        len2 = list2.length,
        res = [],
        idxCnt = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < len1; ++i) {
        map.set(list1[i], i);
    }
    for (let i = 0; i < len2; ++i) {
        if (map.has(list2[i]) && map.get(list2[i]) + i < idxCnt) {
            idxCnt = map.get(list2[i]) + i;
            res = [list2[i]];
        } else if (map.has(list2[i]) && map.get(list2[i]) + i === idxCnt) {
            res.push(list2[i]);
        }
    }
    return res;
};