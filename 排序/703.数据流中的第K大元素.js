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

// 最小堆
 var KthLargest = function (k, nums) {
    this.k = k;
    this.nums = [];
    for (let i = 0; i < nums.length; ++i) {
        this.insert(nums[i]);
    }
    while (this.nums.length > k) {
        this.removeMin();
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.insert(val);
    // console.log(this.nums)
    if (this.nums.length === this.k)
        return this.nums[0];
    else if (this.nums.length > this.k) {
        this.removeMin();
        return this.nums[0];
    }
};

KthLargest.prototype.insert = function (val) {
    this.nums.push(val);
    this.shifUp(this.nums.length - 1);
}

KthLargest.prototype.shifUp = function (start) {
    let j = start;
    let i = Math.floor((j - 1) / 2);
    let temp = this.nums[j];
    while (j > 0) {
        if (this.nums[i] <= temp)
            break;
        else {
            this.nums[j] = this.nums[i];
            j = i;
            i = Math.floor((j - 1) / 2);
        }
    }
    this.nums[j] = temp;
}

KthLargest.prototype.shifDown = function (start) {
    let i = start;
    let j = 2 * i + 1;
    let temp = this.nums[i];
    let m = this.nums.length - 1;
    while (j <= m) {
        if (j < m && this.nums[j] > this.nums[j + 1])
            ++j;
        if (this.nums[j] >= temp)
            break;
        else {
            this.nums[i] = this.nums[j];
            i = j;
            j = 2 * i + 1;
        }
    }
    this.nums[i] = temp;
}

KthLargest.prototype.removeMin = function () {
    this.nums[0] = this.nums[this.nums.length - 1];
    this.nums.pop();
    this.shifDown(0);
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */