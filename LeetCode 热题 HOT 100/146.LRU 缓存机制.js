// 双向链表
function listNode(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.pre = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map();
    this.len = capacity;
    this.head = new listNode(-1, -1);
    this.head.next = this.head;
    this.head.pre = this.head;
    this.listLen = 0;

    this.toString = function () {
        let node = this.head.next;
        while (node !== this.head) {
            console.log(node.value);
            node = node.next;
        }
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key))
        return -1;
    let node = this.map.get(key);
    node.pre.next = node.next;
    node.next.pre = node.pre;
    this.head.next.pre = node;
    node.next = this.head.next;
    this.head.next = node;
    node.pre = this.head;
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node;
    if (!this.map.has(key) && this.len === this.listLen || this.map.has(key)) {
        node = this.map.has(key) ? this.map.get(key) : this.head.pre;
        node.pre.next = node.next;
        node.next.pre = node.pre;
        this.map.delete(node.key);
        --this.listLen;
    }
    node = new listNode(key, value);
    this.head.next.pre = node;
    node.next = this.head.next;
    this.head.next = node;
    node.pre = this.head;
    this.map.set(key, node);
    ++this.listLen;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */