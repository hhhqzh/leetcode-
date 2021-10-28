/**
 * @param {number} n
 * @return {boolean}
 */
 var reorderedPowerOf2 = function (n) {

    const swap = (cur, i, j) => {
        let t = cur[i];
        cur[i] = cur[j];
        cur[j] = t;
        return t;
    }

    const permutation = (start, cur) => {
        if (cur[0] === '0')
            return false;
        if (start === cur.length) {
            let a = parseInt([].concat(cur).join(""));
            let flag = 0;
            while (a) {
                flag += a % 2;
                a >>= 1;
                if (flag > 1)
                    return false;
            }
            return flag === 1;
        }
        for (let i = start; i < cur.length; ++i) {
            if (i !== start && cur[start] === cur[i])
                continue;
            swap(cur, start, i);
            if (permutation(start + 1, cur))
                return true;
            swap(cur, start, i);
        }
        return false;
    }

    let arr = (n + "").split("");
    return permutation(0, arr);
};