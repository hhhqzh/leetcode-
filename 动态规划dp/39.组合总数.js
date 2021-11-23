/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    let set = new Set();
    const dfs = (target, s) => {
        if (target === 0) {
            s = s.split(',');
            s.shift();
            if (set.has(s.sort((a, b) => {
                    return a - b;
                }).join('')))
                return;
            res.push(s);
            set.add(s.sort((a, b) => {
                return a - b;
            }).join(''));
            return;
        }
        for (let candidate of candidates) {
            if (candidate <= target) {
                dfs(target - candidate, s + ',' + candidate);
            }
        }
    }
    dfs(target, "");
    return res;
};

var combinationSum = function (candidates, target) {
    let res = [];
    candidates = candidates.sort((a, b) => {
        return a - b;
    });
    const dfs = (target, i, s) => {
        if (target === 0) {
            s = s.split(',');
            s.shift();
            res.push(s);
            return;
        }
        for (let start = i; i < candidates.length && candidates[start] <= target; ++start) {
            dfs(target - candidates[start], start, s + ',' + candidates[start]);
        }
    }
    dfs(target, 0, "");
    return res;
};