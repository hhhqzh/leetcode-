/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    let l = 0, r = s.length;
    var res = s.split("");
    while (l < r) {
        while (vowels.indexOf((s.charAt(l) + "").toLowerCase()) == -1 && l < s.length)
            ++l;
        while (vowels.indexOf((s.charAt(r) + "").toLowerCase()) == -1 && r >= 0)
            --r;
        if (l < r) {
            let temp = res[l];
            res[l] = res[r];
            res[r] = temp;
            ++l;
            --r;
        }
    }
    return res.join("");
};