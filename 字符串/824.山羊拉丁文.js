/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let arr = ['a', 'e', 'i', 'o', 'u'],
        words = sentence.split(' '),
        temp = 'a';
    for (let i = 0; i < words.length; ++i) {
        // 元音
        if (arr.indexOf(words[i].charAt(0).toLowerCase()) !== -1) {
            words[i] += 'ma';
        } else {
            words[i] = words[i].slice(1) + words[i][0] + 'ma';
        }
        words[i] += temp;
        temp += 'a';
    }
    return words.join(' ');
};