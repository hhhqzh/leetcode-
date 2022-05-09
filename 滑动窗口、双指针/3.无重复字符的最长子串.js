/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0;
    let l = 0,
        r = 0;
    while (r < s.length) {
        let idx = s.slice(l, r).indexOf(s.charAt(r));
        if (idx !== -1) {
            l = l + idx + 1;
        } else {
            maxLen = Math.max(maxLen, r - l + 1);
            ++r;
        }
    }
    return maxLen;
};

// 使用map
var lengthOfLongestSubstring = function (s) {
    let res = 0;
    let map = new Map();
    let l = 0,
        r = 0;
    while (r < s.length) {
        let c = s.charAt(r);
        map.set(c, map.has(c) ? map.get(c) + 1 : 1);
        if (map.get(c) > 1) {
            while (map.get(c) > 1) {
                map.set(s.charAt(l), map.get(s.charAt(l)) - 1);
                ++l;
            }
        }
        res = Math.max(res, r - l + 1);
        ++r;
    }
    return res;
};