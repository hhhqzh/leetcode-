/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 暴力超时
var maxSlidingWindow = function (nums, k) {
    let l = 0,
        r = k - 1;
    let res = [];
    while (r < nums.length) {
        res.push(Math.max(...nums.slice(l, r + 1)));
        ++l;
        ++r;
    }
    return res;
};

/**
 * 双向单调队列保存着当前滑动窗口内最大值的下标
 * 新进队列的数若大于等于队列中的数，则弹出再添加
 * 若小于队列的数，则直接添加。
 * 
 * 若当前窗口长度为 k，则队头为当前窗口的最大值
 *  */
var maxSlidingWindow = function (nums, k) {
    let res = [];
    let queue = [];
    for (r = 0; r < nums.length; ++r) {
        while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[r]) {
            queue.pop();
        }
        queue.push(r);
        let l = r - k + 1;
        // 删除不在窗口内的下标
        if (l > queue[0]) {
            queue.shift();
        }
        if (l >= 0) {
            res.push(nums[queue[0]]);
        }
    }
    return res;
};