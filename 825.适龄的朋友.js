// 暴力超时
var numFriendRequests = function (ages) {
    let res = 0;
    for (let x = 0; x < ages.length; ++x) {
        for (let y = 0; y < ages.length; ++y) {
            if (x === y || ages[y] <= 0.5 * ages[x] + 7 || ages[y] > ages[x] || (ages[y] > 100 && ages[x] < 100))
                continue;
            ++res;
        }
    }
    return res;
};

// 排序 + 双指针
var numFriendRequests = function (ages) {
    let res = 0;
    ages.sort((a, b) => {
        return a - b;
    });
    for (let x = 0; x < ages.length; ++x) {
        let age = ages[x];
        let idx = x;
        while (ages[idx] === age) {
            ++idx;
        }
        --idx;
        let arr = ages.slice(0, idx);
        let l = 0;
        while (l < idx && arr[l] <= 0.5 * age + 7) {
            ++l;
        }
        res += idx - l;
    }
    return res;
};