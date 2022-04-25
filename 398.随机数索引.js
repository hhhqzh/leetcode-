// 哈希表预处理
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
    this.map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        if (!this.map.has(nums[i])) {
            this.map.set(nums[i], []);
        }
        this.map.get(nums[i]).push(i);
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    let idxArr = this.map.get(target);
    return idxArr[Math.floor(Math.random() * idxArr.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

// 蓄水池抽样