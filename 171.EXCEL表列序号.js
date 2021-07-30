/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    var res = 0;
    var n = columnTitle.length;
    for (let i = 0; i < n; ++i) {
        res = res + ((columnTitle[n - i - 1].charCodeAt() - 'A'.charCodeAt() + 1) * Math.pow(26, i));
    }
    return res;
};

var titleToNumber = function(columnTitle) {
    var res = 0;
    var n = columnTitle.length;
    for (let i = 0; i < n; ++i) {
        res = res * 26 + (columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1);
    }
    return res;
};