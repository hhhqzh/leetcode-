// 定义字典树
function Trie() {
    this.children = new Array(26).fill(false);
    this.isEnd = false;
}

Trie.prototype.insert = function (word) {
    let node = this;
    for (let i = 0; i < word.length; ++i) {
        const ch = word.charAt(i);
        const index = ch.charCodeAt() - 'a'.charCodeAt();
        if (!node.children[index]) {
            node.children[index] = new Trie();
        }
        node = node.children[index];
    }
    node.isEnd = true;
}

var WordDictionary = function () {
    this.root = new Trie();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    this.root.insert(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    const dfs = (index, node) => {
        if (index === word.length) {
            return node.isEnd;
        }
        const ch = word.charAt(index);
        if (ch === '.') {
            for (const child of node.children) {
                if (child && dfs(index + 1, child))
                    return true;
            }
        } else {
            const i = ch.charCodeAt() - 'a'.charCodeAt();
            const child = node.children[i];
            if (child && dfs(index + 1, child))
                return true;
        }
        return false;
    };

    return dfs(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */