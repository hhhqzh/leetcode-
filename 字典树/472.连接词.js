/**
 * @param {string[]} words
 * @return {string[]}
 */
const A = 'a'.charCodeAt();

// 字典树
function Trie() {
    this.end = false;
    this.nexts = new Array(26).fill(null);
}


Trie.prototype.insert = function (word) {
    let cur = this;
    for (let i = 0; i < word.length; ++i) {
        let ch = word.charAt(i).charCodeAt() - A;
        if (cur.nexts[ch] === null) {
            cur.nexts[ch] = new Trie();
        }
        cur = cur.nexts[ch];
    }
    console.log(word)
    cur.end = true;
}

Trie.prototype.search = function (word) {
    let root = this;
    let cur = this;
    if (word === "") {
        return true;
    }
    for (let i = 0; i < word.length; ++i) {
        let ch = word.charAt(i).charCodeAt() - A;
        if (cur.nexts[ch] === null) {
            return false;
        }
        if (cur.nexts[ch].end === true) {
            if (root.search(word.substring(i + 1))) {
                return true;
            }
        }
        cur = cur.nexts[ch];
    }
    return false;
}

var findAllConcatenatedWordsInADict = function (words) {
    let res = [];
    let root = new Trie();
    words.sort((a, b) => {
        return a.length - b.length;
    })
    for (let word of words) {
        if (word === "") {
            continue;
        }
        if (root.search(word)) {
            res.push(word);
        } else {
            root.insert(word);
        }
    }
    return res;
};