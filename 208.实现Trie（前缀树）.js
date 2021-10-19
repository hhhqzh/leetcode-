var Trie = function () {
    this.children = new Array(26).fill(null);
    this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this;
    for (let i = 0; i < word.length; ++i) {
        const ch = word.charAt(i);
        const index = ch.charCodeAt() - 'a'.charCodeAt();
        if (node.children[index] === null) {
            node.children[index] = new Trie();
        }
        node = node.children[index];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.startsWith(word);
    return node && node.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this;
    for (const ch of prefix) {
        let index = ch.charCodeAt() - 'a'.charCodeAt();
        if (node.children[index] === null) {
            return false;
        }
        node = node.children[index];
    }
    return node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */