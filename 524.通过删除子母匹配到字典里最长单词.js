/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function (s, dictionary) {
    let res = "";
    for (let i = 0; i < dictionary.length; ++i) {
        if (res.length > dictionary[i].length || (res.length === dictionary[i].length && res < dictionary[i]))
            continue;
        let [j, k] = [0, 0];
        while (j < s.length && k < dictionary[i].length) {
            if (s[j] == dictionary[i][k]) {
                ++j;
                ++k;
            } else {
                ++j;
            }
        }
        if (k === dictionary[i].length) {
            if (res.length < dictionary[i].length) {
                res = dictionary[i];
            } else if (res.length == dictionary[i].length) {
                res = res > dictionary[i] ? dictionary[i] : res;
            }
        }
    }
    return res;
};