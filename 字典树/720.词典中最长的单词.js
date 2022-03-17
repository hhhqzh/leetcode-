/**
 * @param {string[]} words
 * @return {string}
 */

// 字典树
class Trie {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }

    insert(word) {
        let node = this;
        for (let w of word) {
            let idx = w.charCodeAt() - 'a'.charCodeAt();
            if (node.children[idx] === null) {
                node.children[idx] = new Trie();
            }
            node = node.children[idx];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this,
            i = 0;
        for (; i < word.length; ++i) {
            let idx = word.charAt(i).charCodeAt() - 'a'.charCodeAt();
            if (node.children[idx] === null) {
                break;
            }
            node = node.children[idx];
        }
        if (i === word.length - 1) {
            this.insert(word);
            return true;
        }
        return false;
    }
}

var longestWord = function (words) {
    let root = new Trie();
    let res = "";
    words.sort((a, b) => {
        return a.length - b.length
    });
    for (let word of words) {
        if (root.search(word)) {
            if (res.length < word.length) {
                res = word;
            } else if (res.length === word.length) {
                res = res > word ? word : res;
            }
        }
    }
    return res;
};