/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
    let charArr = ['A', 'C', 'G', 'T'],
        map = new Map(),
        q = [start],
        cnt = 0;
    for (let str of bank) {
        if (str !== start) {
            map.set(str, 1);
        }
    }
    if (!map.has(end)) {
        return -1;
    }
    while (q.length) {
        let size = q.length;
        ++cnt;
        while (size--) {
            let temp = q.shift();
            for (let char of charArr) {
                for (let i = 0; i < temp.length; ++i) {
                    if (temp.charAt(i) === char) {
                        continue;
                    }
                    let str = temp.slice(0, i) + char + temp.slice(i + 1);
                    if (map.has(str)) {
                        q.push(str);
                        map.delete(str);
                        if (str === end) {
                            return cnt;
                        }
                    }
                }
            }
        }
    }
    return -1;
};