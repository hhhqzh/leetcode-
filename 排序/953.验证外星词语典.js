/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let map = new Map();
    for (let i = 0; i < order.length; ++i) {
        map.set(order.charAt(i), i);
    }
    let newWords = [].concat(words);
    newWords.sort((a, b) => {
        let i = 0,
            j = 0,
            len1 = a.length,
            len2 = b.length;
        while (i < len1 && j < len2) {
            if (map.get(a.charAt(i)) < map.get(b.charAt(j))) {
                return -1;
            } else if (map.get(a.charAt(i)) > map.get(b.charAt(j))) {
                return 1;
            }
            ++i;
            ++j;
        }
        return i < len1 ? 1 : j < len2 ? -1 : 0;
    });
    return words.join(',') === newWords.join(',');
};