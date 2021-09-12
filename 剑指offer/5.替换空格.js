/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    let arr = s.split("");
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === ' ') {
            arr.splice(i, 1, '%', '2', '0');
        }
    }
    return arr.join("");
};