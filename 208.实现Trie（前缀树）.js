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
    const dfs = (index, node) => {
        if (index === word.length) {
            return node.isEnd;
        }
        const ch = word.charAt(index);
        const i = ch.charCodeAt() - 'a'.charCodeAt();
        const child = node.children[i];
        if (child && dfs(index + 1, child))
            return true;
        return false;
    };

    return dfs(0, this);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    const dfs = (index, node) => {
        if (index === prefix.length) {
            return true;
        }
        const ch = prefix.charAt(index);
        const i = ch.charCodeAt() - 'a'.charCodeAt();
        const child = node.children[i];
        if (child && dfs(index + 1, child))
            return true;
        return false;
    };

    return dfs(0, this);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */