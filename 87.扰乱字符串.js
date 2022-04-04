/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    let map = new Map();

    const dfs = (s1, s2) => {
        if (s1.join('') === s2.join('')) {
            return true;
        }
        if (s1.length !== s2.length || [].concat(s1).sort().join('') !== [].concat(s2).sort().join('')) {
            return false;
        }
        let str = s1.join('') + ',' + s2.join('');
        if (map.has(str)) {
            return map.get(str);
        }
        for (let i = 1; i < s1.length; ++i) {
            if (dfs(s1.slice(0, i), s2.slice(0, i)) && dfs(s1.slice(i), s2.slice(i))) {
                map.set(str, true);
                return true;
            }
            if (dfs(s1.slice(0, i), s2.slice(-i)) && dfs(s1.slice(i), s2.slice(0, -i))) {
                map.set(str, true);
                return true;
            }
        }
        map.set(str, false);
        return false;
    }

    return dfs(s1.split(''), s2.split(''));
};