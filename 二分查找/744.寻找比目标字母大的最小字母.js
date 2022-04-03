/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let l = 0,
        r = letters.length - 1;
    while (l < r) {
        let mid = Math.floor((r - l) / 2) + l;
        if (letters[mid] <= target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return letters[l] > target ? letters[l] : letters[0];
};