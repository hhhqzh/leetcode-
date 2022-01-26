var DetectSquares = function () {
    this.xMap = new Map();
    this.yMap = new Map();
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
    if (!this.xMap.has(point[0])) {
        this.xMap.set(point[0], new Map());
    }
    let m = this.xMap.get(point[0]);
    let count = 0;
    if (m.has(point[1])) {
        count = m.get(point[1]);
    }
    m.set(point[1], count + 1);

    if (!this.yMap.has(point[1])) {
        this.yMap.set(point[1], new Map());
    }
    m = this.yMap.get(point[1]);
    count = 0;
    if (m.has(point[0])) {
        count = m.get(point[0]);
    }
    m.set(point[0], count + 1);
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
    let x = point[0],
        y = point[1];
    let res = 0;
    if (!this.xMap.has(x) || !this.yMap.has(y)) {
        return 0;
    }
    let sameY = this.yMap.get(y);
    for (let same of sameY) {
        let sameCount = same[1];
        let d = same[0] - x; // 两个点的距离
        if (d !== 0) {
            let sameX = this.xMap.get(x);
            if (sameX.has(y - d)) {
                if (this.xMap.has(same[0]) && this.xMap.get(same[0]).has(y - d)) {
                    res += sameCount * sameX.get(y - d) * this.xMap.get(same[0]).get(y - d);
                }
            }
            if (sameX.has(y + d)) {
                if (this.xMap.has(same[0]) && this.xMap.get(same[0]).has(y + d)) {
                    res += sameCount * sameX.get(y + d) * this.xMap.get(same[0]).get(y + d);
                }
            }
        }

    }
    return res;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */