// 蓄水池抽样
var Solution = function (head) {
    this.head = head;
};

Solution.prototype.getRandom = function () {
    let res = this.head.val;
    let node = this.head.next;
    let i = 2;
    while (node !== null) {
        if (Math.floor(Math.random() * i) === 0) {
            res = node.val;
        }
        node = node.next;
        ++i;
    }
    return res;
};

// 存在数组
var Solution = function (head) {
    this.arr = new Array();
    while (head !== null) {
        this.arr.push(head.val);
        head = head.next;
    }
};

Solution.prototype.getRandom = function () {
    let index = Math.floor(Math.random() * this.arr.length);
    return this.arr[index];
};