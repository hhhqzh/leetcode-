/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function (s) {
    if (s === "")
        return 0;
    let res = 1;
    let [i, j] = [0, 1];
    while (j < s.length) {
        let index = s.slice(i, j).indexOf(s.charAt(j));
        if (index === -1) {
            res = Math.max(res, j - i + 1);
            ++j;
        } else {
            i = i + index + 1;
        }
    }
    return res;
};

// 使用map
var lengthOfLongestSubstring = function (s) {
    if (s === "")
        return 0;
    let res = 0;
    let map = new Map();
    let start = 0;
    for (let i = 0; i < s.length; ++i) {
        let c = s.charAt(i);
        if (map.has(c))
            map.set(c, map.get(c) + 1);
        else
            map.set(c, 1);
        while (map.get(c) > 1) {
            map.set(s.charAt(start), map.get(s.charAt(start)) - 1);
            ++start;
        }
        res = Math.max(res, i - start + 1);
    }
    return res;
};