var SummaryRanges = function () {
    this.list = new Array();
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
    // if (this.list.indexOf(val) === -1) {
    //     this.list.push(val);
    //     this.list = this.list.sort((a, b) => { return a - b; });
    // }
    let list = this.list;
    for (let i = 0; i < list.length; ++i) {
        let [start, end] = list[i];
        if (val < start - 1) {
            list.splice(i, 0, [val, val]);
            return;
        }
        if (val > end + 1)
            continue;
        if (val === start || val === end)
            return;
        if (val > start && val < end)
            return;
        if (val === end + 1) {
            if (i < list.length - 1 && val + 1 === list[i + 1][0]) {
                list.splice(i, 2, [start, list[i + 1][1]]);
            } else {
                ++list[i][1];
            }
            return;
        }
        if (val === start - 1) {
            --list[i][0];
            return;
        }
    }
    list.push([val, val]);
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
    // if (this.list.length === 1)
    //     return [[this.list[0], this.list[0]]];
    // let [i, j] = [0, 0];
    // let res = [];
    // while (j < this.list.length) {
    //     for (j += 1; j < this.list.length && this.list[j - 1] + 1 === this.list[j]; ++j) { }
    //     res.push([this.list[i], this.list[j - 1]]);
    //     i = j
    // }
    // return res;
    return this.list;
};