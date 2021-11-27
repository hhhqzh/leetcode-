var Solution = function (m, n) {
    this.m = m;
    this.n = n;
    this.total = m * n;
    this.map = new Map();
}

Solution.prototype.flip = function () {
    let x = Math.floor(Math.random() * this.total);
    let idx = this.map.get(x) || x;
    --this.total;
    this.map.set(x, this.map.get(this.total) || this.total);
    return [Math.floor(idx / this.n), idx % this.n];
}

Solution.prototype.reset = function () {
    this.total = this.m * this.n;
    this.map.clear();
}