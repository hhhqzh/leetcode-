/**
 * @param {number[]} score
 * @return {string[]}
 */

/**
* 时间复杂度为 O(n)， 使用一个长度为 max + 1 的数组来储存每个分数的下标，从后往前遍历这个数组，即可知道从大到小每个分数在 score 的位置
*/
var findRelativeRanks = function (score) {
    let res = new Array(score.length);
    let max = Math.max(...score);
    let numsIndex = new Array(max + 1).fill(-1);
    for (let i = 0; i < score.length; ++i) {
        numsIndex[score[i]] = i;
    }
    let rank = 0;
    for (let i = max; i >= 0; --i) {
        let idx = numsIndex[i];
        if (idx !== -1) {
            if (rank === 0)
                res[idx] = "Gold Medal";
            else if (rank === 1)
                res[idx] = "Silver Medal";
            else if (rank === 2)
                res[idx] = "Bronze Medal";
            else
                res[idx] = rank + 1 + "";
            ++rank;
        }
    }
    return res;
};