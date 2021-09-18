/**
 * @param {number} k
 * @param {number[]} nums
 */
 var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => {return b - a;});
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let index = 0;
    for (; index < this.nums.length; ++index) {
        if (this.nums[index] <= val)
            break;
    }
    this.nums.splice(index, 0, val);
    return this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */