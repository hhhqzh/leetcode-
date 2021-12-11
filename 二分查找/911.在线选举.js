/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
    this.map = new Map(); // 记录不同时刻不同选手的选票，由低到高排序
    let arr = [];
    for (let i = 0; i < persons.length; ++i) {
        let person = persons[i];
        let j = 0;
        for (; j < arr.length; ++j) {
            if (arr[j][0] === person) {
                break;
            }
        }
        let temp;
        if (j === arr.length) {
            temp = [person, 1];
        } else {
            temp = [person, arr[j][1] + 1];
            arr.splice(j, 1);
        }
        let l = 0,
            r = arr.length - 1;
        while (l <= r) {
            let mid = Math.floor((r - l) / 2) + l;
            if (arr[mid][1] > temp[1]) {
                r = mid - 1;
            } else if (arr[mid][1] <= temp[1]) {
                l = mid + 1;
            }
        }
        arr.splice(l, 0, temp);
        this.map.set(times[i], [].concat(arr));
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
    while (!this.map.has(t)) {
        --t;
    }
    let rank = this.map.get(t);
    return rank[rank.length - 1][0];
};


// map 保存每个选手的票数
// winner 保存每个时间的优胜者
var TopVotedCandidate = function (persons, times) {
    this.n = persons.length;
    this.times = times;
    this.map = new Map(); // 记录每一名选手不同时刻的票数
    this.winner = new Array(this.n); // 保存 times 中每一时刻获胜者的编号
    let curMax = 0,
        curMaxPer = 0;
    for (let i = 0; i < this.n; ++i) {
        this.map.set(persons[i], this.map.has(persons[i]) ? this.map.get(persons[i]) + 1 : 1);
        if (this.map.get(persons[i]) >= curMax) {
            curMax = this.map.get(persons[i]);
            curMaxPer = persons[i];
        }
        this.winner[i] = curMaxPer;
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
    let l = 0,
        r = this.n - 1;
    while (l <= r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (this.times[mid] > t) {
            r = mid - 1;
        } else if (this.times[mid] <= t) {
            l = mid + 1;
        }
    }
    return this.winner[l - 1];
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */