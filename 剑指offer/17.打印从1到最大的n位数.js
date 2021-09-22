/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function (n) {

    let s = new Array(n).fill("");
    let res = [];
    const permutation = (s, pos) => {
        if (pos == n) {
            inputNumbers(s);
            return;
        }
        for (let i = 0; i <= 9; ++i) {
            s[pos] = i + "";
            permutation(s, pos + 1);
        }
    }

    const inputNumbers = (s) => {
        let t = "";
        let i = 0;
        while (i < n && s[i] === "0")
            ++i;
        for (; i < n; ++i)
            t += s[i];
        if (t !== "")
            res.push(parseInt(t));
    }

    permutation(s, 0);

    return res;
};
 