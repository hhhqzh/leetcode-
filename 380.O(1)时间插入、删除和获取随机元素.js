var RandomizedSet = function () {
    this.map = new Map();
    this.list = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false;
    }
    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) {
        return false;
    }
    let idx = this.map.get(val);
    let last = this.list[this.list.length - 1];
    this.list[idx] = last;
    this.map.set(last, idx);
    this.list.pop();
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.list[Math.floor(Math.random() * this.list.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */