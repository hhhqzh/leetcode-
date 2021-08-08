/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
    环形数组/链表可以是用快慢指针
*/
 var circularArrayLoop = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; ++i) {
        if(isValidCircular(nums, i))   
            return true;
    }
    return false;
};

const isValidCircular = (nums, start) => {
    let fast = next(nums, next(nums, start));
    let slow = start;
    while(fast != slow) {
        fast = next(nums, next(nums, fast));
        slow = next(nums, slow);
    }
    let k = 1;
    let isPositive = nums[slow] > 0;
    while(next(nums, slow) != fast) {
        slow = next(nums, slow);
        if ((nums[slow] > 0) ^ isPositive) return false;
        ++k;
    }
    return k > 1;
};

const next = (nums, cur) => {
    let steps = nums[cur] % nums.length;
    var next = cur + steps;
    return (next + nums.length) % nums.length;
}

// 解法二
var circularArrayLoop = function (nums) {
    let n = nums.length;
    let visited = new Array(n).fill(false);
    for (let start = 0, idx = 1; start < n; ++start, ++idx) {
        if (!visited[start]) {
            let cur = start;
            let flag = nums[cur] > 0;
            while (true) {
                let next = (cur + nums[cur] % n + n) % n;
                if (cur == next)
                    break;
                // 标记过
                if (visited[next]) {
                    // 在之前已经被标记过了，则必定无环
                    if (visited[next] != idx)
                        break;
                    else
                        return true;
                }
                // 不同方向
                if (flag ^ nums[next] > 0)
                    break;
                visited[next] = idx;
                cur = next;
            }
        }
    }
    return false;
};