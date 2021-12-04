/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let arr = new Array(26).fill(0);
    for (let m of magazine) {
        ++arr[m.charCodeAt() - 97];
    }
    for (let r of ransomNote) {
        if (arr[r.charCodeAt() - 97] > 0) {
            --arr[r.charCodeAt() - 97];
        } else {
            return false;
        }
    }
    return true;
};