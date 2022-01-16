// 回溯
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    let temp = [];

    // i 开始下标，n 子数组长度，len 剩余所需数字个数
    const dfs = (i, n, len) => {
        if (nums.length - i < len)
            return;
        if (temp.length === n) {
            res.push([].concat(temp));
            return;
        }
        for (let j = i; j < nums.length; ++j) {
            temp.push(nums[j]);
            dfs(j + 1, n, len - 1);
            temp.pop();
        }
    }

    for (let i = 0; i <= nums.length; ++i) {
        dfs(0, i, i);
    }
    
    return res;
};

/**
 *  力扣大佬的题解
 * 从前往后遍历
 * 遇到一个子集就把当前数加入该子集成为一个新的子集，再插入集合中
 * 最后再把该数作为一个集合插入集合中
 **/
var subsets = function (nums) {
    let res = [
        []
    ];
    for (let i = 0; i < nums.length; ++i) {
        let temp;
        let size = res.length;
        for (let j = 0; j < size; ++j) {
            temp = [].concat(res[j]);
            temp.push(nums[i]);
            res.push(temp);
        }
    }
    return res;
};