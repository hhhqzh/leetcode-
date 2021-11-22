/**
 * @param {number[]} nums
 */

// 全排列爆内存
var Solution = function (nums) {
    this.nums = nums;
    this.arr = [];

    const swap = (nums, i, j) => {
        let t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }

    const permutation = (nums, start) => {
        if (start === nums.length) {
            this.arr.push([].concat(nums));
            return;
        }
        for (let i = start; i < nums.length; ++i) {
            swap(nums, start, i);
            permutation(nums, i + 1);
            swap(nums, start, i);
        }
    }

    permutation(this.nums, 0);
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
};

//  KnuthKnuthKnuth 洗牌算法
var Solution = function (nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let temp = [].concat(this.nums);
    for (let i = 0; i < temp.length; ++i) {
        this.swap(temp, i, i + Math.floor(Math.random() * (temp.length - i)));
    }
    return temp;
};

Solution.prototype.swap = function (nums, i, j) {
    let t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}