/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let l = 0,
        r = 0;
    let minL = Number.MIN_SAFE_INTEGER,
        minR = Number.MAX_SAFE_INTEGER;
    let map = new Map();
    for (let c of t) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1);
    }
    while (r < s.length) {
        let c = s.charAt(r);
        if (map.has(c)) {
            map.set(c, map.get(c) - 1);
        }
        while (check(map)) {
            if (r - l + 1 < minR - minL + 1) {
                minL = l;
                minR = r;
            }
            let ch = s.charAt(l);
            map.has(ch) ? map.set(ch, map.get(ch) + 1) : 0;
            ++l;
        }
        ++r;
    }
    return minR === Number.MAX_SAFE_INTEGER ? "" : s.slice(minL, minR + 1);
};

var check = function (map) {
    for (let m of map.values()) {
        if (m > 0)
            return false;
    }
    return true;
}