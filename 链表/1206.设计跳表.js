const MAX_LEVEL = 16;

function Node(val, level) {
    this.val = val;
    this.next_point = level ? new Array(level).fill(null) : new Array(MAX_LEVEL).fill(null); // 每个节点每一层的下一个节点
}

var Skiplist = function () {
    this.curLevel = 1; // 跳表的层数
    this.head = new Node(-1); // 跳表的 head
};

/** 
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {
    // 从顶层往下找
    let temp = this.head;
    for (let i = MAX_LEVEL - 1; i >= 0; --i) {
        while (temp.next_point[i] !== null && temp.next_point[i].val <= target) {
            if (temp.next_point[i].val === target)
                return true;
            else
                temp = temp.next_point[i];
        }
    }
    // if (temp.next_point[0] !== null && temp.next_point[0].val === target)
    //     return true;
    return false;
};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
    // 随机新增树应在的层
    let level = this.randomLevel(0.5);
    if (level > this.curLevel)
        this.curLevel = level;
    let node = new Node(num, level);
    // 保存各层中 node 的前驱结点
    let forward = new Array(level);
    let temp = this.head;

    // 找到并保存前驱结点
    for (let i = level - 1; i >= 0; --i) {
        while (temp.next_point[i] !== null && temp.next_point[i].val < num) {
            temp = temp.next_point[i];
        }
        forward[i] = temp;
    }

    // 更新链接
    for (let i = 0; i < level; ++i) {
        node.next_point[i] = forward[i].next_point[i];
        forward[i].next_point[i] = node;
    }
};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
    // 保存各层中值为 num 的节点的前驱结点
    let forward = new Array(this.curLevel);
    let temp = this.head;
    for (let i = this.curLevel - 1; i >= 0; --i) {
        while (temp.next_point[i] !== null && temp.next_point[i].val < num)
            temp = temp.next_point[i];
        forward[i] = temp;
    }

    // 存在值为 num 的节点才能删除，否则返回 false，删除失败
    if (temp.next_point[0] !== null && temp.next_point[0].val === num) {
        // 更新每一层
        for (let i = this.curLevel - 1; i >= 0; --i) {
            // 若前驱节点的下一个节点的值为 num 才需要删除
            if (forward[i].next_point[i] !== null && forward[i].next_point[i].val === num)
                forward[i].next_point[i] = forward[i].next_point[i].next_point[i];
        }
    } else {
        return false;
    }

    // 删除孤立的层
    while (this.curLevel > 1 && this.head.next_point[this.curLevel - 1] === null)
        --this.curLevel;
    return true;
};

Skiplist.prototype.randomLevel = function (p) {
    let level = 1;
    while (Math.random() < p && level < MAX_LEVEL)
        ++level;
    return level;
}
/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */