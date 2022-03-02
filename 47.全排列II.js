// 全排列 + set
var permuteUnique = function (nums) {
    let set = new Set();
    const permutation = (nums, k, n) => {
        if (k === n) {
            set.add(nums.join(','));
            return;
        }
        for (let i = k; i < n; ++i) {
            [nums[k], nums[i]] = [nums[i], nums[k]];
            permutation(nums, k + 1, n);
            [nums[k], nums[i]] = [nums[i], nums[k]];
        }
    }

    permutation(nums, 0, nums.length);
    let res = [];
    for (let s of set) {
        res.push(s.split(','));
    }

    return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯
var permuteUnique = function (nums) {
    let n = nums.length;
    let visited = new Array(n).fill(false);
    let s = [];
    let res = [];

    nums.sort((a, b) => {
        return a - b;
    });

    const dfs = (s, visited) => {
        if (s.length === n) {
            res.push([].concat(s));
            return;
        }
        for (let i = 0; i < n; ++i) {
            // 保证当前位置如果是重复数字只会被填入一次
            if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1] || visited[i]) {
                continue;
            }
            s.push(nums[i]);
            visited[i] = true;
            dfs(s, visited);
            visited[i] = false;
            s.pop();
        }
    }

    dfs(s, visited);
    return res;
};