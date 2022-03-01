// 超时
var subarraysDivByK = function (nums, k) {
    // let map = new Map();
    let res = 0;
    // 计算前缀和
    for (let i = 0; i < nums.length; ++i) {
        if (i > 0) {
            nums[i] += nums[i - 1];
        }
        if (nums[i] % k === 0) {
            ++res;
        }
        for (let j = 0; j < i; ++j) {
            if ((nums[i] - nums[j]) % k === 0) {
                ++res;
            }
        }
    }
    return res;
};

var subarraysDivByK = function (nums, k) {
    // map保存（前缀和%k）
    let map = new Map();
    let res = 0,
        sum = 0;
    map.set(0, 1);
    // 计算前缀和
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        let t = sum % k;
        if (!map.has(t)) {
            map.set(t, 0);
        }
        res += map.get(t);
        res += map.has(t - k) ? map.get(t - k) : 0;
        res += map.has(t + k) ? map.get(t + k) : 0;
        map.set(t, map.get(t) + 1);
    }
    return res;
};

var subarraysDivByK = function (nums, k) {
    // map保存（前缀和%k）
    let map = new Map();
    let res = 0,
        sum = 0;
    map.set(0, 1);
    // 计算前缀和
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        let curMod = (sum % k + k) % k;
        let temp = map.has(curMod) ? map.get(curMod) : 0;
        res += temp;
        map.set(curMod, temp + 1);
    }
    return res;
};