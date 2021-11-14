// 用 map 实现
var MapSum = function () {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    this.map.set(key, val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let sum = 0;
    for (let m of this.map) {
        if (m[0].startsWith(prefix)) {
            sum += m[1];
        }
    }
    return sum;
};

// 前缀树

// 定义前缀树
var TrieNode = function (isEnd, val) {
    this.isEnd = isEnd ? isEnd : false;
    this.children = new Array(26).fill(null);
    this.val = val ? val : 0; // val 保存 key 的值，只当 isEnd 为 true 时有效
}

var MapSum = function () {
    this.trie = new TrieNode();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
// 插入前缀树
MapSum.prototype.insert = function (key, val) {
    let tree = this.trie;
    for (let i = 0; i < key.length; ++i) {
        let idx = key.charCodeAt(i) - 97;
        if (tree.children[idx] === null) {
            tree.children[idx] = new TrieNode();
        }
        tree = tree.children[idx];
    }
    tree.isEnd = true; // 标记为结束节点
    tree.val = val; // 记录 val
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let tree = this.trie;
    for (let i = 0; i < prefix.length; ++i) {
        let idx = prefix.charCodeAt(i) - 97;
        if (tree.children[idx] === null)
            return 0;
        else
            tree = tree.children[idx];
    }
    return this.sumVal(tree);
};

// 前缀树查找
MapSum.prototype.sumVal = function (tree) {
    let sum = 0;
    if (tree === null)
        return 0;
    if (tree.isEnd) // 注意，这里不能直接返回
        sum += tree.val;
    for (let i = 0; i < 26; ++i) {
        sum += this.sumVal(tree.children[i]);
    }
    return sum;
}