/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class minHeap {
    constructor(k) {
        this.len = k;
        this.nums = new Array();
    }

    add(val) {
        this.nums.push(val);
        this.shifUp(this.nums.length - 1);
        if (this.nums.length > this.len) {
            this.remove();
        }
    }

    remove() {
        this.nums[0] = this.nums[this.nums.length - 1];
        this.nums.pop();
        this.shifDowm(0);
    }

    shifUp(start) {
        let i = Math.floor((start - 1) / 2),
            j = start,
            temp = this.nums[j];
        while (j > 0) {
            if (temp >= this.nums[i]) {
                break;
            } else {
                this.nums[j] = this.nums[i];
                j = i;
                i = Math.floor((j - 1) / 2);
            }
        }
        this.nums[j] = temp;
    }

    shifDowm(start) {
        let i = start,
            j = i * 2 + 1,
            temp = this.nums[i],
            len = this.nums.length - 1;
        while (j <= len) {
            if (j < len && this.nums[j] > this.nums[j + 1]) {
                ++j;
            }
            if (this.nums[j] >= temp) {
                break;
            } else {
                this.nums[i] = this.nums[j];
                i = j;
                j = 2 * i + 1;
            }
        }
        this.nums[i] = temp;
    }
}

var findKthLargest = function (nums, k) {
    let heap = new minHeap(k);
    for (let num of nums) {
        heap.add(num);
    }
    return heap.nums[0];
};